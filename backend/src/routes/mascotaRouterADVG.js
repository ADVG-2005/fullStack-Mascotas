import { Router } from "express";
import { deleteADVG, getADVG, getOneADVG, postADVG, putADVG } from "../controllers/mascotasControllerADVG.js";
import uploadADVG from "../middleware/multerADVG.js";
import { validTokenADVG } from "../middleware/verifyTokenADVG.js";


const mascotaRouterADVG = Router()
mascotaRouterADVG.post('/mascotaADVG',validTokenADVG,uploadADVG.single('foto'),postADVG)
mascotaRouterADVG.get('/mascotaADVG',validTokenADVG,getADVG)
mascotaRouterADVG.get('/mascotaADVG/:id',validTokenADVG,getOneADVG)
mascotaRouterADVG.put('/mascotaADVG/:id',validTokenADVG,uploadADVG.single('foto'),putADVG)
mascotaRouterADVG.delete('/mascotaADVG/:id',validTokenADVG,deleteADVG)

export default mascotaRouterADVG