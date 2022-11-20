
const {storageModel} = require("../models");
const PUBLIC_URL= process.env.PUBLIC_URL;
const getItem = (req, res) => {

}; 

const getItems = async (req, res) => {
    
    const data = await tracksModel.find({});
    res.send({data})
    res.send({data})
}; 
const createItem = async (req, res) => {
    const {body, file} = req;
    console.log(file);
    const fileData = {
        filename: file.filename, url: `${PUBLIC_URL}/${file.filename}`
    }
    const data = await storageModel.create(fileData)
    
    res.send({data});
}; 
const upgradeItems = (req, res) => {}; 
const deleteItems = (req, res) => {}; 


module.exports = {getItems, getItem, createItem, upgradeItems, deleteItems};