const dbPool = require('../config/database')

const getAllUsers = () => {
  const SQLQuery = 'SELECT * FROM users'
   return dbPool.execute( SQLQuery)
}

const createNewUsers = (body) => {
  const SQLQuery = `INSERT INTO users (name , email , address , phone) 
  VALUE ('${body.name}','${body.email}' ,'${body.address}' , '${body.phone}' )`

  return dbPool.execute(SQLQuery) ; 
}

const updateUsers = (body , id) =>{
  const SQLQuery = `UPDATE users SET 
  name = '${body.name}' , email = '${body.email}' , address = '${body.address}' , phone = '${body.phone}' 
  WHERE id = ${id}`
  
  return dbPool.execute(SQLQuery)
}

const deleteUsers = (id) =>{
  const SQLQuery = `DELETE FROM users WHERE id = ${id}`

  return dbPool.execute(SQLQuery)
}
module.exports = {getAllUsers , createNewUsers , updateUsers} ; 