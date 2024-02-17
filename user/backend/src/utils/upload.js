const multer = require('multer');
const path = require('path');
const express = require('express');
const router = express.Router();

// Set up storage for multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'backend/src/foodImages/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Handle POST request to upload image
router.post('/uploadimage', upload.single('image'), (req, res) => {
  const imageUrl = req.file ? req.file.filename : null; // Get the filename
  const originalName = req.file ? req.file.originalname : null; // Get the original filename

  res.send({ imageUrl, originalName }); 
});

module.exports = router;
