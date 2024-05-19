const express = require('express');
const app=express();
const medicine_details = require('./routes/Medicine');
const ConnectDB = require('./db/connect')
require('dotenv').config()

const PORT = 5000

app.use(express.json())

app.get('/',(req,res)=>{
    res.status(200).json('Jai Siya Ram')
})

app.use('/api/v1/medicine',medicine_details)


const start = async()=>{
    try {
        await ConnectDB(process.env.MONGO_URI)
        app.listen(PORT , (req,res)=>{
            console.log("Server is Listening at port 5000...........")
        })
    } catch (error) {
        console.log(error)
    }
}

start()