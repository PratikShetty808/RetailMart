// const util = require("util");
// const multer = require("multer");
import multer from 'multer'
const maxSize = 2 * 1024 * 1024;

// const __basedir = __dirname

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    console.log(file.originalname);
    cb(null, file.originalname);
  },
});

export const uploadFile = multer({
  storage: storage,
  limits: { fileSize: maxSize },
})