import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { createRoutes } from "./src/routes/createRoutes.js";
import { generateRoutes } from "./src/routes/generatePDF.js";

const app=express();
app.use(express.json());
app.use(cors());
app.use("/create",createRoutes);
app.use("/generate",generateRoutes);

mongoose.connect("mongodb+srv://sribalakumarans:ZTXB58LREOi0IOI2@cluster0.mdhkhje.mongodb.net/StreamlinePatientOnboarding?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log("Connected to Database");
})

app.listen(5000,()=>{
    console.log("Running on the port 5000");
})