const renameImage = (image, nameImage) => {
  return new File([image], `${nameImage}.png`, {
    type: image.type,
  });
};

export default renameImage;
