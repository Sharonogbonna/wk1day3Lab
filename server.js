const express = require('express');
const app = express();
const port = 3000;

app.get('/greeting', (req, res)=>{
    res.send('Hey, queen! Girl, you have done it again.')
})
app.get('/greeting/:name', (req, res) => {
    res.send(req.params.name.charAt(0).toUpperCase()+ req.params.name.slice(1) + ', you are constantly raising the bar for all of us and doing it flawlessly.')
})

app.listen(port, function () {
    console.log('Listening...');
  });