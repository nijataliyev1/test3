const fs = require('fs');
const express = require('express');

const server = express();

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // İstəyə görmək üçün hamıya izin
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });
// Read the JSON file 

// Add or edit data 

// Write the JSON file 

server.get('/aa',(req,res) => {
    let jsonData = JSON.parse(fs.readFileSync("data.json")); 
    jsonData.surname = "Aliyev"; 
    fs.writeFileSync("data.json", JSON.stringify(jsonData)); 
    res.status(200).json(jsonData)
})

server.get('/',(req,res) => {
    let jsonData = JSON.parse(fs.readFileSync("data.json")); 
    res.status(200).json(jsonData)
})

server.listen(9001, () =>{
    console.log("***")
})

fetch("http://localhost:9001/")
.then(res => console.log(res))