import { useEffect,useState } from 'react'
import axios from 'axios'
import BookCard from '../BookCard/BookCard';
const Favourites = () => {
    const [FavouritesBooks,setFavoritesBooks]=useState();
    const headers={
        id:localStorage.getItem('id'),
        authorization:`Bearer ${localStorage.getItem('token')}`,  
    }

    useEffect(()=>{
        const fetch=async ()=>{
            const response= await axios.get("http://localhost:5000/api/v1/get-favourites-books",{headers})
            setFavoritesBooks(response.data.data);
           // console.log(response.data.data);
        }
        fetch();
    },[]);

  
  return (
    <>
    {FavouritesBooks && FavouritesBooks.length===0 && (
      <div className='text-5xl font-semibold h-[100%] text-zinc-500 flex flex-col items-center w-full'>
        No Favourite Book
        <img src="" alt="star" className='h-20vh my-8' />
      </div>
    )}
    
    <div className=' flex flex-col lg:grid grid-cols-4 gap-4'>
        { FavouritesBooks && FavouritesBooks.map((items,i)=>(
        <div key={i}>
          <BookCard data={items} favourite={true}/>
        </div>
      )) }
    </div>
    </>
   
  )
}

export default Favourites
