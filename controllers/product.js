var Product = require('../models/product');
var ObjectId = require('mongodb').ObjectID;

module.exports = function(app){
    app.post('/create',async(req,res)=>{
        const product = new Product(
            {
                name: req.body.name,
                price: req.body.price,
                quantity: req.body.quantity,
                description: req.body.description,
                type: req.body.type
            }
        )
        const createdProduct = await product.save();
        res.send("Product added");
    });

    app.get('/', async(req,res)=>{
        const all = await Product.find({});
        res.send(all);
    })
    app.delete('/delete/:id', async(req,res)=>{
        Product.deleteOne({__id: ObjectId(req.params.id)})
        res.send("Post deleted")
    })
}
