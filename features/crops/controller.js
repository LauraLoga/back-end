
var connection = require('../../config/connection');
var data = {
    getCrops: _getCrops,
    getCrop: _getCrop,
    postCrop: _postCrop,
};
var crop = {
    idCultivo: req.body.idCultivo,
    nombreCultivo: req.body.nombreCultivo,
    temperaturaHabitaculoMin: req.body.temperaturaHabitaculoMin,
    temperaturaHabitaculoMax: req.body.temperaturaHabitaculoMax,
    temperaturaHabitaculoObjetivo: req.body.temperaturaHabitaculoObjetivo,
    humedadHabitaculoMin: req.body.humedadHabitaculoMin,
    humedadHabitaculoMax: req.body.humedadHabitaculoMax,
    humedadHabitaculoObjetivo: req.body.humedadHabitaculoObjetivo,
    humedadCultivoMin: req.body.humedadCultivoMin,
    humedadCultivoMax: req.body.humedadCultivoMax,
    humedadCultivoObjetivo: req.body.humedadCultivoObjetivo,
    iluminacionHabitaculoMin: req.body.iluminacionHabitaculoMin,
    iluminacionHabitaculoMax: req.body.iluminacionHabitaculoMax,
    iluminacionHabitaculoObjetivo: req.body.iluminacionHabitaculoObjetivo,
    temperaturaExteriorMin: req.body.iluminacionExteriorMin,
    temperaturaExteriorMax: req.body.iluminacionExteriorMax,
    temperaturaExteriorObjetivo: req.body.iluminacionExteriorObjetivo,
    humedadExteriorMin: req.body.humedadExteriorMin,
    humedadExteriorMax: req.body.humedadExteriorMax,
    humedadExteriorObjetivo: req.body.humedadExteriorObjetivo,
    iluminacionExteriorMin: req.body.iluminacionExteriorMin,
    iluminacionExteriorMax: req.body.iluminacionExteriorMax,
    iluminacionExteriorObjetivo: req.body.iluminacionExteriorObjetivo,
    tiempoFotosintesis: req.body.tiempoFotosintesis,
    idUsuario: req.body.idUsuario
};

function _getCrops(req, res) {
    connection.query('SELECT * from scai.Cultivo', function (err, rows, fields) {
        if (!err) {
            console.log(rows);
            res.status(200).send(rows);
            connection.end();
        }
        else
            console.log('Error while performing Query.', err);
    });
}

function _getCrop(req, res, name) {
    connection.query('SELECT * from scai.Cultivo where nombreCultivo = \'' + req.params.name + '\'', function (err, rows, fields) {
        if (!err) {
            console.log(rows);
            res.status(200).send(rows);
            connection.end();
        }
        else
            console.log('Error while performing Query.', err);
    });
}

function _postCrop(req, res) {
    var sql = "INSERT INTO scai.Cultivo (idCultivo, nombreCultivo) VALUES ('25', 'Fresas')";
    connection.query(sql,function(err,result){
        console.log(req.body);
        res.status(200).send(req.body);
    });
}
module.exports = data;