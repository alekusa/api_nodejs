const mongoose = require("mongoose");

const TracksScheme = new mongoose.Schema(
    {
        name:{
            type:string
        },
        album:{
            type:String
        },
        cover:{
            type:String,
            validate: {
                validator: (req) => {
                return true;
            },
            message: "ERROR_URL",
            },
        },
        artist:{
          name:{
            type:String
            },
          nickname: {
            type:String
          },
          nationality:{
            type:String
          }
        },
        duration:{
            start:{
                type:Number
            },
            end:{
                type:Number
            }
        },
        mediaId:{
            type: mongoose.Types.ObjectId,
        },
    },
    {
        timestamp:true, //TODO cratedAt, updateAt
        versionKey: false
    }
);

module.exports = mongoose.model("users", TracksScheme)