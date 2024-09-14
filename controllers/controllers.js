import { MediaDB } from "../services/cloudinary.js";
export const UploadToCloudinary = (req, res) => {
  try {
    const PATH = req.file.path;
    if (!PATH) {
      return res.status(404).json({
        message: "Media not found",
        success: false,
      });
    }
    const UploadingMediaToCloudinary = MediaDB(PATH);
    console.log(UploadingMediaToCloudinary);
    return res.status(200).json({
      message: "Media upload successfully",
      success: true,
    });
  } catch (error) {
    console.log("Error occured while uploading media: ", error)
  }
};
