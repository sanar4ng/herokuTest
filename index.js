const express = require('express');
const app = express();
var inputData;
let users = {}
var port = process.env.PORT || 3000;


app.get('/', (req, res) => {
   console.log('who get in here/users');
   res.json(users)
});

app.post('/post', (req, res) => {
   console.log('who get in here post /users');
   

   req.on('data', (data) => {
     inputData = JSON.parse(data);
   });

   req.on('end', () => {
     console.log("number : "+inputData.number);
     users.number=inputData.number
     console.log(users)
   });

   res.write("이동");
   res.end();
});

app.listen(port,function () {
  console.log('Example app listening on port 3000!');
});
setInterval(function () {
    http.get("http://ion-node-js-server.herokuapp.com/");
  }, 600000);
