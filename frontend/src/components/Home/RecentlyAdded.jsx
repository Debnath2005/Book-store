/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react"
import axios from "axios";
import BookCard from "../BookCard/BookCard";
import Loader from "../Loader/Loader";

const RecentlyAdded = () => {
    const [Data,setData]=useState();
    useEffect(()=>{
        const fetch=async ()=>{
           const response= await axios.get("http://localhost:5000/api/v1/get-recent-books");
           setData(response.data.data);
        }
        fetch();
    },[])
    
  return (
    <div className="mt-8 px-8">
      <h4 className="text-3xl text-yellow-100">Recentely Added books</h4>
      {!Data && 
        <div className="flex items-center justify-center my-8">
            <Loader/>{" "}
        </div>
      }
        <div className="my-8 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {Data && Data.map((item,i)=><div key={i}>
                <BookCard data={item}/>{" "}
            </div>)}
        </div>

      </div>
  )
}

export default RecentlyAdded
