const user = require("../modules/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const jwt_secret = process.env.jwt_secret;



async function handleUserSignUp(req, res) {
    try {

        const { username, email, password } = req.body;
        // Existing User Find
        const existingUser = await user.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Hash Password

        const hash = await bcrypt.hash(password, 10);

        // Create New User
        const newUser = await user.create({
            username,
            email,
            password: hash,
        });

        // Create JWT Token

        const token = jwt.sign({
            id: newUser._id,
            username: newUser.username,
            email: newUser.email,
        }, jwt_secret, { expiresIn: "7d" });

        // Send Token As Cookie
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
        });

        // send response
        res.redirect("/home");


    }
    // Error Handle
    catch (error) {
        console.error(error);
        res.status(500).json({ message: "Signup failed" });
    }
}



async function handleUserSignIn(req, res) {
    try {
        const { email, password } = req.body;
        const findUser = await user.findOne({email});
        console.log(findUser);
        if (!findUser) {
            return res.send("Something went wrong");
        }

        // Compare Password
        const isMatch = await bcrypt.compare(password, findUser.password);
        if (!isMatch) {
            return res.status(400).send("Something Went not");
        }

        // Create JWT Token
        const token = jwt.sign({
            id: findUser._id,
            username: findUser.username,
            email: findUser.email,
        }, jwt_secret, { expiresIn: "7d" });

        // Send Token As Cookie
        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
        });

        // send response
        res.redirect("/home");

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Sing failed" });
    };

}





module.exports = { handleUserSignUp, handleUserSignIn }