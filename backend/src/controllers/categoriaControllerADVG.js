import { PrismaClient } from "@prisma/client";
const prismaADVG = new PrismaClient()

export const postADVG = async (req,res) => {
    try {
        const sql = await prismaADVG.categoria.create({
            data: req.body
        })
        if(sql){
            return res.status(201).json({msg : "La categoria fue creada correctamente",data:sql})
        }
    }
    catch(error){
        console.error(error)
        return res.status(500).json({"msg" : "Error en el servidor"})
    }
}

export const getADVG = async (req,res) => {
    try{
        const sql = await prismaADVG.categoria.findMany()
        if (sql){
            return res.status(200).json(sql)
        }
    }catch(error){
        console.error(error)
        return res.status(500).json({msg : "Error en el servidor"})
    }
}

export const getOneADVG = async (req,res) => {
    try{
        const {id}=req.params
        const sql = await prismaADVG.categoria.findUnique({
            where : {id : parseInt(id)},
        })

        if (sql){
            return res.status(200).json(sql)
        }
        return res.status(404).json({msg : "No se encontro el ID"})
    }catch(error){
        console.error(error)
        return res.status(500).json({msg : "Error en el servidor"})
    }
}

export const putADVG = async (req,res) => {
    try{
        const {id} = req.params
        const sql = await prismaADVG.categoria.update({
            where : {id : parseInt(id)},
            data : req.body
        })

        if (sql) {
            return res.status(200).json({msg : "Categoria actualizada correctamente",sql})
        }
    }catch(error){
        console.error(error)
        if (error.code == "P2025"){
            return res.status(404).json({msg : "No se encontro el ID"})
        }
        return res.status(500).json({msg : "Error en el servidor"})
    }
}

export const deleteADVG = async (req,res) => {
    try{
        const {id} = req.params
        const sql = await prismaADVG.categoria.delete({
            where : {id : parseInt(id)}
        })
        if (sql) {
            return res.status(200).json({msg : "Categoria eliminada correctamente"})
        }
    }catch(error){
        console.error(error);
        if (error.code == "P2025"){
            return res.status(404).json({msg : "No se encontro el ID"})
        }
        return res.status(500).json({msg : "Error en el servidor"})
    }
}

