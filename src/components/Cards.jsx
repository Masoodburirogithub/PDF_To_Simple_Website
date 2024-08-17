import React from 'react'

const Cards = () => {
  return (
    <div className='bg-[#2699fb]  mt-[400px]  md:mt-0'>
       <div className="max-w-[1100px]  md:mx-auto h-full md:h-[700px] p-8">
        <p className='text-4xl md:text-6xl md:mx-8'>How I Can <br/> Help You</p>
        <div className="flex flex-col md:grid grid-cols-3  md:h-[400px] gap-20 my-4">
            <div className="col-span-1 h-[500px] md:h-[400px] shadow-xl bg-white hover:scale-90 duration-500 rounded-lg">hello</div>
            <div className="col-span-1 h-[500px] md:h-[400px] shadow-xl bg-white hover:scale-90 duration-500 rounded-lg">hello</div>
            <div className="col-span-1 h-[500px] md:h-[400px] shadow-xl bg-white hover:scale-90 duration-500 rounded-lg">hello</div>
        
        </div>
        <div className="text-center my-10">
        <input type="button" value="More Services" className=' bg-black text-white rounded py-3 px-10 hover:bg-white duration-500 hover:text-black border border-black ' />
        </div>
       </div>
    </div>
  )
}

export default Cards