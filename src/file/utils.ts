export const imageFileFilter = (req, file, callback) =>{
    if(!file.originalname.match(/\.(jpg|png|jpeg|gif)$/)){
        return callback(new Error('Only image files are allowed!'), false);
    }
    callback(null, true);
}
