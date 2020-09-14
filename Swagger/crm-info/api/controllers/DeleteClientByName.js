'use strict';

var client = require('../helpers/es');

module.exports = {
	DeleteClientByName: DeleteClientByName
}

function DeleteClientByName(req, res){
	client.delete({
		index: 'clientdb',
	    type: 'client',
	    id: req.swagger.params.name.value
	}, function(error, response){
		res.header('Content-Type', 'application/json');
	    if(error){
	      console.log(error);
	      res.statusCode = 409;
	      res.end(JSON.stringify(error));
	    } else {
	      // console.log(JSON.stringify({'id': req.swagger.params.client.value.client_name}));
	      res.end(JSON.stringify(response));
	      // monitor(start, 'AddTodo');
	    }
	})
}