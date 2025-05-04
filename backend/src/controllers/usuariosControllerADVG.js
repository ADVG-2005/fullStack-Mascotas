import { PrismaClient } from "@prisma/client";
const prismaADVG = new PrismaClient()
export const postADVG = async (req,res) => {
    try {
        const {id,nombreCompleto,correo,contraseña}=req.body
        const sql = await prismaADVG.user.create({
            data: {
                id : id,
                nombreCompleto : nombreCompleto,
                correo : correo,
                contraseña : contraseña,
            }
        })
        if(sql){
            return res.status(201).json({msg : "Usuario registrado correctamente",data:sql})
        }
    }
    catch(error){
        console.error(error)
        return res.status(500).json({"msg" : "Error en el servidor"})
    }
}

export const getADVG = async (req,res) => {
    try{
        const sql = await prismaADVG.user.findMany()
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
        const sql = await prismaADVG.user.findUnique({
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
        const sql = await prismaADVG.user.update({
            where : {id : parseInt(id)},
            data : req.body
        })

        if (sql) {
            return res.status(200).json({msg : "User actualizado correctamente",sql})
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
        const sql = await prismaADVG.user.delete({
            where : {id : parseInt(id)}
        })
        if (sql) {
            return res.status(200).json({msg : "User eliminado correctamente"})
        }
    }catch(error){
        console.error(error);
        if (error.code == "P2025"){
            return res.status(404).json({msg : "No se encontro el ID"})
        }
        return res.status(500).json({msg : "Error en el servidor"})
    }
}