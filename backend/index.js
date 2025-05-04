import express from "express"
import { config } from "dotenv"
config()

//importacion de rutas
import categoriaRouterADVG from './src/routes/categoriaRouterADVG.js'
import razaRouterADVG from './src/routes/razaRouterADVG.js'
import generoRouterADVG from './src/routes/generoRouterADVG.js'
import mascotaRouterADVG from './src/routes/mascotaRouterADVG.js'
import usuariosRouterADVG from "./src/routes/usuariosRoutesADVG.js"

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended : false}))

//Rutas
app.use("/api/",categoriaRouterADVG)
app.use("/api/",razaRouterADVG)
app.use("/api/",generoRouterADVG)
app.use("/api/",mascotaRouterADVG)
app.use("/api/",usuariosRouterADVG)


app.listen(process.env.PORT,()=>{
    console.log("servidor inicalizado en puerto",process.env.PORT)
})
