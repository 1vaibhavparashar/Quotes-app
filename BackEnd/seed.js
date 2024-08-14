const mongoose = require('mongoose');
const Quotes = require('./models/Quotes');
let dummyQuotes = [
    {
        author : "Vaibhav Parashar",
        text : "bois in paris"
    },
    {
        author : "john Cena",
        text : "You can't see me"
    },
    {
        author: "the Rock",
        text: "Can you smell what the rock is cooking"
    },
    {
        author: "Dwayne Johnson",
        text: "It doesn't matter what your name is"
    }
]

async function seedDB(){
    await Quotes.insertMany(dummyQuotes)
    console.log("db seeded")
}


module.exports = seedDB;