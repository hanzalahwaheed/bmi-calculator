const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

app.get('/',function(req,res){
    res.sendFile(__dirname+"/index.html");
});

app.post('/',function (req,res) {
    var height = req.body.height;
    var weight = req.body.weight;
    var bmi = weight / ((height/100) * (height/100));
    res.send("Your BMI is " + bmi.toFixed(2));
})

app.listen(3000,function () {
    console.log("Server satrted on port 3000.");
});
