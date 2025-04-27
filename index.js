const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors({optionsSuccessStatus:200}));

app.use(express.static('/public'));

app.get('/', (req, res)=>{
    res.sendFile(__dirname+'/views/index.html');
});

app.get("/api/:date_string?", (req,res)=>{
    const dateString = req.params.date_string;

    let date;
    if(!dateString){
        date = new Date();
    }else {
        if (!isNaN(dateString)) {
            date = new Date(parseInt(dateString));
        }else{
            date = new Date(dateString);
        }
    }

    if(date.toString()==="Invalid Date"){
        res.json({error:"Invalid Date"});
    }else{
        res.json({unix:date.getTime(), utc:date.toUTCString()});
    }
});
