const verifySelectedImage = (selectedImage) => {
  if (
    selectedImage.type !== "image/png" ||
    selectedImage.type !== "image/jpeg"
  ) {
    if (selectedImage.size > 2000000) {
      return {
        success: false,
        message: "El tamaño de la imágen es mayor al permitido.",
      };
    } else {
      return { success: true };
    }
  } else {
    return { success: false, message: "Tipo de imágen no permitido." };
  }
};

export default verifySelectedImage;
