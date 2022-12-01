const mongoose = require('mongoose');
//mongodb+srv://alekusa:oxEk202BzyrUM1pG@cluster0.ro0jxoi.mongodb.net/?retryWrites=true&w=majority
const dbConnect = () => {
    const DB_URI = process.env.DB_URI;
    mongoose.connect(
        DB_URI,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
        (err, res) => {
        if(!err){
            console.log("Conect SUCCESSFUL");
        }else{
            console.log("conect ERROR");
        }
    });
}; 

module.exports = dbConnect;