const express = require('express');
const app = express();
const port = 4000;

app.get('/',function(req,res){
     return res.send('home');
});

app.listen(port,function(err){
    if(err){
        console.log(`error,${err}`);
    }
    console.log(`server is running on port:${port}`);
});