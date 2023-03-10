import React from 'react'
import prodPhoto from '../assets/10492a.avif';
import { Link } from "react-router-dom";

export default function CartProdCard() {
  return (
    <div className='p-4'>
        <div className='shadow-sm w-3/4 h-76 rounded-md outline outline-1 outline-gray-200 p-6 hover:outline hover:outline-green-600'>
            {/* PRODUCT PHOTO */}
            <Link to="/products"> 
            <img src={prodPhoto} alt="product" classname="w-48 h-44"/>
            <p>Amul Mithai Mate Condensed Milk</p>
            </Link>
            {/* WEIGHT */}
            <p className='text-gray-500 mt-1'>400g</p>
            {/* PRICE AND QTY */}
            <div className='flex flex-row justify-between mt-2'>
                <p className='mt-2'>$10</p>
                <button className='w-20 h-10 bg-green-600 text-white rounded-md'>REMOVE</button>
            </div>
        </div>
    </div>
  )
}
