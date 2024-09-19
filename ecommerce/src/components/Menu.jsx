import React, { useEffect, useState } from 'react'
import {add} from "../store/CartSlice"
import {useDispatch} from 'react-redux'
import { NavLink } from 'react-router-dom'

function Menu() {

    const dispatch = useDispatch()
    const [products,setProducts] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    const handlebtn = (product) => {
       dispatch(add(product))
    
    
    }

    const cart = products.map((product) => (
       
        <div key={product.id} className='w-[20%] h-[60vh] p-2 border border-2px border-black bg-white m-3'>
            <div className='w-[100%] h-[50%]  flex justify-center'>
              <NavLink to={`/single/${product.id}`}>
              <img className='w-[70%] h-[100%] ' src={product.image} alt="" />
              </NavLink>
            
            </div>
        
        <div className='w-full flex flex-col items-center justify-center mt-3 relative bottom-0 gap-2'>
          <h3 className='text-xl'>{product.title.slice(0,20)}</h3>
          <p>₹{product.price}</p>
          <button  onClick={() => handlebtn(product)}
           className=' py-1 px-4 bg-blue-500 text-white active:bg-green-500 duration-200'>Add to cart</button>
        </div>
      </div>
    
    ))
  return (
   <>
   <h2 className='text-3xl text-center font-bold mb-6'>our best products</h2>
     <div className='w-full flex  flex-wrap justify-center '>
        
        {cart}
    </div>
    
   </>
   
  
  )
}

export default Menu
