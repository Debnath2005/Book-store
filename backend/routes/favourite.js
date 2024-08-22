const router = require('express').Router();
const User= require('../models/user');
const {authenticateToken}=require('./userAuth')

// add book to favorites

router.put('/add-book-to-favourites', authenticateToken, async (req, res) => {
    try {
        const {bookid,id}=req.headers;
        const userData=await User.findById(id);
        const isBookFavourite=userData.favourites.includes(bookid);
        if(isBookFavourite) {
            return res.status(200).json({message:'Book is already in favorites'})
        }
        await User.findByIdAndUpdate(id,{$push:{favourites:bookid}});
        return res.status(200).json({message:"Book added to favorites"})
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal Server Error"})
    }
})

// Remove book from favorites
router.put('/remove-book-from-favourites', authenticateToken, async (req, res) => {
    try {
        const {bookid,id}=req.headers;
        const userData=await User.findById(id);
        const isBookFavourite=userData.favourites.includes(bookid);
        if(isBookFavourite) {
            await User.findByIdAndUpdate(id,{$pull:{favourites:bookid}});
          //  return res.status(200).json({Message:'Book is remove from favorites'})
        }
        
        return res.status(200).json({message:'Book is remove from favorites'})
    } catch (error) {
        console.log(error);
        res.status(500).json({message:"Internal Server Error"})
    }
})

// get favorites books of particular users

router.get('/get-favourites-books', authenticateToken,async (req, res) => {
    try {
        const {id}=req.headers;
        const userData=await User.findById(id).populate('favourites')
        const favoritesBook=userData.favourites;
        return res.json({
            status: "success",
            data: favoritesBook,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({message:"An error occurred "})
    }
})

module.exports = router;