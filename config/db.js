const mongoose = require("mongoose")
const {DB_URL} = require("./config")

async function connectToMongoDB(con){
    return mongoose.connect(DB_URL);
}

module.exports = {connectToMongoDB,}