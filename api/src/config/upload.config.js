const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

var upload = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const { mimetype } = file;
    const xlsx =
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
    const fileTypes = /pdf|xls/;
    const mimeType = fileTypes.test(mimetype);

    if (mimeType || mimetype === xlsx) {
      return cb(null, true);
    }
    cb("Give proper files formate to upload");
  },
});

module.exports = upload;
