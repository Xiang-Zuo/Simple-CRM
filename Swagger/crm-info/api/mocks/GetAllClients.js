"use strict";

module.exports = {
	GetAllClients: GetAllClients
}

function GetAllClients(req, res) {
	res.json([
		{
			client_name: "Jason",
			client_gender: "Male",
			client_age: 24,
			client_citizenship: "Canadian",
			client_email: "jasonxxx@gmail.com",
			client_phone: 4161234567,
			client_address: "xx Baseline Rd, Ottawa"
		}
	]);
}