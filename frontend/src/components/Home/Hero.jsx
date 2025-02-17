/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import AllBooks from '../../pages/AllBooks'
const Hero = () => {
  return (
    <div className=' h-[75vh] flex'>
      <div className='w-full lg:w-3/6 flex flex-col items-center lg:items-start justify-center'>
        <h1 className='text-4xl lg:text-8xl font-semibold text-yellow-100 text-center  lg:text-left'>
            Discover Your Next Great Read
        </h1>
        <p className='mt-4 text-3xl text-zinc-300 text-center lg:text-left'>
            Uncover Captivating stories, enriching knowledge ,and  endless<br />
            inspiration in our curated collection of books
        </p>
        <div className='mt-8'>
        <Link to="/all-books">
        <button className='text-yellow-100 text-xl lg:text-2xl font-semibold border border-yellow-100 px-10 py-3 hover:bg-zinc-800 rounded-full'>Discover Books</button>
        </Link>

        </div>
      </div>
      <div className='w-full lg:w-3/6 h-auto lg:h-[100%] flex items-center justify-center'>
        <img className='lg:h-[90%]' src="./hero2.png" alt="hero" />
      </div>
    </div>
  )
}

export default Hero
