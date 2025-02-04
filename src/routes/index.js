const router = require('express').Router();

const productsRouter = require('./products.route');
const categoriesRouter = require('./categories.route');

function indexRoute(app) {
    app.use('/api/v1', router);
    router.use('/products', productsRouter);
    router.use('/categories', categoriesRouter);
}

module.exports = indexRoute;