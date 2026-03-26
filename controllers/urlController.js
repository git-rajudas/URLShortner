const URL = require("../modules/urlSchema");
const {nanoid} = require('nanoid');

async function handleGenerateNewShortURL(req,res){
    const body = req.body;
    try{
        if(!body.url) return res.status(400).json({error: "URL is required"});
        const shortID = nanoid(8);
        console.log(shortID);
        await URL.create({
            shortId: shortID,
            title: body.title || "Untitled",
            redirectUrl: req.body.url,
            clickCount: 0,
            visitHistory: [],
            createdBy: req.user._id,
        });

        return res.redirect('/links')
    }catch(error){
        console.log(error);
    }
}




// async function handleGetAnalytics(req,res){
//     const body = req.body;
// }


module.exports = {handleGenerateNewShortURL};