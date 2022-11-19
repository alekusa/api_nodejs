const mongoose = require("mongoose");

const StorageSchema = new mongoose.Schema(
    {
        url:{
            type:string
        },
        filename:{
            type:String
        },
        
    },
    {
        timestamp:true, //TODO cratedAt, updateAt
        versionKey: false
    }
);

module.exports = mongoose.model("storage", StorageSchema)