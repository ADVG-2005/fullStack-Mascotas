import { Router } from "express";
import docsController from "../controllers/docsControllerADVG.js";

const routerDoc = Router();

routerDoc.get("/docs", docsController);

export default routerDoc;
