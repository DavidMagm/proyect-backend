const { ValidationError } = require("sequelize")
const boom = require('@hapi/boom')


function logError(error, req, res, next) {
  console.log('logError')
  console.log(error)
  next(error)
}

function errorHandler(error, req, res, next) {
  console.log('errorHandler')
  res.status(500).json({
    message: error.message,
    stack: error.stack
  })
}

function boomErrorHandler(error, req, res, next) {
  if(error.isBoom) {
    const {output} = error
    res.status(output.statusCode).json(output.payload)

  } else {
    next(error)
  }
}

function sqlErrorHandler(error, req, res, next) {
  if (error instanceof ValidationError) {
    res.status(400).json({
      statusCode: 409,
      message: error.name,
      errors: error.errors
    })
  }
  next()
}

module.exports = {logError, errorHandler, boomErrorHandler, sqlErrorHandler};
