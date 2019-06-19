const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

require('dotenv').config();
require('./config/database');

const app = express();

// connect socket.io to http server
const http = require('http').Server(app);
require('./io').init(http);

app.use(logger('dev'));
app.use(express.json());

// Configure both serve-favicon & static middlewares
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.png')));
app.use(express.static(path.join(__dirname, 'build')));

// API routes

app.use('/api/users', require('./routes/api/users'));

/* adds user to request object for all subsequent routes */
app.use(require('./config/auth'))
/* adds user to request object for all subsequent routes */

app.use('/api/chats', require('./routes/api/chats'));

// catch-all route
app.get('*', function(req, res){
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3001;

http.listen(port, function() {
  console.log(`Express app running on port ${port}.`)
});