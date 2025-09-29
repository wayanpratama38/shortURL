import dotenv from 'dotenv';
import express from 'express';
import { urlRoute } from './src/route/urlRoute.js';

dotenv.config();

const app = new express()
app.use(express.json());


app.get('/',(req,res)=>{
    res.json({
        status : "success",
        data : "hello world"
    })
});

// example to use redirect
app.get('/go',(err,res,req)=>{
    if(err){
        console.log(err)
    }
    res.redirect("https://www.google.com")
})

app.use('/short',urlRoute);

app.listen(process.env.PORT,()=>{
    (`Server listening at http://localhost:${process.env.PORT}`)
});