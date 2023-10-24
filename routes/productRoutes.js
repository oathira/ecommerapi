const express = require('express');
const router = express.Router();
const productController = require('../controllers/product');

// Route to get a list of all products
router.get('/', productController.products);

// Route to create a new product
router.post('/create', productController.create);

// Route to delete a product by its ID
router.delete('/:product_id', productController.delete);

// Route to update a product's quantity by its ID
router.post('/:product_id/update_quantity/', productController.update);

module.exports = router;
