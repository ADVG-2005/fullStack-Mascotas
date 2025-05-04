import { Router } from "express";
import { deleteADVG, getADVG, getOneADVG, postADVG, putADVG } from "../controllers/usuariosControllerADVG.js";

const usuariosRouterADVG = Router()
usuariosRouterADVG.post('/usuarios',postADVG)
usuariosRouterADVG.get('/usuarios',getADVG)
usuariosRouterADVG.get('/usuarios/:id',getOneADVG)
usuariosRouterADVG.put('/usuarios/:id',putADVG)
usuariosRouterADVG.delete('/usuarios/:id',deleteADVG)

export default usuariosRouterADVG