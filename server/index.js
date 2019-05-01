require('dotenv').config()
const express = require('express')
const passport = require('passport')
const session = require('express-session')
const routes = require('./routes')

const app = express()
app.use(session({
  secret: 'keyboard cat',
  cookie: {}
}))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(passport.initialize());
app.use(passport.session());
require('./services/passport');

app.use(routes)

app.get('/', (req,res)=>{
  console.log(req.user)
  res.send(req.user)
})

const PORT = process.env.PORT || 3002
app.listen( PORT, ()=> {
  console.log(`Listening on ${PORT}`)
})