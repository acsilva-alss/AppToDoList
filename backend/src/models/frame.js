const mongoose = require();

const FrameSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        unique: true,
    },
    lists: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'List'

    },
    createAt: {
        type: Date,
        Default: Date.now,
    },
});

const Frame =  mongoose.model('Frame',FrameSchema);

module.exports = Frame;