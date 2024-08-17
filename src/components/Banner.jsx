import React from 'react'

const Banner = () => {
  return (
    <div className='bg-[#2699fb] '>
       <div className="max-w-[1240px] h-[500px] mx-auto text-center py-24 ">
          <p className='text-2xl md:text-3xl'>AMBITION IS THE FIRST STEP TOWARDS</p>
          <p className=' py-10 text-6xl md:text-[100px] font-bold'>SUCCESS</p>
          <p className='text-white text-xl'>Now Available for Online Coaching</p>
          <input type="button" value="Book Now" className='bg-black text-white py-3 px-10 rounded text-xl my-8' />
       </div>
    </div>
  )
}

export default Banner