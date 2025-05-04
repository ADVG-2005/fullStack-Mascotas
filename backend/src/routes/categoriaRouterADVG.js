import { Router } from "express";
import { deleteADVG, getADVG, getOneADVG, postADVG, putADVG } from "../controllers/categoriaControllerADVG.js";

const categoriaRouterADVG = Router()
categoriaRouterADVG.post('/categoria',postADVG)
categoriaRouterADVG.get("/categoria",getADVG)
categoriaRouterADVG.get("/categoria/:id",getOneADVG)
categoriaRouterADVG.put("/categoria/:id",putADVG)
categoriaRouterADVG.delete("/categoria/:id",deleteADVG)

export default categoriaRouterADVG