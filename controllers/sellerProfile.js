
var Review = require('../models/sellerReview');
var Product = require('../models/product');


//when a seller is created, make a blank rating document

module.exports = function(app){

    app.post('/ratings/:number',async(req,res)=>{
            const review = new Review(
                {
                    sellerNumber: req.params.number,
                    review : req.body.review
                }
            )
            const newReview = await review.save();
        res.send("Reviewadded");
    });

    app.get('/ratings/:number', async(req,res)=>{
        const review = await Review.find({sellerNumber:req.params.number});
        res.send({review:review});
    })
    app.get('/products/:sellernumber', async(req,res)=>{
        const products = await Product.find({"sellerNumber": req.params.sellernumber});
        res.send(products);
    })

}