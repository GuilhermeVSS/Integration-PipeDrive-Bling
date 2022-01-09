const mongoose = require('mongoose');
const {Schema} = mongoose;

//Model Colleciton setup
const profitSchema = new Schema({
    value: {type: Number},
    date: {type: String, unique: true},
    createdAt: {type: Date, default: Date.now()}
});

const Profit = mongoose.model('profit', profitSchema);

module.exports = {
    Profit
};