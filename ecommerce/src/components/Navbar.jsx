import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
function Navbar() {

  const cartnumber = useSelector(state => state.cart)
  return (
   <nav className='w-full sticky top-0 z-10 '>
    <div className='w-full bg-gray-600 text-white flex justify-between py-3 px-3 '>
        <h2 className='ml-40 text-2xl'>Mall.com</h2>
        <ul className='flex mr-28 gap-4 '>
            <li className='cursor-pointer'>
              <NavLink to="/">
                Products
              </NavLink>
            </li>
            <li className='cursor-pointer'>
              <NavLink to="cart">
                Cart {cartnumber.length}
              </NavLink>
               </li>
            <li className='cursor-pointer'>Login</li>
            <li className='cursor-pointer'>Sign up</li>
        </ul>
    </div>
   </nav>
  )
}

export default Navbar
