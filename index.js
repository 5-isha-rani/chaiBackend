require('dotenv').config();
const express = require('express'); //common js
const app = express();


const port = 3000;
app.get('/' , (req, res) => {
    res.send("hello world!");
})

app.get('/twitter', (req, res)=>{
    res.send("hello twitter")
})
app.get('/login' , (req,res)=>{
    res.send('<h1>login</h1>')
})
app.get('/youtube' , (req,res)=>{
    res.send('<h2>this is youtube </h2>')
})
app.listen(process.env.PORT, ()=>{
    console.log(`listening on port ${port}`);
})