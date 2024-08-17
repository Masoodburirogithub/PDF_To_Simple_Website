import React from 'react'

const Aboutme = () => {
  return (
    <div className=' max-w-[1240px] max-h-[500px] gap-4 mx-auto flex flex-col md:grid grid-cols-2 my-7 '>
        <div className="col-span-1  p-4 md:p-10">
            <p className='text-3xl md:text-5xl font-bold'>ABOUT <br/> ME</p>
            <p className='py-2 md:py-7'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. </p>
            <p>This is a great space to write long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide</p>
           <div className="flex my-3 md:py-7 ">
            <input type="button" value="Read More" className='bg-black text-white rounded py-2 px-4 md:px-8 hover:bg-white duration-500 hover:text-black border border-black ' />
            <input type="button" value="Free Consultant" className='hover:bg-black duration-500 hover:text-white bg-white text-black rounded py-2 px-5 md:px-10 mx-2 md:mx-5 border border-black' />
           </div>
        </div>
        <div className="col-span-1">
            <img className='w-[100%] md:w-[77%] mx-auto' src="https://static.wixstatic.com/media/ea71bb_e7959a5be116482b9727a9be900d2d35~mv2_d_5454_3840_s_4_2.jpg/v1/fill/w_675,h_716,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ea71bb_e7959a5be116482b9727a9be900d2d35~mv2_d_5454_3840_s_4_2.jpg" alt="" />
        </div>
    </div>
  )
}

export default Aboutme