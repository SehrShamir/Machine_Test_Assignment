const multer = require('multer');
const path = require('path');

// Define storage configuration for multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // folder where files will be saved, create this folder
  },
  filename: function (req, file, cb) {
    // Use original name with timestamp for uniqueness
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

// File filter for csv files only
const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'text/csv' || file.mimetype === 'application/vnd.ms-excel') {
    cb(null, true);
  } else {
    cb(new Error('Only CSV files are allowed'), false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 1024 * 1024 * 5 // 5MB max size
  }
});

module.exports = upload;
