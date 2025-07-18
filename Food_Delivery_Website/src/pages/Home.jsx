import React, { useContext } from 'react'
import Nav from "../components/Nav"
import { Categories } from '../Categories/Categories'
import Card from '../components/Card'
import { dataContext } from '../contextApi/UserContext';
import { food_items } from '../food/Food';
import { RxCross2 } from "react-icons/rx";
import Cart from '../components/Cart';
import { useSelector } from 'react-redux';

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

let items = useSelector(state=>state.cart);
console.log(items);
let subTotal = items.reduce((total,item)=>total+item.price,0)
let taxes = subTotal*2.5/100;
let deliveryCharge=50;
let total = Math.floor(subTotal+deliveryCharge+taxes);
 

  return (
    <div  className='w-full min-h-screen bg-slate-300  '>
      <Nav />
      {!input ? <div className='flex flex-wrap justify-center items-center gap-5 w-[100%] '>
        {Categories.map((item,index) =>{
          return  <div key={index} className=' w-[140px] h-[150px] bg-white flex flex-col-reverse justify-center 
                        items-center gap-4 text-[20px] font-bold text-gray-700 rounded-lg shadow-2xl 
                        hover:bg-green-200 cursor-pointer transition-all duration-200'
                        onClick={() => {
      console.log("Clicked:", item.name);  
      filter(item.name);                   
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
            id={item.id}
          />
          ))}
      </div>
      
      <div className={`p-6 w-full md:w-[40vw] h-[100%] fixed top-0 right-0 bg-white shadow-xl
          transition-all duration-500 overflow-auto flex flex-col items-center  ${showCart?"translate-x-0":"translate-x-full"} `}>
        <header className=' w-[100%] flex justify-between items-center'> 
          <span className='text-green-400 text-4xl font-semibold'> Order Items </span>
          <RxCross2  className=' w-8 h-8 cursor-pointer hover:text-red-500 text-green-400 text-4xl font-semibold'
            onClick={() => setShowCart(false)}
          />

        </header>
        <div  className='w-full  mt-9 flex flex-col gap-6'>
          {items.map((item)=>(
            <Cart name={item.name}  price={item.price} 
            image={item.image} id={item.id} qty={item.qty} key={item.id} />
          ))}
        </div>

        <div  className='w-full border-t-2 border-b-2 border-gray-400 p-8 mt-7 flex flex-col gap-2 '>
          <div  className='w-full flex justify-between items-center'>
            <span className='text-lg text-gray-600 font-semibold '>SubTotal</span>
            <span className='text-green-400 font-semibold text-lg'>Rs {subTotal} /- </span>
          </div>
          <div  className='w-full flex justify-between items-center'>
            <span className='text-lg text-gray-600 font-semibold '>DeliveryCharge</span>
            <span className='text-green-400 font-semibold text-lg'>Rs {deliveryCharge} /- </span>
          </div>
          <div  className='w-full flex justify-between items-center'>
            <span className='text-lg text-gray-600 font-semibold '>Taxes</span>
            <span className='text-green-400 font-semibold text-lg'>Rs {taxes} /- </span>
          </div>
        </div>
        <div>
          <div  className='w-full flex justify-between items-center gap-5 p-10 '>
            <span className='text-2xl text-gray-600 font-semibold '>Total </span>
            <span className='text-green-400 font-semibold text-2xl'>Rs {total} /- </span>
          </div>
        </div>

        <button className="w-[80%] p-3 rounded-2xl bg-green-200 text-xl
       text-gray-400 hover:bg-green-500 hover:text-gray-900 hover:text-2xl
       transition-all flex justify-center items-center">PlaceOrder</button>

      </div>

    </div>
  )
}

export default Home