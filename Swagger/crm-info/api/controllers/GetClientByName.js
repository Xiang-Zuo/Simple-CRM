'use strict';
var client = require('../helpers/es');

module.exports = {
    GetClientByName: GetClientByName
}

function GetClientByName(req, res) {
    //console.log(req.swagger.params)
    client.get({
        index: 'clientdb',
        type: 'client',
        id: req.swagger.params.name.value
    }, function(error, response){
        res.header('Content-Type', 'application/json');
        if(error){
            res.end(JSON.stringify(error));
        } else {
            console.log("ff");
            res.end(JSON.stringify(response._source));
            // monitor(start, 'FindTodoById');
            console.log(response._source);
        }
    })
}
