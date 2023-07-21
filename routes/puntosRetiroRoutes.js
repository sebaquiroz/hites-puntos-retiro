const express = require("express");
const router = express.Router();

const puntosRetiroController = require("../controllers/puntosRetiroController");

router.post('/', puntosRetiroController.puntosRetiro);
module.exports = router;