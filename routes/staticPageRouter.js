const express = require("express");
const { isLoggedIn } = require("../middlewares/isLoggedIn");
const { requireLogin } = require("../middlewares/requireLogin");
const URL = require("../modules/urlSchema")

const pageRouter = express.Router();

pageRouter.get("/",(req,res)=>{
    return res.render("home");
});

pageRouter.get("/home",(req,res)=>{
    return res.render("home");
});

pageRouter.get("/login",(req,res)=>{
    return res.render("login");
});

pageRouter.get("/signup",(req,res)=>{
    return res.render("signup");
});

pageRouter.get("/dashboard",requireLogin,async(req,res)=>{
    return res.render("dashboard");
});

pageRouter.get("/myaccount",requireLogin,async(req,res)=>{
    return res.render("myaccount");
});

pageRouter.get("/links",requireLogin,async(req,res)=>{
    const allurls = await URL.find({ createdBy: req.user._id });
    return res.render("links", {urls:allurls});
});

pageRouter.get("/createlink",requireLogin,async(req,res)=>{
    return res.render("createlink");
});

pageRouter.get("/details/:id",requireLogin,async(req,res)=>{
    const url = await URL.findOne({ shortId: req.params.id, createdBy: req.user._id });
    if(!url){
        res.status(404).send("URL not found");
    }
    return res.render("details",{url});
});






pageRouter.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.redirect("/home");
});



module.exports = pageRouter;