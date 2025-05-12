import { Router } from "express";
import { deleteADVG, getADVG, getOneADVG, postADVG, putADVG } from "../controllers/categoriaControllerADVG.js";
import { validTokenADVG } from "../middleware/verifyTokenADVG.js";

const categoriaRouterADVG = Router()
categoriaRouterADVG.post('/categoriaADVG',validTokenADVG,postADVG)
categoriaRouterADVG.get("/categoriaADVG",validTokenADVG,getADVG)
categoriaRouterADVG.get("/categoriaADVG/:id",validTokenADVG,getOneADVG)
categoriaRouterADVG.put("/categoriaADVG/:id",validTokenADVG,putADVG)
categoriaRouterADVG.delete("/categoriaADVG/:id",validTokenADVG,deleteADVG)

export default categoriaRouterADVG