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
    res.send(`Your calculated tip is $${tipAmount}`)
})
//MAGIC 8 BALL
app.get('/magic/:phrase', (req, res) => {
    let responses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
    randomIndex = Math.ceil(Math.random()*(responses.length-1)) 
    console.log(responses.length)
    console.log(randomIndex)
    res.send(`You asked: ${req.params.phrase}? <br></br> <h1>${responses[randomIndex]}</h1>`)
})
app.listen(port, function () {
    console.log('Listening...');
  });