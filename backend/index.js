const express=require('express');
const dotenv=require('dotenv');
dotenv.config({})
const cors=require('cors');
const { connectDb } = require('./config/dbConfig');
const user=require('./routes/user');
const Books=require('./routes/book');
const Favourite=require('./routes/favourite');
const Cart=require('./routes/cart');
const Order=require('./routes/order');

const app = express();
app.use(express.json());
app.use(cors());

// routes

app.use("/api/v1",user);
app.use("/api/v1",Books);
app.use("/api/v1/",Favourite);
app.use("/api/v1/",Cart);
app.use("/api/v1/",Order)

const port=process.env.PORT || 3000;

app.listen(port, async ()=>{
   await connectDb()
  console.log(`server listening on ${port}`);
  
})
