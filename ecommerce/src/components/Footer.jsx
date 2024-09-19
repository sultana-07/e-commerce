import React from 'react'

function Footer() {
  return (
    <div className='w-full mt-28'>
      <div className='w-full flex justify-around px-3  py-2 '>
        <h1 className='text-4xl font-bold relative  right-28 '>ZOMATO</h1>

        <div className=' relative ml-44'>
        <select name="india" className='py-1 px-2 text-xl outline-none border border-2px border-black' >
          <option value="india">india</option>
          <option value="india">UAE</option>
          <option value="india">USA</option>
          <option value="india">Australia</option>
        </select>

        <select name="English"  className='py-1 px-2 text-xl outline-none border border-2px border-black ml-4'>
          <option value="india">English</option>
          <option value="india">Hindi</option>
          <option value="india">Arabic</option>
          <option value="india">Spanish</option>
        </select>
        </div>
  
      </div>

      <div className='w-full  flex py-2 px-3 gap-2 mt-6 '>
          <div className=' w-[17%] ml-14'>
            <h4 className='text-xl '>About Zomato</h4>
            <ul className='text-gray-500 mt-3 leading-loose '>
              <li>Who we are</li>
              <li>Blog</li>
              <li>Work with us</li>
              <li>Investors relations</li>
              <li>Report fraud</li>
              <li>Press kit</li>
              <li>Contact us</li>
            </ul>
          </div>


          <div className=' w-[17%]'>
            <h4 className='text-xl'>Zomaverse</h4>
            <ul className='text-gray-500 mt-3 leading-loose '>
              <li>zomato</li>
              <li>Blinkit</li>
              <li>Feeding india</li>
              <li>hyperpure</li>
              <li>Zomato live</li>
              <li>Zomaland</li>
              <li>Whaether union</li>
            </ul>
          </div>

          <div className=' w-[17%]'>
            <h4 className='text-xl'>For Restaurants</h4>
            <ul className='text-gray-500 mt-3 leading-loose '>
              <li>Partner with us</li>
              <li>Apps for you</li>
              
            </ul>
          </div>

          <div className=' w-[17%]'>
            <h4 className='text-xl'>Learn More</h4>
            <ul className='text-gray-500 mt-3 leading-loose '>
              <li>Privacy</li>
              <li>Security</li>
              <li>Terms</li>
              <li>Sitemap</li>
            </ul>
          </div>

          <div className=' w-[17%]'>
            <h4 className='text-xl'>Download</h4>
             
           <div className='w-full '>
           <img className='w-[50%] mt-5 ' src="https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png" alt="" />

           <img  className='w-[50%] mt-5 ' src="https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png" alt="" />
           </div>
          </div>

          

      


       
      </div>

      <div className='w-full  py-2 px-3 '>
          <p className=' relative ml-14 text-sm text-gray-500'>By continuing past this page, you agree to our Terms of Service, Cookie Policy, Privacy Policy and Content Policies. All trademarks are properties of their respective owners. 2008-2024 © Zomato™ Ltd. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
