import React from 'react'

const ConactForm = () => {
  return (
    <div className='flex flex-col md:grid grid-cols-2 max-w-[1240px] h-[600px] mx-auto  gap-9 '>
    <div className="col-span-1 ">
        <div className="p-5 md:p-10">
        <p className='text-3xl md:text-5xl mb-9'>Contact</p>
        <p className='my-4 md:my-10'>500 Terry Francine Street, <br/> San Francisco, CA 94158</p>
        <p className='my-4 md:my-10'>Tel: 123-456-7890 <br/> Fax: 123-456-7890</p>
        
        <p className='my-4 md:my-10'>info@mysite.com</p>
        <p>© 2035 by Personal Life Coach. <br/> Powered and secured by Wix</p>
        </div>
    </div>
    <div className="col-span-1 p-5">
    <label for="username" class="text-xl mb-2 mt-5 block">Enter Your Name</label>
    <input type="text" id="username" name="username" placeholder="Enter your username" class="w-[300px] md:w-[500px] px-2 py-2 border border-black rounded-md  focus:ring-2 focus:ring-blue-500 "/>
    <label for="username" class="text-xl mb-2 mt-5 block">Enter Your Email</label>
    <input type="text" id="username" name="username" placeholder="Enter Your Email" class="w-[300px] md:w-[500px] px-2 py-2 border border-black rounded-md  focus:ring-2 focus:ring-blue-500 "/>
    <label for="username" class="text-xl mb-2 mt-5 block">Enter Your Subject</label>
    <input type="text" id="username" name="username" placeholder="Enter Your Subject" class="w-[300px] md:w-[500px] px-2 py-2 border border-black rounded-md  focus:ring-2 focus:ring-blue-500 "/>
    <label for="username" class="text-xl mb-2 mt-5 block">Message</label>
    <textarea id="message" name="message" rows="4" placeholder="Enter your message" class="w-[300px] md:w-[500px] px-3 py-2 border border-black rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"></textarea>
    <input type="button" value="More Services" className='mt-4 bg-black text-white rounded py-3 px-10 w-[300px] md:w-[500px] hover:bg-white duration-500 hover:text-black border border-black ' />
    </div>
    </div>
  )
}

export default ConactForm