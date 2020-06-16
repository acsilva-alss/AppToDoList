const mongoose = require('mongoose');

const CardSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
        unique: true,
    },
    description: {
        type: String,
        require: false,
    },
    deliveryDate: {
        type: String,
        require: false,
    },
    attachment: {
        type: String,
        require: false,
    },
    
    createAt: {
        type: Date,
        Default: Date.now,
    },
});

const Card = mongoose.model('Card', CardSchema);

module.exports = Card;