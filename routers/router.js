import express, { Router } from "express";
import { upload } from "../middlewares/multer.js";
import { UploadToCloudinary } from "../controllers/controllers.js";

const Routes = Router();

Routes.post("/upload", upload.single("myFile"), UploadToCloudinary);

export default Routes
