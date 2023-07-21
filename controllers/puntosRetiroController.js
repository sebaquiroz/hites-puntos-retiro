const fs = require('fs');

exports.puntosRetiro = async (req, res) => {
    let region = req.body.region;
    let tipoSucursal = req.body.tipoSucursal;
    let iteracion = req.body.iteracion;

    // Leer el archivo JSON
    let rawdata = fs.readFileSync('./utils/sucursales.json');
    let sucursales = JSON.parse(rawdata);

    // Comprobar si la region y el tipo de sucursal existen en el archivo JSON
    if(sucursales[tipoSucursal] && sucursales[tipoSucursal][region]) {
        let direcciones = sucursales[tipoSucursal][region]['Direcciones'];
        let start = iteracion * 3;
        let end = start + 3;

        // Comprobar si hay direcciones para mostrar
        if(start < direcciones.length) {
            let result = direcciones.slice(start, end);
            res.status(200).send(result);
        } else {
            res.status(200).send({message: 'No hay más direcciones para mostrar'});
        }
    } else {
        res.status(400).send({message: 'Region o tipo de sucursal no válidos'});
    }
}