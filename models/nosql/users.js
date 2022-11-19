const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        name:{
            type:string
        },
        age:{
            type:Number
        },
        email:{
            type:String,
            unique:true
        },
        password:{
            type:String
        },
        role:{
            type:["user","admin"],
            default: "user"
        }
    },
    {
        timestamp:true, //TODO cratedAt, updateAt
        versionKey: false
    }
);

module.exports = mongoose.model("users", UserSchema)