import React from "react";
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";

function Card({name,image,price,type}) {
  return (
    <div
      className="w-[300px] h-[400px] bg-white p-3   rounded-lg
          flex flex-col gap-3 m-1 shadow-2xl hover:border-2 border-green-200"
    >
      <div className="w-[100%] h-[80%] overflow-hidden ">
        <img src={image} alt={name} className="object-cover" />
      </div>
      <div className="text-2xl font-semibold ">{name}</div>
      <div className="w-full flex justify-between items-center">
        <div className="text-lg font-bold text-green-500"> RS {price} </div>
        <div
          className=" flex justify-center font-bold
             items-center gap-3 text-green-500 text-lg   "
        >
        {type == 'veg' ?<LuLeafyGreen /> :<GiChickenOven />}   <span>{type}</span>
        </div>
      </div>
      <button className="w-full p-3 rounded-2xl bg-green-200 text-xl
       text-gray-400 hover:bg-green-500 hover:text-gray-900 hover:text-2xl
       transition-all" >Add to Dish
      </button>
    </div>
  );
}

export default Card;
