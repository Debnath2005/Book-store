/* eslint-disable no-unused-vars */

import React from 'react'
import { Link } from 'react-router-dom'
import { FaGripLines } from "react-icons/fa";
import { useSelector } from 'react-redux';
const links=[
  {
    title:'Home',
    link:"/",
  },
  {
    title:'All Books',
    link:"/all-books",
  },
  {
    title:'Cart',
    link:"/cart",
  },
  {
    title:'Profile',
    link:"/profile",
  },
  // {
  //   title:'Admin Profile',
  //   link:"/profile",
  // },
]
const Navbar = () => {
  const isLoggedIn =useSelector((state)=> state.auth.isLoggedIn)
  const role =useSelector((state)=> state.auth.role)
  //  console.log(isLoggedIn);
  //  console.log(role);
  // isko baad mai karna hai 
  
  // if(isLoggedIn== false){
  //   links.splice(2,2)
  // }
  

  // if(isLoggedIn== true && role== 'admin'){
  //   links.splice(3,1);
  // }

  return (
    <>
      <nav className='z-50 relative flex bg-zinc-800 text-white px-8 py-4 items-center justify-between'>
      <Link to="/" className='flex items-center'>
        <img className='h-10 me-4' src="./logo.png" alt="logo" />
        <h1 className='text-2xl font-semibold text-green-600'>Book Bodies</h1>
      </Link>
      <div className='nav-links-bookheaven md:flex items-center gap-4 text-2xl'>
         <div className='hidden md:flex gap-4'>
         {
            links.map((items,i)=>(
            // {items.title=== "Profile" || items.title==="Admin Profile" ?}(
            //   <Link 
            //     to={items.link}
            //     className='px-4 py-1 border border-blue-500 rounded hover:bg-white hover:text-zinc-800 '
            //   >
            //       {items.title}
            //   </Link>
            // )

                <Link to={items.link}
                  className='text-xl hover:text-blue-500 transition duration-300' key={i}
                >
                 <strong> {items.title}{" "}</strong>
                </Link>
            ))
          }
         </div>
         
          <div className='hidden md:flex gap-4' >
          <Link to="/LogIn" className='px-2 py-1 text-xl border border-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300'>
                <strong> LogIn</strong>
          </Link>
          <Link to="/SignUp" className='px-2 py-1 text-xl bg-blue-500 rounded  hover:bg-white hover:text-zinc-800 transition-all duration-300'>
                <strong>signUp</strong>
          </Link>
         </div>
         
         <button className='text-white text-2xl hover:text-zinc-400'>
         <FaGripLines />
         </button>
      </div>
      </nav>
      {/* flex navbar */}
      {/* <div className=' bg-zinc-800 h-screen absolute top-0 left-0 w-full z-40 flex flex-col items-between justify-center'>
         {
            links.map((items,i)=>(
                <Link to={items.link}
                  className='text-xl hover:text-blue-500 transition duration-300' key={i}
                >
                  {items.title}{" "}
                </Link>
            ))
          }
           <Link to="/LogIn" className='px-4 mb-8 py-1 text-xl border border-blue-500 rounded hover:bg-white hover:text-zinc-800 transition-all duration-300'>LogIn</Link>
           <Link to="/SignUp" className='px-4 mb-8 py-1 text-xl bg-blue-500 rounded  hover:bg-white hover:text-zinc-800 transition-all duration-300'>signUp</Link>
      </div> */}
    </>
    
  )
}

export default Navbar
