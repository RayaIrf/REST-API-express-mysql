const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images');
    },
    filename: (req, file, cb) => {
        const timestamp = new Date().getTime();
        const originalname = file.originalname;
        const extension = path.extname(file.originalname);

        cb(null, `${timestamp}-${originalname}-${extension}`);
    }
});

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 200 * 1000 * 1000 //200mb
    }
});

module.exports = upload;