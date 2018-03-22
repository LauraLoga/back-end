
var connection = require('../../config/connection');
var data = {
    getCrops: _getCrops,
};

function _getCrops(req, res) {
    // Consultar a BBDD
    
    connection.query('SELECT * from scai.Actuador', function(err, rows, fields) {
        if (!err){
          console.log(rows);
          res.status(200).send(rows);
          connection.end();
        }
        else
        console.log('Error while performing Query.',err);
    });
    
}
module.exports = data;