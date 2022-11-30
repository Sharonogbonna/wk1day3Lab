const express = require('express');
const app = express();
const port = 3000;

//GREETING
app.get('/greeting', (req, res)=>{
    res.send('Hey, queen! Girl, you have done it again.')
})
app.get('/greeting/:name', (req, res) => {
    res.send(req.params.name.charAt(0).toUpperCase()+ req.params.name.slice(1) + ', you are constantly raising the bar for all of us and doing it flawlessly.')
})

//TIP CALCULATOR
app.get('/tip/:total/:tipPercentage', (req, res) => {
    let tipAmount = req.params.total * (req.params.tipPercentage/100) 
    res.send('Your calculated tip should be $' + tipAmount)
})

app.listen(port, function () {
    console.log('Listening...');
  });