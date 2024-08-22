const mongoose = require('mongoose');

const DB=process.env.DB_CONNECTION_STRING;
module.exports.connectDb= async ()=>{
   try {
     await mongoose.connect(DB);
     console.log('Database connection established');
   } catch (error) {
    console.log(error);
    process.exit(0);
  }
}