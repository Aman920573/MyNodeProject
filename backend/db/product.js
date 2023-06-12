const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:String,
    price:String,
    category:String,
    User_id:String,
    company:String,
})

module.exports = mongoose.model('Product',productSchema);