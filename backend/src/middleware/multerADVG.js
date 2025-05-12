import multer from 'multer'
import path from 'path'

const uploadADVG = multer({
    storage : multer.diskStorage({
        destination : function ( req, file, cb){
            cb(null,'public/mascotas')
        },
        filename : function ( req, file, cb ){
            const uniqueName = Date.now() + '-' + Math.round(Math.random() * 1E9)
            cb(null,uniqueName+path.extname(file.originalname));
        }
    })
});

export default uploadADVG;