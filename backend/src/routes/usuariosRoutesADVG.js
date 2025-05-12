import { Router } from "express";
import { deleteADVG, getADVG, getOneADVG, postADVG, postLoginADVG, putADVG } from "../controllers/usuariosControllerADVG.js";

const usuariosRouterADVG = Router()
usuariosRouterADVG.post('/usuariosADVG',postADVG)
usuariosRouterADVG.post('/loginADVG',postLoginADVG)
usuariosRouterADVG.get('/usuariosADVG',getADVG)
usuariosRouterADVG.get('/usuariosADVG/:id',getOneADVG)
usuariosRouterADVG.put('/usuariosADVG/:id',putADVG)
usuariosRouterADVG.delete('/usuariosADVG/:id',deleteADVG)

export default usuariosRouterADVG