var mongoose = require('mongoose');

const product = new mongoose.Schema(
    {
        name: {type: String},
        price: {type: Number},
        quantity: {type: String},
        description: {type: String},
        sellerNumber: {type: Number},
        type:{type:String},
        imageUrl: {type: String}
    }
);

module.exports = mongoose.model('Product', product);