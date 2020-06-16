const mongoose = require('mongoose');

const ListSchema = new mongoose.Schema({
    listName: {
        type: String,
        require = true,
        unique: true,
    },
    card: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Card',
    },
    createAt: {
        type: Date,
        Default: Date.now,
    },
})

const List = mongoose.model('List', listName);

module.exports = List;