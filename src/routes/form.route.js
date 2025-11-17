import express from "express";
import { getData, postForm } from "../controllers/form.controller.js";

const formRouter = express.Router();

formRouter.post("/formData",postForm);
formRouter.get("/getData",getData)

export default formRouter;