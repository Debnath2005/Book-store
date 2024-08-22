const mongoose = require('mongoose');

const order=new mongoose.Schema({
    user:{
        type:mongoose.Types.ObjectId,
        ref:"user",
    },
    book:{
        type:mongoose.Types.ObjectId,
        ref:"books",
    },
    status:{
        type:String,
        defult: "Oder Place",
        enum:["Oder Place","Out for delivary","Delivery","Cancelled"],
    },
},
{timestamps:true}
)

module.exports=mongoose.model("order",order);