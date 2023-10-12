const express = require('express');
const server = express();
const shoes = require('./')
server.get('/usuario', (req, res) =>{
    return res.json({usuario: 'Daniel Caio'})
})

server.listen(3000, ()=>{
    console.log("servidor esta funcionando...")
})