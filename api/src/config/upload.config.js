const multer = require('multer');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`)
    }
})

var upload = multer({
    storage: storage,
    limits: { fieldSize: '100' },
    fileFilter: (req, file, cb) => {
        const xlsx = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
        const fileTypes = /pdf|xls/
        const mimeType = fileTypes.test(file.mimetype)  
        // const extname = fileTypes.test(path.extname(file.originalname))

        if(mimeType || file.mimetype === xlsx) {
            return cb(null, true)
        }
        cb('Give proper files formate to upload')
    }
})

module.exports = upload;