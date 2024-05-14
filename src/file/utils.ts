import { extname } from "path";

export const imageFileFilter = (req, file, callback) =>{
    if(!file.originalname.match(/\.(jpg|png|jpeg|gif)$/)){
        return callback(new Error('Only image files are allowed!'), false);
    }
    callback(null, true);
}
//req: This represents the request object, which contains information about the file upload request.
//file: This represents the uploaded file itself.
//callback: This is a function that the imageFileFilter function will call later on to indicate whether the upload is allowed or not.
export const editFileName = (req, file, callback) =>{
    const name = file.originalname.split('.')[0];
    const fileExtName = extname(file.originalname)
    const randomName = Array(4)
       .fill(null)
       .map(() => Math.round(Math.random() * 16).toString(16))
       .join('');
    callback(null, `${name}-${randomName}.${fileExtName}`);
}

