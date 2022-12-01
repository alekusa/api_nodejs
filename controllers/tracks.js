
const {matchedData} = require("express-validator");
const {tracksModel} = require("../models");
const {handleHttpError} = require("../utils/handleError");

const getItems = async (req, res) => {
    
    try{
        const data = await tracksModel.find({});
        res.send({data})
    }catch(e){
        handleHttpError(res, "ERROR_GET_ITEMS");
    }
    
}; 

const getItem = async (req, res) => {
    try{
        req = matchedData(req);
        const {id} = req;
        const data = await tracksModel.findById(id);
        res.send({ data});
    }catch(e){
        handleHttpError(res, "ERROR_GETITEM");
    }
}; 

const createItem = async (req, res) => {
    try{
        const body = matchedData(req);
        const data = await tracksModel.create(body)
        //const {body} = req;
        res.send({ data });
    }catch(e){
        handleHttpError(res, "ERROR_CREATE_ITEMS")
    }
}; 
const updateItems = async (req, res) => {
    try{
        const {id, ...body} = matchedData(req);
        const data = await tracksModel.findOneAndUpdate(
            id, body
        );
        //const {body} = req;
        res.send({ data });
    }catch(e){
        handleHttpError(res, "ERROR_CREATE_ITEMS")
    }
}; 
const deleteItems = async (req, res) => {
    try{
        req = matchedData(req);
        const {id} = req;
        const data = await tracksModel.deleteOne({_id:id});
        res.send({ data });
    }catch(e){
        handleHttpError(res, "ERROR_DELETE");
    }
}; 


module.exports = {getItems, getItem, createItem, updateItems, deleteItems};