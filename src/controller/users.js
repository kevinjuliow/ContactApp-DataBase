
const usersModels = require('../models/users')

const getAllUsers = async (req, res) =>{  
  try {
    const [data] = await usersModels.getAllUsers()
    res.json ({
      message : 'Get All Users Success' , 
      data : data
    })
    
  } catch (error) {
    res.status(500).json({
      message : 'Error Connecting to Database' , 
      serverMessage : error , 
    })
  } 
}


const createNewUsers = async (req , res) =>{
  const body = req.body ; 
  try {
    await usersModels.createNewUsers(body) 
    res.json({
      message : 'Create New User Success' , 
      data : body
    })
  } catch (error) {
    res.status(500).json({
      message : 'Error Connecting to Database' , 
      serverMessage : error , 
    })
  }
}

const updateUser = async (req , res) =>{
  const id = req.params.id 
  const body = req.body 
  try {
    await usersModels.updateUsers(body, id)
    res.json({
      message: `Update user with ID ${id}` , 
      data : {
        id : id , 
        ...body
      }
    })
  } catch (error) {
    res.status(500).json({
      message : 'Error Connecting to Database' , 
      serverMessage : error , 
    })
  }
}

const deleteUser = (req, res) =>{
  const {id} = req.params
  res.json({
    message : "Delete User Success " , 
    data  : {
      id : id 
    }
  })
}


module.exports = {getAllUsers , createNewUsers , updateUser , deleteUser}