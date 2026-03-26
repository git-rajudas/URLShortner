require("dotenv").config();


// Server Creating
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;

// Logger
const morgan = require("morgan");
app.use(morgan('dev'));

// DB Connection

const { connectToMongoDB } = require("./config/db");
connectToMongoDB(process.env.DB_URL).then(() => {
        console.log("Connection done of database");
    })
    .catch((err) => {
        console.log("Error in connecting database", err);
    })
    .finally(() => {
        console.log("Database Connection Attempted");
    });

// End of database connection code


// CookieParser
const cookieParser = require("cookie-parser");
app.use(cookieParser());


// Express Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Middleware to make 'host' and 'protocol' available in all templates
app.use((req, res, next) => {
  res.locals.host = req.get('host');
  res.locals.protocol = req.protocol;
  next();
});

// For Logged In User Details Access in EJS Files
const { isLoggedIn } = require("./middlewares/isLoggedIn"); 
app.use(isLoggedIn);

// For Serverside Rendering 
const ejs = require("ejs");
app.set("view engine", 'ejs')
// location of ejs file
const path = require("path");
app.set('views', path.join(__dirname, "views"));


// app.get("/", (req, res) => {
//     res.send("Welcome to URL Shortner API");
// });


// Routes Of User
const URouter = require("./routes/userRoutes");
app.use("/", URouter);

// Routes Of Link

const urlRoutes = require("./routes/urlRouter");
app.use("/", urlRoutes);


// Routes Of Static Pages
const pageRouter = require("./routes/staticPageRouter");
app.use("/",pageRouter);
// Express to serve static files
app.use(express.static("public"));

// Route for handling short URL redirection
const URL = require("./modules/urlSchema");
const {requireLogin} = require("./middlewares/requireLogin");
app.get("/:id",requireLogin,async(req,res)=>{
    const id = req.params.id;
    const user = req.user._id;
    const url = await URL.findOne({ shortId: id, createdBy: user });
    if(!url){
        return res.status(404).send("URL not found");
    }
    await url.updateOne({
    $inc: { clickCount: 1 },
    $push: { visitHistory: {
        timestamp: Date.now(),
    } }
  });
    return res.redirect(url.redirectUrl);
});


// Server Port 
app.listen(PORT, () => {
    console.log("Server is Running....");
});
