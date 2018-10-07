"use strict";

const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const upload = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 50000000
  }
});

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());

// API Call
app.post("/api/fileanalyze", upload.single("upfile"), (req, res) => {
  res.json({
    name: req.file.originalname,
    type: req.file.mimetype,
    size: req.file.size
  });
});

// Heroku setup
if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.join(__dirname, "client/build")));

  // Handle React routing, return all requests to React app
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));
