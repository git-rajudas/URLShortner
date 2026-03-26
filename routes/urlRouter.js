const express = require("express");
const {qrCodeGenerator} = require("../middlewares/qrCode");

const urlRouter = express.Router();


const {handleGenerateNewShortURL} = require("../controllers/urlController")

urlRouter.post("/createlink",qrCodeGenerator,handleGenerateNewShortURL,)
// urlRouter.post("/analytics/:shortId", )


module.exports = urlRouter;