const express = require('express');
const Quotes = require('../models/Quotes');
const router = express.Router();


router.get('/allquotes',async (req,res)=>{
    try{
       let allQuotes =  await Quotes.find({})
       res.status(200).json(allQuotes)
    }
    catch(e){
        res.status(400).json({msg:"Something went wrong"})
    }
    
})
router.post('/addquotes',async (req,res)=>{
    try{
        const {author,text} = req.body;
        await Quotes.create({author,text})
        res.status(200).json({msg: "new quote created successfully"})
    }catch(e){
        res.status(400).json({msg:"Something went wrong"})

    }
})
router.get('/quotes/:id',async (req,res)=>{
    try{
        let {id} =  req.params;
        let foundQuote  = await Quotes.findById(id);
        res.status(200).json(foundQuote)
    }catch(e){
        res.status(400).json({msg:"Something went wrong"})
    }
})

module.exports = router