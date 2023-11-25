const express = require('express')
let data = require('api.mocki.io/v2/e3990735/')


const server = express();

server.get('/',(req,res) => {
    res.status(200).json(data);
})

server.listen(5000, () => {
    console.log('Isledi')
})
