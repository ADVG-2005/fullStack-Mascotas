import { PrismaClient } from "@prisma/client";
const prismaADVG = new PrismaClient()
export const postADVG = async (req,res) => {
    try {
        const {id,nombre}=req.body
        const sql = await prismaADVG.raza.create({
            data: {
                id : id,
                nombre : nombre
            }
        })
        if(sql){
            return res.status(201).json({msg : "La raza fue creada correctamente",data:sql})
        }
    }
    catch(error){
        console.error(error)
        return res.status(500).json({"msg" : "Error en el servidor"})
    }
}

export const getADVG = async (req,res) => {
    try{
        const sql = await prismaADVG.raza.findMany()
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
        const sql = await prismaADVG.raza.findUnique({
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
        const sql = await prismaADVG.raza.update({
            where : {id : parseInt(id)},
            data : req.body
        })

        if (sql) {
            return res.status(200).json({msg : "Raza actualizada correctamente",sql})
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
        const sql = await prismaADVG.raza.delete({
            where : {id : parseInt(id)}
        })
        if (sql) {
            return res.status(200).json({msg : "Raza eliminada correctamente"})
        }
    }catch(error){
        console.error(error);
        if (error.code == "P2025"){
            return res.status(404).json({msg : "No se encontro el ID"})
        }
        return res.status(500).json({msg : "Error en el servidor"})
    }
}