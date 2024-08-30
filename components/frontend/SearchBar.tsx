/* eslint-disable react/jsx-filename-extension */
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import React from 'react'

const SearchBar = () => {
  return (
    
<form className="max-w-md mx-auto mb-5">   
    <label htmlFor="default-search" className="mb-2  text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <MagnifyingGlassIcon className='text-gray-700 w-6'/>
        </div>
        <input type="search" id="default-search" className="block w-full p-4 ps-10 font-medium text-gray-800  rounded-full  focus:ring-blue-500 focus:border-blue-500     dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>

  )
}

export default SearchBar