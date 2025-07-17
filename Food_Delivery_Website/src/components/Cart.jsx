import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { RemoveItem } from "../Redux/cartSlice.js";

function Cart({name,price,image,id,qty}) {
  let dispatch = useDispatch();
  return (
    <div className="p-2 w-full h-[120px]  shadow-lg flex justify-between ">
      <div className="w-[60%] h-full flex gap-5">
        <div className="rounded-lg w-[60%] h-full overflow-hidden ">
          <img src={image} className="object-cover" alt={name} />
        </div>
        <div className="w-[60%] h-full flex flex-col gap-5  ">
          <div className="text-lg text-gray-600 font-semibold">{name} </div>
          <div  className="w-[110px] h-[45px]  flex rounded-lg overflow-hidden shadow-lg border-2 border-green-400 text-xl">
            <button className="w-[30%] h-full bg-white flex justify-center items-baseline-last text-green-400 hover:bg-gray-200">-</button>
            <span className="w-[40%] h-full bg-slate-200 flex justify-center items-baseline-last text-green-400 ">{qty}</span>
            <button className="w-[30%] h-full bg-white flex justify-center items-baseline-last text-green-400 hover:bg-gray-200">+</button>
          </div>
        </div>
      </div>

      <div  className="flex flex-col justify-start items-end gap-10 ">
        <span className="text-xl text-green-400 font-semibold">Rs {price}</span>
        <RiDeleteBin6Line className="w-[30px] h-[30px] text-red-600 cursor-pointer"
          onClick={()=>dispatch(RemoveItem(id))}
        />

      </div>
    </div>
  );
}

export default Cart;
