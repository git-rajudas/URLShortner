async function qrCodeGenerator(req,res,next){
    const body = req.body;
    try{
        if(!body.url) return res.status(400).json({error: "URL is required"});
        const url = body.url;
        const QRcode = await fetch(`https://api.qrserver.com/v1/create-qr-code/?data=${url}&size=300x300`);
        res.locals.QRcode = QRcode;
        next();
    } catch (error) {
        console.error("Error generating QR code:", error);
        return res.status(500).json({error: "Error generating QR code"});
    }
}


module.exports = {qrCodeGenerator};