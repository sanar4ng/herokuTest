var express = require('express');
var app = express();
const cors = require('cors');
var client_id = 'lmPdtCLlemh9dJhdtQE6'; //api id
var client_secret = 'DKG7frCgyG';       //api pw

app.use(cors());
app.set('port', (process.env.PORT || 3000));
app.get('/search/news', function (req, res) {
  var api_url = 'https://openapi.naver.com/v1/search/news?query=' + encodeURI(req.query.query); // json 결과

  var request = require('request');
  var options = {
      url: api_url,
      qs: {start:1,display:100,sort:'sim',},
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

app.listen(app.get('port'), function () {
  console.log('App is running, server is listening on port ', app.get('port'));
});