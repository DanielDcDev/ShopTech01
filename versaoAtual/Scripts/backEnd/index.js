const express = require('express');
const server = express();
const shoes = require('../shoes.json')
server.get('/usuario', (req, res) =>{
    return res.json({shoes})
})

server.listen(3000, ()=>{
    console.log("servidor esta funcionando...")
})