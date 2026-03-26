const env = require("dotenv").config();

if(!process.env.jwt_secret){
    throw new Error("JWT Secret is not defined in Environment Variables");

}

if(!process.env.DB_URL) {
    throw new Error("Database URL is not defined in Environment Variables");
}

const config = {
    DB_URL : process.env.DB_URL,
    jwt_secret : process.env.jwt_secret
}

module.exports = config;