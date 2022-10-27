const express = require('express');
const { getGraph } = require('./Graph');
const app = express();
const CURSED_PORT = 6900;
app.use(express.static('./public'));
app.use(express.json());
app.get('/',(req,res)=>{
    res.send("Hello");
});

app.get('/api',(req,res)=>{
    res.status(200).json(getGraph());
});

app.listen(CURSED_PORT,()=>{
    console.log(` App is listening on ${CURSED_PORT}`);
})
