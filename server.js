const express = require('express');
const bodyParser = require('body-parser');

const app = express();
//access html (url) inputs from the form, extended: true for nested objects
app.use(bodyParser.urlencoded({extended: true}));

// __dirname makes sure the FOLDER can be 
//found wherever it may be (on different servers/ user's machines)
//Then the FILE path is appended to it
app.get('/', function(req, res){
res.sendFile(__dirname + '/index.html');
});

app.post('/', function(req, res) {
var num1 = Number(req.body.num1);
var num2 = Number(req.body.num2);
var total = num1 + num2;
    res.send(`The result of the calculation is ${total}`);
});


//BMI Calculator:
//callback sends html file
app.get('/bmicalculator', function(req, res) {
    res.sendFile(__dirname + '/bmiCalculator.html');
});

app.post('/bmicalculator', function(req, res) {
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);

        //limit decimal placs to 2 with Math.pow:
    var bmi = weight / (Math.pow(height, 2));
        res.send(`Your BMI is ${bmi.toFixed(2)}`);
});




const port = 3000;
app.listen(port, () => {
    console.log(`U are now surfing on ${port}`);
});