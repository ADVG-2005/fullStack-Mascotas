import { Router } from "express";
import { deleteADVG, getADVG, getOneADVG, postADVG, putADVG } from "../controllers/generoControllerADVG.js";
import { validTokenADVG } from "../middleware/verifyTokenADVG.js";

const generoRouterADVG = Router()
generoRouterADVG.post('/generoADVG',validTokenADVG,postADVG)
generoRouterADVG.get("/generoADVG",validTokenADVG,getADVG)
generoRouterADVG.get("/generoADVG/:id",validTokenADVG,getOneADVG)
generoRouterADVG.put("/generoADVG/:id",validTokenADVG,putADVG)
generoRouterADVG.delete("/generoADVG/:id",validTokenADVG,deleteADVG)

export default generoRouterADVG