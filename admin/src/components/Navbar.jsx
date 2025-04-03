import React from 'react'
import {assets} from '../assets/assets';

const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center py-2 px-[4%] justify-between'>
      <img className='w-[max(10%,80px)]' src={assets.logo} alt="" />
      <p className='font-black px-3 py-1 text-white bg-indigo-600 rounded'>ADMIN PANEL</p>
      <button onClick={()=> setToken('')} className='font-black bg-red-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm' >Logout</button>
    </div>
  )
}

export default Navbar
