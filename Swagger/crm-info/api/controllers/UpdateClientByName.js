'use strict';
var client = require('../helpers/es');

module.exports = {
    UpdateClientByName: UpdateClientByName
}

function UpdateClientByName(req, res){
	client.update({
        index: 'clientdb',
        type: 'client',
        id: req.swagger.params.name.value,
        body: {
        	doc: req.swagger.params.updated_client.value
        }
    }, function(error, response){
    	res.header('Content-Type', 'application/json');
	    if(error){
	      console.log(error);
	      res.statusCode = 400;
	      res.end(JSON.stringify(error));
	    } else {
	      // console.log(JSON.stringify({'id': req.swagger.params.client.value.client_name}));
	      res.end();
	      // monitor(start, 'AddTodo');
	    }
    })
}