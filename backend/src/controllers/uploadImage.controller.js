const AlumnoModel = require("../models/alumno.model");
const aws = require("aws-sdk");

const s3 = new aws.S3({
  accessKeyId: process.env.S3_ACCESS_KEY_ID,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  //Bucket: process.env.S3_BUCKET_NAME,
});

// @route     POST /api/students/uploadImage
// @desc      Set an image of student
// @access    Private
module.exports = async (req, res) => {
  const { noControl, imageName, imageBase64 } = req.body;

  let response;

  try {
    response = await uploadImage(imageName, imageBase64);
    if (!response) res.send(response);
  } catch (err) {
    console.error(`Error uploading image: ${err.message}`);
    return next(new Error(`Error uploading image: ${imageName}`));
  }

  await AlumnoModel.findOneAndUpdate({ noControl }, [
    {
      $set: {
        urlImage: response.data,
      },
    },
  ]);
  res.send(response);
};

/*
 * This function configs the params for the bucket and call the upload function
 */
const uploadImage = async (imageName, base64Image, type) => {
  const params = {
    Bucket: `${process.env.S3_BUCKET_NAME}`,
    Key: imageName,
    Body: new Buffer.from(
      base64Image.replace(/^data:image\/\w+;base64,/, ""),
      "base64"
    ),
    //ContentType: type,
  };

  let data;

  try {
    data = await promiseUpload(params);
  } catch (err) {
    console.error(err);

    return {
      success: false,
      message:
        "Error al cargar la imágen. Si el error oersite, contacte al administrador.",
    };
  }

  return {
    success: true,
    data: data.Location,
  };
};

/*
 * This function upload the image
 */
const promiseUpload = (params) => {
  return new Promise(function (resolve, reject) {
    s3.upload(params, function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};
