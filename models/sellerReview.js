var mongoose = require('mongoose');

const review = new mongoose.Schema(
    {
        sellerNumber:{type: Number},
        review: {type: String}
    }
);

module.exports = mongoose.model('Review', review);