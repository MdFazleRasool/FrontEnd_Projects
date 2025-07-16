import React, { useContext } from 'react'
import Nav from "../components/Nav"
import { Categories } from '../Categories/Categories'
import Card from '../components/Card'
import { dataContext } from '../contextApi/UserContext';
import { food_items } from '../food/Food';
import { RxCross2 } from "react-icons/rx";
import Cart from '../components/Cart';

function Home() {
    let {cat,setCat,input,showCart,setShowCart} = useContext(dataContext);

  function filter(category){
    if(category === "All")
      setCat(food_items)
    else{
      const newList = food_items.filter((item) =>(item.food_category === category))
      setCat(newList);
    }
  } 
  return (
    <div  className='w-full min-h-screen bg-slate-300  '>
      <Nav />
      {!input ? <div className='flex flex-wrap justify-center items-center gap-5 w-[100%] '>
        {Categories.map((item,index) =>{
          return  <div key={index} className=' w-[140px] h-[150px] bg-white flex flex-col-reverse justify-center 
                        items-center gap-4 text-[20px] font-bold text-gray-700 rounded-lg shadow-2xl 
                        hover:bg-green-200 cursor-pointer transition-all duration-200'
                        onClick={() => {
      console.log("Clicked:", item.name);  // ✅ Debug
      filter(item.name);                   // ✅ Call your filter function
    }}>
            {item.name}
            {item.icon}
            </div>
            
        })}
      </div> : null}
      

      <div  className='w-full flex flex-wrap gap-20px px-5 justify-center items-center
            pt-8 pb-8 '>
        
        {cat.map((item) => (
          <Card 
            key={item.id} 
            name={item.food_name} 
            image={item.food_image} 
            price={item.price}  
            type={item.food_type}
          />
          ))}
      </div>
      
      <div className={`p-6 w-full md:w-[40vw] h-[100%] fixed top-0 right-0 bg-white shadow-xl
          transition-all duration-500   ${showCart?"translate-x-0":"translate-x-full"} `}>
        <header className=' w-[100%] flex justify-between items-center'> 
          <span className='text-green-400 text-4xl font-semibold'> Order Items </span>
          <RxCross2  className=' w-8 h-8 cursor-pointer hover:text-red-500 text-green-400 text-4xl font-semibold'
            onClick={() => setShowCart(false)}
          />

        </header>
        <Cart />
      </div>

    </div>
  )
}

export default Home