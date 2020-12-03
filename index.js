var express = require('express');
var app = express();
const cors = require('cors');
var client_id = 'lmPdtCLlemh9dJhdtQE6'; //api id
var client_secret = 'DKG7frCgyG';       //api pw
app.use(cors());
var port = process.env.PORT || 3000;
app.get('/', function (req, res) {
   var api_url = 'https://openapi.naver.com/v1/search/news?query=' + encodeURI("치매치료"); // json 결과

   var request = require('request');
   var options = {
       url: api_url,
       qs: {start:1,display:10,sort:'sim',query:'치매치료'},
       headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret,
       'Access-Control-Allow-Origin': '*',}
    };
   request.get(options, function (error, response, body) {
     if (!error && response.statusCode == 200) {
       res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
       res.end(body);
     } else {
       res.status(response.statusCode).end();
       console.log('error = ' + response.statusCode);
     }
   });
 });

 app.listen(port, function () {
   console.log('http://127.0.0.1:3000/search/news?query=검색어 app listening on port 3000!');
 });

 //api server