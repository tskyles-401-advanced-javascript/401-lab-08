'use strict';

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const app = express();

// import routes
// create logger
//global use


module.exports = {
  server: app,
  start: port => {
    let PORT = port || process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));
  },
};