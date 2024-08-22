const mongoose = require('mongoose');

const user= new mongoose.Schema({
    username: {
        type: 'string',
        required: true,
        unique: true,
    },
    email: {
        type: 'string',
        required: true,
        unique: true,
    },
    password: {
        type: 'string',
        required: true,
    },
    address: {
        type: 'string',
        required: true,
    },
    avatar: {
        type: 'string',
        default:"https://static-00.iconduck.com/assets.00/profile-default-icon-512x511-v4sw4m29.png"
    },
    role: {
        type: 'string',
        default:"user",
        enum:["user", "admin"]
    },
    favourites: [
      {
        type:mongoose.Types.ObjectId,
        ref:"books",
        },
    ],
    cart: [
        {
            type:mongoose.Types.ObjectId,
            ref:"books",
        },
    ],
    orders: [
        {
            type:mongoose.Types.ObjectId,
            ref:"books",
        },
    ],
},
{timestamps:true}
);

module.exports=mongoose.model("user",user);