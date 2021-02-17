const express = require("express");
const app = express();
const fetch = require("node-fetch");
var request = require('request');

app.get('/', function(req, res, next) {
    request({
      uri: 'https://theyvoteforyou.org.au/api/v1/policies.json?key=US2RJprIml6Ar4KaasG6',
    },
    function(error, response, body) {
        if (!error && response.statusCode === 200) {
          res.send(body);
        } else {
          res.json(error);
        }
      })
  });

app.listen(3000, ()=> console.log('Listening at 3000'))
