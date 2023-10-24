const Product = require('../model/product');

// Function to retrieve all products
module.exports.products = async function(req, res) {
    try {
        // Find all products in the database
        const productsList = await Product.find({});
        
        // Sending response with the list of products
        res.send({
            data: {
                products: productsList
            }
        });
    } catch (err) {
        // Handle any errors and send a 500 (Internal Server Error) response
        res.status(500).send(err);
    }
};

// Function to create a new product
module.exports.create = async function(req, res) {
    try {
        // Create a new product based on the request body
        const newProduct = new Product({
            name: req.body.name,
            quantity: req.body.quantity
        });

        // Save the new product to the database
        await newProduct.save();

        // Sending response with the newly created product
        res.send({
            data: {
                product: newProduct
            }
        });
    } catch (err) {
      res.status(500).send(err);
  }
};

// Function to delete a product by its ID
module.exports.delete = async function(req, res) {
    try {
        // Delete the product with the specified ID
        await Product.deleteOne({ _id: req.params.product_id });

        // Sending response to confirm that the product has been deleted
        res.send({
            data: {
                message: "Product deleted successfully"
            }
        });
    } catch (err) {
      res.status(500).send(err);
  }
};

// Function to update a product's quantity
module.exports.update = async function(req, res) {
    try {
        // Get the product's ID from the request parameters
        const id = req.params.product_id;

        // Find the product in the database by its ID
        const found = await Product.findById(id);

        // Check if the product exists
        if (!found) {
            res.status(404).send("Product not found");
            return;
        }

        // Calculate the new quantity based on the query parameter
        const newQuantity = parseInt(found.quantity) + parseInt(req.query.number);

        // Update the product's quantity in the database
        await Product.findByIdAndUpdate(id, { quantity: newQuantity });

        // Retrieve the updated product
        const updatedProduct = await Product.findById(id);

        // Sending response with the updated product and a success message
        res.send({
            product: updatedProduct,
            message: 'Quantity updated successfully'
        });
    } catch (err) {
        res.status(500).send(err);
    }
};
