require('dotenv').config() 
const PORT = process.env.PORT || 4000; 
const express = require('express') 
const app = express() 
const usersRouter = require('./users/users')
const middlewareLogRequest = require ('./middleware/log')



app.use(middlewareLogRequest);
app.use(express.json()) 

app.use ('/users' , usersRouter) ; 

app.listen(PORT , ()=>{
  console.log(`Server is running on http://localhost:${PORT}`)
})