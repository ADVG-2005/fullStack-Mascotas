import { PrismaClient } from "@prisma/client";
const prismaADVG = new PrismaClient()
export const postADVG = async (req, res) => {
    try {
        const { nombre, estado, fk_Raza, fk_Categoria, fk_Genero } = req.body;

        const foto = req.file ? req.file.filename : null;

        const sql = await prismaADVG.mascota.create({
            data: {
                nombre,
                estado,
                fk_Raza: parseInt(fk_Raza),
                fk_Categoria: parseInt(fk_Categoria),
                foto,
                fk_Genero: parseInt(fk_Genero)
            }
        });

        return res.status(201).json({ msg: "La mascota fue registrada correctamente", data: sql });

    } catch (error) {
        console.error(error);
        return res.status(500).json({ msg: "Error en el servidor" });
    }
}

export const getADVG = async (req,res) => {
    try{
        const sql = await prismaADVG.mascota.findMany({
            include:{
                raza:true,
                genero:true,
                categoria:true
            }
        })
        if (sql){
            return res.status(200).json({data:sql})
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
            where : {id : parseInt(id),
            },
            include:{
                raza:true,
                categoria:true,
                genero : true
            }
        })

        if (sql){
            return res.status(200).json({data:sql})
        }
        return res.status(404).json({msg : "No se encontro el ID"})

    }catch(error){
        console.error(error)
        return res.status(500).json({msg : "Error en el servidor"})
    }
}

export const putADVG = async (req, res) => {
    try {
        const { id } = req.params;

        const { nombre, estado, fk_Raza, fk_Categoria, fk_Genero } = req.body;

        const foto = req.file ? req.file.filename : undefined;

        const dataToUpdate = {
            nombre,
            estado,
            fk_Raza: fk_Raza ? parseInt(fk_Raza) : undefined,
            fk_Categoria: fk_Categoria ? parseInt(fk_Categoria) : undefined,
            fk_Genero: fk_Genero ? parseInt(fk_Genero) : undefined,
        };

        if (foto) {
            dataToUpdate.foto = foto;
        }

        const sql = await prismaADVG.mascota.update({
            where: { id: parseInt(id) },
            data: dataToUpdate,
        });

        return res.status(200).json({ msg: "Mascota actualizada correctamente", data: sql });

    } catch (error) {
        console.error(error);
        if (error.code === "P2025") {
            return res.status(404).json({ msg: "No se encontró el ID" });
        }
        return res.status(500).json({ msg: "Error en el servidor" });
    }
};


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