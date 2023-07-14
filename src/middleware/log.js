const logRequest = (req , res , next) =>{
  console.log('Requesting PATH from : "' + req.path +'"');
  next() ;
}

module.exports = logRequest