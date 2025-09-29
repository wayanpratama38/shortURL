import dotenv from 'dotenv';
import express from 'express';
import { urlRoute } from './src/route/urlRoute.js';

dotenv.config();

const app = new express()
app.use(express.json());

// example to use redirect
app.get('/go',(err,res,req)=>{
    if(err){
        console.log(err)
    }
    res.redirect("https://www.google.com")
})

// main url now just /
app.use('/',urlRoute);

app.listen(process.env.PORT,()=>{
    (`Server listening at http://localhost:${process.env.PORT}`)
});