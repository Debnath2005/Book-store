//import React from 'react'
import axios from "axios"
import { useEffect,useState } from "react"
import Loader from "../Loader/Loader";
import { toast } from "react-toastify";
const Setting = () => {
 const[value,setValue]=useState({address:""});
 const[profileData,setProfileData]=useState();

  const headers={
    id:localStorage.getItem('id'),
    authorization:`Bearer ${localStorage.getItem('token')}`
  }
 const change=(e)=>{
  const{name,value}=e.target;
  setValue({...value, [name]:value});
 }

useEffect(()=>{
  const fetch=async ()=>{
    const response=await axios.get("http://localhost:5000/api/v1/get-user-information",{headers});
    setProfileData(response.data);
    //console.log(response.data);
    setValue({address:response.data.address})
  }
  fetch();
},[]);

const submitAddress= async ()=>{
  const response = await axios.put("http://localhost:5000/api/v1/update-address",value,{headers});
  toast.success(response.data.message);
}

  return (
    <>
        {!profileData && (
          <div className='w-full h-[100%] flex items-center justify-center'>
          <Loader/>
        </div>
        )}

        {profileData && (
          <div className="h-[100%] p-0 md:p-4 text-zinc-100">
              <h1 className="text-3xl md:text-5xl font-semibold text-zinc-500 mb-8">
                  Settings
              </h1>
              <div className="flex gap-12">
                  <div className="">
                    <label htmlFor="">Username</label>
                    <p className="p-2 rounded bg-zinc-800 mt-2 font-semibold">
                      {/* {profileData.username} */}
                      Debnath Mondal
                    </p>
                    </div>
                    <div className="">
                      <label htmlFor="">Email</label>
                      <p className="p-2 rounded bg-zinc-800 mt-2 font-semibold">
                        {/* {profileData.email} */}
                        mondal.deb1610@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="mt-4 flex flex-col">
                      <label htmlFor="">Address</label>
                      <textarea 
                       className="p-2 rounded bg-zinc-800 mt-2 font-semibold"
                        name="address"
                       value={value.address}
                       onChange={change}/>
                  </div>
                  <div className="mt-4 flex justify-end">
                      <button className="bg-yellow-500 text-zinc-900 font-semibold px-3 py-2 rounded hover:bg-yellow-400 transition-all duration-100" onClick={submitAddress}>
                          Update
                      </button>
                  </div>
                 
          </div>
        )}
    </>
  )
}

export default Setting
