/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import Home from './pages/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import AllBooks from './pages/AllBooks';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Cart from './pages/Cart';
import Profile from './pages/Profile';
import ViewBookDetails from './components/ViewBookDetails/ViewBookDetails';
import { useDispatch,useSelector } from 'react-redux';
import { authActions } from './store/auth';
import Favourites from './components/Profile/Favourites';
import UserOrderHistory from './components/Profile/UserOrderHistory';
import Setting from './components/Profile/Setting';
import AddBook from './pages/AddBook';
import AllOrder from './pages/AllOrder';
const App = () => {

  const dispatch=useDispatch();
  const role=useSelector((state)=>state.auth.role)
  useEffect(()=>{
    if( 
      localStorage.getItem("id") &&
      localStorage.getItem("token") &&
      localStorage.getItem("role")
    ){
      dispatch(authActions.login());
      dispatch(authActions.changeRole(localStorage.getItem("role")));
    }
  })


  return (
    <div >
      {/* <Router> */}
      <Navbar/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route  path='/all-books' element={<AllBooks/>}/>
          <Route  path='/cart' element={<Cart/>}/>
          <Route  path='/profile' element={<Profile/>}>
             {role==="user" ? (
               <Route index element={<Favourites/>} />
             ):(
              <Route index element={<AllOrder/>} />
             )}
             {role==="admin" && <Route path="/profile/add-book" element={<AddBook/>} />}
              <Route path="/profile/orderHistory" element={<UserOrderHistory/>} />
              <Route path="/profile/settings" element={<Setting/>} />
          </Route>
          <Route  path='/LogIn' element={<Login/>}/>
          <Route  path='/SignUp' element={<SignUp/>}/>
          <Route  path="view-book-details/:id" element={<ViewBookDetails/>} />
        </Routes>
        <Footer/>
      {/* </Router> */}
      
      {/* 
      1. show cart and profile
      2. favourite categories
      3. profile data     
      4.add to favorites
      5.add to cart 
      
      */}
      
      
    </div>
  )
} 

export default App
