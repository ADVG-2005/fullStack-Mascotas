import { Router } from "express";
import { deleteADVG, getADVG, getOneADVG, postADVG, putADVG } from "../controllers/razaControllerADVG.js";

const razaRouterADVG = Router()
razaRouterADVG.post('/raza',postADVG)
razaRouterADVG.get("/raza",getADVG)
razaRouterADVG.get("/raza/:id",getOneADVG)
razaRouterADVG.put("/raza/:id",putADVG)
razaRouterADVG.delete("/raza/:id",deleteADVG)

export default razaRouterADVG