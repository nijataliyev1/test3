const express = require('express')
let data = require('./data.js')


const server = express();

server.get('/',(req,res) => {
    res.status(200).json(data);
})

server.listen(5000, () => {
    console.log('Isledi')
})
