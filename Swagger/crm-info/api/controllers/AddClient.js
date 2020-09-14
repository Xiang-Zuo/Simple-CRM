'use strict';

var client = require('../helpers/es');

module.exports = {
	AddClient: AddClient
}

function AddClient(req, res) {
	console.log(req.swagger.params.client)
	client.index({
	    index: 'clientdb',
	    type: 'client',
	    id: req.swagger.params.client.value.client_name,
	    body: req.swagger.params.client.value
	}, function(error,response){
	    res.header('Content-Type', 'application/json');
	    if(error){
	      console.log(error);
	      res.statusCode = 409;
	      res.end(JSON.stringify(error));
	    } else {
	      // console.log(JSON.stringify({'id': req.swagger.params.client.value.client_name}));
	      res.end();
	      // monitor(start, 'AddTodo');
	    }
	})
}