const axios = require('axios');
const express = require('express');
const { getGraph } = require('./Graph');
const app = express();

const BLESSED_PORT = 6900;
app.use(express.static('./public'));
app.use(express.json());
app.use('/axios',express.static('./node_modules/axios/dist/axios.js'));
app.get('/', (req,res)=>{
    res.render('index.html');
});

app.get('/api',(req,res)=>{
    res.status(200).json(getGraph());
});

app.listen(BLESSED_PORT,()=>{
    console.log(` App is listening on ${BLESSED_PORT}`);
})
