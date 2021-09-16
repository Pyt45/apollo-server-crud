const Product = require('../../models/Product');

module.exports = {
    Query: {
        async getProducts() {
            try {
                const products = await Product.find();
                return products;
            } catch(err) {
                console.log(err.message);
                process.exit(1)
            }
        }
    }
}