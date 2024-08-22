const router = require('express').Router();
const User= require('../models/user');
const {authenticateToken}=require('./userAuth')

// add book to favorites

router.put('/add-to-cart', authenticateToken, async (req, res) => {
    try {
        const {bookid,id}=req.headers;
        const userData=await User.findById(id);
        const isBookinCart=userData.cart.includes(bookid);
        if(isBookinCart) {
            return res.json({
                status: 'success',
                message:"Book is already in Cart"
            })
        }
        await User.findByIdAndUpdate(id,{$push:{cart:bookid}});
        return res.status(200).json({Message:"Book added to Cart"})
    } catch (error) {
        console.log(error);
        res.status(500).json({Message:"Internal Server Error"})
    }
})

// Remove book from favorites
router.put('/remove-from-cart/:bookid', authenticateToken, async (req, res) => {
    try {
        const {id}=req.headers;
        const {bookid}=req.params;
       
            await User.findByIdAndUpdate(id,{$pull:{cart:bookid}});
          //  return res.status(200).json({Message:'Book is remove from favorites'})
          return res.json({
            status: 'success',
            message: 'Book is removed from Cart successfully',
          })
        }  
     catch (error) {
        console.log(error);
        res.status(500).json({Message:"Internal Server Error"})
    }
})

// get favorites books of particular users

router.get('/get-user-cart', authenticateToken,async (req, res) => {
    try {
        const {id}=req.headers;
        const userData=await User.findById(id).populate('cart')
        const cart=userData.cart.reverse();
        return res.json({
            status: "success",
            data: cart,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({Message:"An error occurred "})
    }
})

module.exports = router;