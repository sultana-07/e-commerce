import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { remove } from '../store/CartSlice';
import { NavLink } from 'react-router-dom';
function Cart() {
  const products = useSelector( state => state.cart);
  const dispatch = useDispatch()


  const removebtn = (id) => {
    dispatch(remove(id))
  }
  const cart = products.map((product) => (
       
    <div className='w-[20%] h-[60vh] p-2 border border-2px border-black bg-white m-3'>
        <div className='w-[100%] h-[50%]  flex justify-center'>
        <img className='w-[70%] h-[100%] ' src={product.image} alt="" />
        </div>
    
    <div className='w-full flex flex-col items-center justify-center mt-3 relative bottom-0 gap-2'>
      <h3 className='text-xl'>{product.title.slice(0,20)}</h3>
      <p>{product.price}</p>
      <button onClick={() => removebtn(product.id)} className='py-1 px-4 bg-red-500 text-white'>
        Remove from cart</button>
    </div>
  </div>

  ))


  
  return (
    <>
    <h2 className='text-center text-2xl font-bold mt-4 mb-4'>your cart</h2>
     <div className='w-full flex flex-wrap justify-center '>
     {cart.length === 0 ? (<div className='text-2xl mt-19'>cart is empty ! Add a product 
       <NavLink to="/" className='text-blue-400'> Product page</NavLink></div>) : cart}
       
     
    </div>
    </>
   
  )
}

export default Cart
