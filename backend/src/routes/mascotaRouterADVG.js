import { Router } from "express";
import { deleteADVG, getADVG, getOneADVG, postADVG, putADVG } from "../controllers/mascotasControllerADVG.js";

const mascotaRouterADVG = Router()
mascotaRouterADVG.post('/mascota',postADVG)
mascotaRouterADVG.get('/mascota',getADVG)
mascotaRouterADVG.get('/mascota/:id',getOneADVG)
mascotaRouterADVG.put('/mascota/:id',putADVG)
mascotaRouterADVG.delete('/mascota/:id',deleteADVG)

export default mascotaRouterADVG