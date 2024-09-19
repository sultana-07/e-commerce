import React from 'react'
import Menu from './Menu'

function Home() {
  return (
    <>
    <div className='w-full py-1 px-3 mt-1  h-[70vh]'>
       <img className='w-[100%] h-[100%] object-cover ' src="https://th.bing.com/th/id/OIP.5hTPGNH5KLGo-9fYgEYnBQAAAA?rs=1&pid=ImgDetMain" alt="" />
    </div>
    
    <div className='w-full py-1 px-3 mt-10  row'>
        <Menu/>
    </div>
    </>
     
  )
}

export default Home
