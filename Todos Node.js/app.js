var express = require('express')
var createError = require('http-errors')
var logger = require('morgan')
// require middleware
const {AuthRequest} = require('./middlewares/auth-request')
// require DB function
const {connectDB} = require('./config/funDB')
connectDB()
// require todosRouter
const todosRouter = require('./routes/todos.routes')
// require authRouter
const authRouter = require('./routes/auth.routes')

var app = express();


app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.use('/todos', AuthRequest, todosRouter)
app.use('/auth', authRouter)


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404))
})

// error handler
app.use(function(err, req, res, next) {

  // render the error page
  res.status(err.status || 500)
  console.log(err)
  res.json({err})
});

module.exports = app
