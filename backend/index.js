import express from "express"
import { config } from "dotenv"
import cors from 'cors'
import morgan from 'morgan'
config()

//importacion de rutas
import categoriaRouterADVG from './src/routes/categoriaRouterADVG.js'
import razaRouterADVG from './src/routes/razaRouterADVG.js'
import generoRouterADVG from './src/routes/generoRouterADVG.js'
import mascotaRouterADVG from './src/routes/mascotaRouterADVG.js'
import usuariosRouterADVG from "./src/routes/usuariosRoutesADVG.js"
import routerDoc from "./src/routes/docsRouterADVG.js"

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended : false}))
//documentacion
app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use(express.static('./public'));
//morgan
app.use('/public',express.static('public/'));
app.use(morgan('dev'));
app.use(cors())
//Rutas
app.use("/api/",categoriaRouterADVG)
app.use("/api/",razaRouterADVG)
app.use("/api/",generoRouterADVG)
app.use("/api/",mascotaRouterADVG)
app.use("/api/",usuariosRouterADVG)
app.use(routerDoc)

app.listen(process.env.PORT,()=>{
    console.log("servidor inicalizado en puerto",process.env.PORT)
    console.log("documentacion Corriendo en: http://10.4.20.71:3000/docs")
})
