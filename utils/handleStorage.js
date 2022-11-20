const multer = require("multer")
const storage = multer.diskStorage({
    destination:function(req, file, cb){
        const pathStorage = `${__dirname}/../storage`;
        cb(null, pathStorage)
    },
    filename: function(rew, file, cb){
        //TODO xxx.png xxx.mpg
        const ext = file.originalname.split(".").pop();
        const filename = `file-${Date.now()}.${ext}`; 
        cb(null, filename)
    },
});

const uploadMiddleware = multer({storage});

module. exports = uploadMiddleware