import React from 'react'
// import {AiOutlineClose} from 'AiOutlineClose'
const Header = () => {
  return (
    <div className=' bg-slate-100 shadow-md sticky top-0 '>
         <div className="max-w-[1000px] mx-auto h-[100px] flex justify-between items-center ">
         <div className="mx-2">
            <p className='text-xl font-bold'>ALLAN JOHNSON</p>
            <p className='md:text-center'>Personal Life Coach</p>
         </div>
         <div className="  ">
         {/* <AiOutlineClose  className='md:hidden block text-2xl text-white font-bold'/> */}
            <ul className='hidden md:flex gap-8 font-bold'>
                <li><a href="/">Home</a></li>
                <li><a href="/About">About</a></li>
                <li><a href="/Services">Servives</a></li>
                <li><a href="/Plan">Plan</a></li>
                <li><a href="/Contact">Contact</a></li>
                <li><a href="/**">ErrorPage</a></li>
            </ul>
         </div>
         </div>
    </div>
  )
}

export default Header