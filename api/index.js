// create router 

//const express = require('express');
//const Router = express.Router;

const apiRouter = require('express').Router();

const usersRouter = require('./users');
apiRouter.use('/users', usersRouter);

// export router 
module.exports = apiRouter;
