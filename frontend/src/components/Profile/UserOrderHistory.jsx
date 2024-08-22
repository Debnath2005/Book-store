//import React from 'react'

import { useEffect,useState } from "react"
import axios from "axios"
import Loader from "../Loader/Loader"
import { Link } from "react-router-dom"

const UserOrderHistory = () => {
  const [OrderHistory,setOrderHistory]=useState()
  const headers={
    id:localStorage.getItem('id'),
    authorization:`Bearer ${localStorage.getItem('token')}`
  }
  useEffect(()=>{
    const fetch= async ()=>{
        const response=await axios.get("http://localhost:5000/api/v1/get-all-orders",{headers})
        console.log(response.data.data);
        setOrderHistory(response.data.data);
    }
    fetch()
  },[])
  return (
    <>
      {!OrderHistory && <div className='w-full h-[100%] flex items-center justify-center'><Loader/></div>}
      {OrderHistory && OrderHistory.length===0 && (
        <div className="h-[80vh] p-4 text-zinc-100">
          <div className="h-[100%] flex flex-col items-center justify-center">
            <h1 className="text-5xl font-semibold text-zinc-500 mb-8">
              No Order History
            </h1>
            <img src="" alt="/" className="h-[20vh] mb-8" />
          </div>

        </div>
      )}

    {OrderHistory && OrderHistory.length>0 && (
      <div className="h-[100%] p-0 md:p-4 text-zinc-100">
        <h1 className="text-3xl md:text-5xl font-semibold text-zinc-50 mb-8">
            Your Order History
        </h1>
        <div className="mt-4 bg-zinc-800 w-full rounded py-2 px-4 flex gap-2">
          <div className="w-[3%]">
            <h1 className="">Sr.</h1>
          </div>
          <div className="w-[22%]">
            <h1 className="">Books</h1>
          </div>
          <div className="w-[45%]">
            <h1 className="">Description</h1>
          </div>
          <div className="w-[9%]">
            <h1 className="">price</h1>
          </div>
          <div className="w-[16%]">
            <h1 className="">Status</h1>
          </div>
          <div className="w-[3%]">
            <h1 className="">Mode</h1>
          </div>
        </div>
      {OrderHistory.map((items,i)=>(
        <div className="bg-zinc-800 w-full rounded py-2 px-4 flex gap-4 hover:bg-zinc-900 hover:cursor-pointer" key={i}>
            <div className="w-[3%]">
            <h1 className="">{i+1}</h1>
          </div>

          <div className="w-[22%]">
            <Link to={`/view-book-details/${items.book._id}`} className="hover:text-blue-300">
            {items.book.title}
            </Link>
          </div>

          <div className="w-[45%]">
            <h1 className="">{items.book.desc.slice(0,50)}...</h1>
          </div>

          <div className="w-[9%]">
            <h1 className="">₹ {items.book.price}</h1>
          </div>

          <div className="w-[16%]">
            <h1 className="font-semibold text-green-500">
              {/* {items.status==="order placed" ?(
                <div className="text-yellow-500">{items.status}</div>
              ): items.status==="Canceled" ? (
                <div className="text-red-500">{items.status}</div>
              ):(
                items.status
              )
              } */}
              Order Place
              </h1>
          </div>
          <div className="w-none md:w-[3%] hidden md:block">
              <h1 className="text-sm text-zinc-400 ">COD</h1>
          </div>

        </div>
      ))}

      </div>
    )}

    </>
  )
}

export default UserOrderHistory
