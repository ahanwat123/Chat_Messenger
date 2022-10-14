const express = require('express')
const app = express()
const dotenv = require('dotenv')
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const databaseConnect = require('./config/database.js')
const authRouter = require('./routes/authRoute')

dotenv.config({
    path:'backend/config/config.env'
})
app.use(bodyParser.json());
app.use(cookieParser());
app.use('/api/messenger',authRouter);

const PORT = process.env.PORT || 5000
app.get('/', (req, res)=>{
    res.send("running")
})
databaseConnect()
app.listen(PORT, ()=>{
    console.log("express")
})
