const multer = require("multer");
const iconv = require("iconv-lite")

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});



// var upload = multer({
//   storage: storage,
//   limits: { fileSize: 10 * 1024 * 1024 },
//   fileFilter: (req, file, cb) => {
//     const { mimetype } = file;
//     // const xlsx =
//     //   "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
//     const fileTypes = /pdf|jpg|jpeg|doc|xls|xlsx/;
//     const mimeType = fileTypes.test(mimetype);

//     if (mimeType) {
//       return cb(null, true);
//     }
//     cb("Give proper files formate to upload");
//   },
// });

// var upload = multer({
//   storage: storage,
//   limits: { fileSize: 10 * 1024 * 1024 },
//   fileFilter: (req, file, cb) => {
//     const { mimetype } = file;
//     const fileTypes = /pdf|jpg|jpeg|doc|docx|xls|xlsx/; // Updated regular expression

//     const mimeType = fileTypes.test(mimetype);

//     if (mimeType) {
//       return cb(null, true);
//     }

//     cb("Give proper files format to upload");
//   },
// });

var upload = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const { mimetype } = file;
    const fileTypes = /pdf|jpg|jpeg|doc|docx|xls|xlsx/;

    // Check if the file extension is one of the allowed types
    const fileExtension = file.originalname.split('.').pop();
    const isAllowedFileType = fileTypes.test(fileExtension);

    // Check if the mimetype is one of the allowed types
    const isAllowedMimeType = fileTypes.test(mimetype);

    if (isAllowedFileType || isAllowedMimeType) {
      return cb(null, true);
    }

    cb("Give proper files format to upload");
  },
});

module.exports = upload;
