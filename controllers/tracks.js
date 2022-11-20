
const {tracksModel} = require("../models");
const getItem = (req, res) => {

}; 

const getItems = async (req, res) => {
    
    const data = await tracksModel.find({});
    res.send({data})
    res.send({data})
}; 
const createItem = async (req, res) => {
    const {body} = req;
    console.log(body);
    const data = await tracksModel.create(body)
    
    res.send({data});
}; 
const upgradeItems = (req, res) => {}; 
const deleteItems = (req, res) => {}; 


module.exports = {getItems, getItem, createItem, upgradeItems, deleteItems};