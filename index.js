/*
Author: Kalle Liljeström
*/
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const path = require('path');
const port = 3000
const jsonParser = bodyParser.json()
app.use(express.static('public'))

let list = [];

app.get('/', (req, res) => {
    res.sendFile(path.join('public', '/index.html'));
})

app.get("/hello", function (req, res) {
    res.json({msg: "Hello world"});
});

app.get("/echo/:id", function (req, res) {
    res.json({id: req.params.id});
});

app.post("/sum", jsonParser, function (req, res) {

    console.log(req.body)
    let numArray = req.body.numbers;
    let sum = 0;

    for (let i = 0; i < numArray.length; i++ ) {
        sum += numArray[i];
      }
    res.json({sum: sum});
});

app.post("/list", jsonParser, function (req, res) {

    list.push(req.body.text);
    console.log(list)
    res.json({list: list});
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})

