import React, { useState,useEffect } from 'react'
import { useParams } from 'react-router'
import { add } from '../store/CartSlice'
import { useDispatch } from 'react-redux'

function SinglePage() {
    const dispatch = useDispatch()

    const {id} = useParams()
    const [singleproduct,setsingleproduct] = useState([])
    useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res => res.json())
    .then(data => setsingleproduct(data))
        
        
    },[id])
    
    const handlebtn = (singleproduct) => {
        dispatch(add(singleproduct))
    }

    const single =  (
         
        <div className='w-[80%] h-[60vh] p-2 border border-2px border-black bg-white m-3 flex'>
        <div className='w-[100%] h-[100%] flex justify-center'>
        <img className='w-[70%] h-[100%] ' src={singleproduct.image} alt="" />
        </div>
    
    <div className='w-full flex flex-col  justify-center mt-3 relative bottom-0 gap-2'>
      <h3 className='text-xl'>{singleproduct.title}</h3>
      <p>{singleproduct.description}</p>
      <p>₹{singleproduct.price}</p>
      <button  onClick={() => handlebtn(singleproduct)}
       className=' py-1 px-4 bg-blue-500 text-white active:bg-green-500 duration-200'>Add to cart</button>
    </div>
  </div>
    )
    
    
  return (
    <div className='w-full'>
         
      {single}
    </div>
    // <div></div>
  )
}

export default SinglePage
