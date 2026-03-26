const express = require('express');
const { handleUserSignUp, handleUserSignIn } = require('../controllers/userControllers');
const UserRouter = express.Router();


UserRouter.post("/signup",handleUserSignUp);

UserRouter.post("/login",handleUserSignIn)


module.exports = UserRouter;