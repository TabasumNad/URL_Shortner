const express = require("express");
const router = express.Router();

const {
  handleGenerateNewShortURL
} = require("../controller/url.js");




router.post("/", handleGenerateNewShortURL);

module.exports = router;