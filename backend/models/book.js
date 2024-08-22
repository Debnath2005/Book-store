const mongoose = require('mongoose');

const book=new mongoose.Schema({
  url:{
    type: 'string',
    required: true,
  },
  title:{
    type: 'string',
    required: true,
  },
  author:{
    type: 'string',
    required: true,
  },
  price:{
    type: Number,
    required: true,
  },
  desc:{
    type: 'string',
    required: true,
  },
  language:{
    type: 'string',
    required: true,
  },
},
{timestamps:true}
)

module.exports=mongoose.model("books",book);