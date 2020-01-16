'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();

// const errorHandler = ('../errorHandling/500');
// const badRouteHandler = ('../errorHandling/404');

// import routes
const productRoutes = require('../routes/products-routes');
const categoriesRoutes = require('../routes/categories-routes');
// create logger
app.use(morgan('dev'));
//global use
app.use(express.json());
app.use(cors());
// routes
app.use(categoriesRoutes);
app.use(productRoutes);
// error handlers
// app.get(badRouteHandler);
// app.get(errorHandler);

module.exports = {
  server: app,
  start: port => {
    let PORT = port || process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));
  },
};