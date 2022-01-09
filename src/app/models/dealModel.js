const mongoose = require('mongoose');
const {Schema} = mongoose;

//Model Colleciton setup
const dealSchema = new Schema({
    _id:{type: Number},
    createdAt: {type: Date, default: Date.now()}
});

const Deal = mongoose.model('deal', dealSchema);

module.exports = {
    Deal
};