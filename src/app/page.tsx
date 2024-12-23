"use client"
import React from 'react'

const Home = () => {
  return (
    <div className="w-full min-h-96 
        text-black font-small flex flex-col items-center justify-center text-center py-6 px-4 mx-auto rounded-md shadow-md max-w-screen-xl lg:py-12 lg:px-8">
      <h1 className='p-4 text-4xl font-serif font-bold'>Assignment 7</h1>
      <p className='text-base sm:text-lg mt-2 font-medium'>Client-side and Server-side Data Fetching</p>

      {/* Button Section */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
        <a
          href="/client"
          className="bg-gray-200 text-black font-bold py-2 px-12 rounded-lg w-full sm:w-auto hover:bg-gray-300 text-center"
          role="button"
        >
          Client Side
        </a>
        <a
          href="/server"
          className="bg-gray-200 text-black font-bold py-2 px-12 rounded-lg w-full sm:w-auto hover:bg-gray-300 text-center"
          role="button"
        >
          Server Side
        </a>
      </div>
    </div>
  )
}

export default Home;
