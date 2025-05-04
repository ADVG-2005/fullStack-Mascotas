import { Router } from "express";
import { deleteADVG, getADVG, getOneADVG, postADVG, putADVG } from "../controllers/generoControllerADVG.js";

const generoRouterADVG = Router()
generoRouterADVG.post('/genero',postADVG)
generoRouterADVG.get("/genero",getADVG)
generoRouterADVG.get("/genero/:id",getOneADVG)
generoRouterADVG.put("/genero/:id",putADVG)
generoRouterADVG.delete("/genero/:id",deleteADVG)

export default generoRouterADVG