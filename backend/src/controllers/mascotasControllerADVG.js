import { PrismaClient } from "@prisma/client";
const prismaADVG = new PrismaClient()
export const postADVG = async (req,res) => {
    try {
        const {id,nombre,estado,fk_Raza,fk_Categoria,foto,fk_Genero}=req.body
        const sql = await prismaADVG.mascota.create({
            data: {
                id : id,
                nombre : nombre,
                estado : estado,
                fk_Raza : fk_Raza,
                fk_Categoria : fk_Categoria,
                foto : foto,
                fk_Genero : fk_Genero
            }
        })
        if(sql){
            return res.status(201).json({msg : "La mascota fue registrada correctamente",data:sql})
        }
    }
    catch(error){
        console.error(error)
        return res.status(500).json({"msg" : "Error en el servidor"})
    }
}

export const getADVG = async (req,res) => {
    try{
        const sql = await prismaADVG.mascota.findMany()
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
        const sql = await prismaADVG.mascota.findUnique({
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
        const sql = await prismaADVG.mascota.update({
            where : {id : parseInt(id)},
            data : req.body
        })

        if (sql) {
            return res.status(200).json({msg : "Mascota actualizada correctamente",sql})
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
        const sql = await prismaADVG.mascota.delete({
            where : {id : parseInt(id)}
        })
        if (sql) {
            return res.status(200).json({msg : "Mascota eliminada correctamente"})
        }
    }catch(error){
        console.error(error);
        if (error.code == "P2025"){
            return res.status(404).json({msg : "No se encontro el ID"})
        }
        return res.status(500).json({msg : "Error en el servidor"})
    }
}