const express = require("express");
const router = express.Router();
const {getItems, getItem, createItem, updateItems, deleteItems} = require("../controllers/tracks");
const { validatorCreateItem, validatorGetItem } = require("../validators/tracks");
// Listar los Items
router.get("/",getItems);
//Obtener detalle de item
router.get("/:id",validatorGetItem, getItem);
// Cargar un registro - un item
router.post("/", validatorCreateItem, createItem);
// Actualizar un registro/Item
router.put("/:id", validatorCreateItem, validatorGetItem, updateItems);
// Borrar - delete un registro
router.delete("/:id", validatorGetItem, deleteItems );
module.exports = router