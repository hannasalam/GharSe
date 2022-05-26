var Product = require('../models/product');
var ObjectId = require('mongodb').ObjectID;
// const multer  = require('multer')
// const dotenv = require("dotenv");
// dotenv.config(); 
// const cloudinary = require("cloudinary").v2;
// cloudinary.config({
//   cloud_name: process.env.CLOUD_NAME,
//   api_key: process.env.API_KEY,
//   api_secret: process.env.API_SECRET,
// });

// const storage = multer.diskStorage({});

// const fileFilter = (req, file, cb) => {
//   // reject a file
//   if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/jpg') {
//     cb(null, true);
//   } else {
//     cb(null, false);
//   }
// };

// const upload = multer({
//   storage: storage,
//   fileFilter: fileFilter
// });

module.exports = function(app){
    app.post('/create', async(req,res)=>{
        const product = new Product(
            {
                name: req.body.name,
                price: req.body.price,
                quantity: req.body.quantity,
                description: req.body.description,
                imageUrl: req.body.imageUrl,
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
