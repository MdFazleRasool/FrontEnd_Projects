import React, { useContext, useEffect } from 'react'
import { MdFastfood } from "react-icons/md";
import { IoSearchOutline } from "react-icons/io5";
import { RiShoppingBag4Line } from "react-icons/ri";
import { dataContext } from '../contextApi/UserContext';
import { food_items } from '../food/Food';

function Nav() {
  let {input,setInput,setCat,showCart,setShowCart} = useContext(dataContext);
  useEffect(()=>{
    let newList=food_items.filter((item)=>item.food_name.includes(input) || item.food_name.toLowerCase().includes(input))
    setCat(newList) 
  },[input])
  return (
    <div className='w-full h-[100px] flex justify-between items-center px-5 md:px-8'  >
      <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-2xl'>
        <MdFastfood className=' w-[30px] h-[30px] text-green-500'/>
      </div>
      <form className=' w-[45%] h-[60px] bg-white flex  items-center rounded-md shadow-2xl px-5  gap-5 md:w-[65%]'
        onSubmit={(e)=>e.preventDefault()}
      >
        <IoSearchOutline  className='text-green-500  w-[25px] h-[25px]  '  />
        <input type='text' placeholder='Search Items ...'  className='w-full h-full outline-0 text-[16px] md:text-[20px]  '
          onChange={(e)=>setInput(e.target.value)}
          input={input}
        />
      </form>
      <div className=' relative w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-2xl   cursor-pointer'
        onClick={()=> {
          setShowCart(true)
        }}
      >
        <span className='absolute top-0 right-2 text-green-500 font-semibold text-[18px]  '>0</span>
        <RiShoppingBag4Line className=' w-[30px] h-[30px] text-green-500' />
      </div>
    </div>
  )
}

export default Nav