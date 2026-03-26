const express = require("express");
const { requireLogin } = require("../middlewares/requireLogin");
const {qrCodeGenerator} = require("../middlewares/qrCode");

const urlRouter = express.Router();


const {handleGenerateNewShortURL} = require("../controllers/urlController")

urlRouter.post("/createlink",requireLogin,qrCodeGenerator,handleGenerateNewShortURL,)
// urlRouter.post("/analytics/:shortId", )


module.exports = urlRouter;