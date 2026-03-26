const mongoose = require("mongoose");

// Schema = Blueprint of documents in MongoDB Like a table structure in SQL. It defines the structure of the documents, default values, validators, etc.

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        // required: [true, "Username is Required"],
    },
    email:{
        type: String,
        required: [true, "Email is Required"],   
        unique: true,
    },
    password:{
        type: String,
        required: [true, "Password is Required"],
    }
}, {timestamps:true});


// User Model is created using the userSchema and is exported for use in other parts of the application.
// like You use it to: ✔ Create users ✔ Read users ✔ Update users ✔ Delete users.

const User = mongoose.model("user", userSchema);

module.exports = User; 