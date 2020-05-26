'use strict';

// load modules
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const { sequelize, models } = require('./models')
const courseRoutes = require('./routes/courses');
const userRoutes = require('./routes/users');

// variable to enable global error logging
const enableGlobalErrorLogging = process.env.ENABLE_GLOBAL_ERROR_LOGGING === 'true';

// create the Express app
const app = express();

//enable cors
app.use(cors());

//JSON parsing
app.use(express.json());

// setup morgan which gives us http request logging
app.use(morgan('dev'));

//API routes
app.use('/api', courseRoutes, userRoutes);

// setup a friendly greeting for the root route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to my REST API Project. Grab a tea or coffee and have a look around',
  });
});

// send 404 if no other route matched
app.use((req, res) => {
  res.status(404).json({
    message: 'Route Not Found',
  });
});

// setup a global error handler
app.use((err, req, res, next) => {
  if (enableGlobalErrorLogging) {
    console.error(`Global error handler: ${JSON.stringify(err.stack)}`);
  }

  res.status(err.status || 500).json({
    message: err.message,
    error: {},
  });
});


app.set('port', process.env.PORT || 5000);

// start listening on our port
const server = app.listen(app.get('port'), () => {
  console.log(`Express server is listening on port ${server.address().port}`);
});
