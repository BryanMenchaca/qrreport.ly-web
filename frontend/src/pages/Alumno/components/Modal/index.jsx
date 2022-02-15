import React, { useContext, useState } from "react";
import { StudentContext } from "../../common/context";
import { CloudUpload } from "@material-ui/icons";
import api from "../../../../services/students";
import convertToBase64 from "../../../../utils/convertToBase64";
import verifySelectedImage from "../../../../utils/verifySelectedImage";
import renameImage from "../../../../utils/renameImage";

const UploadPhotoModal = () => {
  const { state, dispatch } = useContext(StudentContext);
  const [selectedImage, setSelectedImage] = useState(null);
  const [uploadingImage, setUploadingImage] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    setUploadingImage(true);
    const verify = verifySelectedImage(selectedImage);

    if (verify.success) {
      try {
        const convertedFile = await convertToBase64(renameImage(selectedImage));
        const response = await api.uploadImage(state.noControl, convertedFile);
        console.log(response);
        if (response.success) {
          document.querySelector("#photo").src = response.data;
          setUploadingImage(false);
          alert("Foto actualizada correctamente.");
        } else {
          alert(response.message);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      alert(verify.message);
    }
  };

  return (
    <div
      className="modal"
      tabIndex="-1"
      role="dialog"
      id="uploadPhotoModal"
      aria-labelledby="uploadPhotoModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Actualizar foto</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <div className="custom-file my-2">
                  <input
                    type="file"
                    className="custom-file-input"
                    id="customFile"
                    onChange={(e) => setSelectedImage(e.target.files[0])}
                  />
                  <label className="custom-file-label" htmlFor="customFile">
                    {selectedImage ? selectedImage.name : "Elige una imágen"}
                  </label>
                </div>
                <p className="small">
                  La imágen debe tener extensión JPEG y un tamaño máximo de 2
                  MB.
                </p>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <button
                    className="btn btn-sm btn-primary float-right"
                    type="submit"
                  >
                    {uploadingImage ? (
                      <div className="spinner-border text-white" role="status">
                        <span className="sr-only">Loading...</span>
                      </div>
                    ) : (
                      <CloudUpload className="mr-2" />
                    )}
                    Actualizar
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadPhotoModal;
