const dbPool = require('../config/database')

const getAllUsers = () => {
  const SQLQuery = 'SELECT * FROM users'
   return dbPool.execute( SQLQuery)
}

const createNewUsers = (body) => {
  const SQLQuery = `INSERT INTO users (name , email , address , phone) \
  VALUE ('${body.name}','${body.email}' ,'${body.address}' , '${body.phone}' )`

  return dbPool.execute(SQLQuery) ; 
}
module.exports = {getAllUsers , createNewUsers} ; 