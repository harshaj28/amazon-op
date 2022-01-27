import Image from "next/image";
import { useState } from "react";
import {StarIcon} from "@heroicons/react/solid"
import Currency from "react-currency-formatter"
import { useDispatch } from "react-redux";
import {addToBasket} from "../slices/basketSlice"
const MAX_RATING=5;
const MIN_RATING=1;

function Product({id,title,price,description,category,image}) {
    const dispatch=useDispatch();
    const [rating]= useState(
        Math.floor(Math.random()*(MAX_RATING-MIN_RATING+1))+MIN_RATING
    );
    const[hasPrime]=useState(Math.random()<0.5)
    const addItemToBasket=()=>{
        const product={
            id,title,price,description,category,image,hasPrime
        };
        dispatch(addToBasket(product));
    }
    return(
        <div className="relative flex flex-col m-5 bg-white z-30 p-10" >
            <p className="absolute top-2 right-2 text-xs italic text-gray-400">{category}</p>
            <Image src={image} height={200} width={200} objectFit="contain"/>
            <h4 className="my-3">{title}</h4>
            <div className="flex">
                {Array(rating).fill().map((_,i)=>{
                    return (
                        <StarIcon key={i} className="h-5 text-yellow-500" />
                    );
                })}
            </div>
            <p className="text-xs my-2 line-clamp-2">{description}</p>
            <div className="mb-5">
                <Currency quantity={price*72} currency="INR" />
            </div>
            {hasPrime&&(
                <div className="flex items-center space-x-2 -mt-5">
                    <img className="w-12" src="https://links.papareact.com/fdw" alt=""/>
                    <p className="text-xs text-gray-500">FREE Next-Day Delivery</p>
                </div>
            )}
            <button onClick={addItemToBasket} className="mt-auto p-2 text-xs md:text-sm bg-gradient-to-b from-yellow-200 to bg-yellow-400 border border-yellow-300 rounded-sm focus:outline-none  focus:ring-yellow-500 active:from-yellow-500">Add to Basket</button>
        </div>
    )
}
export default Product;