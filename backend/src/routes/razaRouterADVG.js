import { Router } from "express";
import { deleteADVG, getADVG, getOneADVG, postADVG, putADVG } from "../controllers/razaControllerADVG.js";
import { validTokenADVG } from "../middleware/verifyTokenADVG.js";

const razaRouterADVG = Router()
razaRouterADVG.post('/razaADVG',validTokenADVG,postADVG)
razaRouterADVG.get("/razaADVG",validTokenADVG,getADVG)
razaRouterADVG.get("/razaADVG/:id",validTokenADVG,getOneADVG)
razaRouterADVG.put("/razaADVG/:id",validTokenADVG,putADVG)
razaRouterADVG.delete("/razaADVG/:id",validTokenADVG,deleteADVG)

export default razaRouterADVG