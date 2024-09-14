import { v2 as mediaUpload } from "cloudinary";

export const MediaDB = async (filePath) => {
    try {
      mediaUpload.config({
        cloud_name: "dgki5gnzf",
        api_key: "522634375794675",
        api_secret: process.env.CLOUDINARY_SECRET_KEY,
      });
  
      let mediaUploadResponse = mediaUpload.uploader.upload(filePath);
  
      console.log(mediaUploadResponse);
      return;
    } catch (error) {
      console.log(error);
    }
  };