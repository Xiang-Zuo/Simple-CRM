'use strict';

var client = require('../helpers/es');

 client.indices.create({
     index: 'clientdb'
 }, function(err, resp, status) {
     if (err) {
         console.log(err);
     } else {
         console.log("create", resp);
     }
 });