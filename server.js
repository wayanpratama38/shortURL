import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const app = new express()
app.use(express.json());


app.get('/',(req,res)=>{
    res.json({
        status : "success",
        data : "hello world"
    })
});

app.listen(process.env.PORT,()=>{
    (`Server listening at http://localhost:${process.env.PORT}`)
});