'use strict';
var client = require('../helpers/es');

module.exports = {
	GetAllClients: GetAllClients
};

function GetAllClients(req, res) {
	client.search({
		index: 'clientdb',
		type: 'client',
		q: '*'
	}, function(error, response){
		if (error){
			res.end(JSON.stringify(error));
		}else{
			//console.log(response.hits.hits[0]._source);
			var results = [];
			results = response.hits.hits.map(function(hit){return hit._source});
			res.header('Content-Type', 'application/json');
			res.end(JSON.stringify(results));
			console.log(results);
		}
	})
}