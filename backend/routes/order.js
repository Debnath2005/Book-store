const router = require('express').Router();
const User= require('../models/user');
const Order= require('../models/order');
const Book= require('../models/book');
const {authenticateToken}=require('./userAuth')

// Place Order
router.post('/place-order',authenticateToken, async (req, res) => {
    try {
        const {id}=req.headers;
        const {order}=req.body;

        for(const orderData of order){
            const newOrder=new Order({user: id, book: orderData._id});
            const orderDataFromDb= await newOrder.save();
            // saving Order in user model
            await User.findByIdAndUpdate(id,{
                $push:{order: orderDataFromDb._id}
            })

            // clearing Order
            await User.findByIdAndUpdate(id,{
                $pull:{order: orderDataFromDb._id}
            })

        }
        return res.json({
            status: 'success',
            message: 'Order saved successfully'
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"An erroe occurred"});
    }
})

// get order history of particular user
router.get('/get-order-history', authenticateToken, async (req, res) => {
    try {
        const {id}=req.headers;
        const userData= await findUserById(id).populate({
            path:"orders",
            populate: {path:"book"}
        });

        const ordersData=userData.orders.reverse();
        return res.json({
            status:"success",
            data: ordersData,
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"An erroe occurred"})
    }
})

// get-all-orders ----Admin

router.get('/get-all-orders', authenticateToken, async (req,res)=>{
    try {
        const userData= await Order.find()
        .populate({
            path:"book",
        })
        .populate({
            path:"user",
        })
        .sort({createdAt: -1});
        return res.json({
            status:"Success",
            data:userData,
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"An error occurred"})
    }
})

// Update order --admin
router.put("/update-status/:id",authenticateToken, async (req,res)=>{
    try {
        const {id}=req.params;
        if(id.user ==="admin"){
        await Order.findByIdAndUpdate(id,{status: req.body.status});
        return res.json({
            status:"Success",
            message:"status updated successfully",
        })
        }
        return res.status(500).json({message:"you are not allowed to update"})
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"An error occurred"})
    }
})

module.exports = router;


