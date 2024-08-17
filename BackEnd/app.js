const express = require('express');
const app = express()
const mongoose = require('mongoose');
const seedDB = require('./seed');
const quotesRoute = require('./apis/quotesRoutes')
const cors = require('cors')

app.use(cors({orgin:['http:localhost:5173']})) //ye upar rhega //restricting cors
app.use(express.json()) 

// mongoose.connect('mongodb://127.0.0.1:27017/quotesApp')
mongoose.connect('mongodb+srv://vaibhavparashar0077:Vt70aw4axdHyMA25@cluster0.4e8b8fk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(()=>{console.log("DB connected")})
.catch((e)=>{console.log("DB NNOT CONNECTED ",e)})

app.get('/hello' , (req,res)=>{
    res.status(200).json({msg : "hello page"})
})
// seedDB()
app.use(quotesRoute)

app.listen(8080, ()=>{
    console.log('server connected at PORT : 8080');

})