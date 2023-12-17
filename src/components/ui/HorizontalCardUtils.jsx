import { AiOutlinePlus } from "react-icons/ai"; 
import { BiMinus } from "react-icons/bi"; 

'use client';

import { Button, Card } from 'flowbite-react';
import img from '../../assets/watch1.jpg'
import MyButton from "./Button";
import { useEffect, useState } from "react";
import { json } from "react-router-dom";

export default function IndividualCart({product}) {
    const [item, setItem] = useState(product); 
    const [cart, setCart] = useState([])
    useEffect(() => {
      setCart(JSON.parse(localStorage.getItem('cart')) || []);
    }, [])
    // console.log(cart);
    // const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const incrementQuantity = (amount) => {
      setItem((prevItem) => {
        const newItem = { ...prevItem, quantity: amount };
        localStorage.setItem('cart', JSON.stringify([newItem, ...cart]));
        console.log(JSON.parse(localStorage.getItem('cart')));
        return newItem;
      });
        // setItem({...item, quantity: amount});
        // localStorage.setItem('cart', JSON.stringify(item));
        // console.log(JSON.parse(localStorage.getItem('cart')));
    }
    // console.log(cart);
    const updateQuantity = (itemId, newQuantity) => {
      console.log(itemId, newQuantity);
      setCart((prevCart) => {
        const updatedCart = prevCart.map((item) => {
          if (item.id === itemId) {
            return { ...item, quantity: newQuantity };
          }
          // return item;
        });
    
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    
        return updatedCart;
      });
    };
    
    
    const decrementQuantity = (amount) => {
        // setItem({...item, quantity: amount});
        item.quantity > 1 && setItem({...item, quantity: amount});
        localStorage.setItem('cart', JSON.stringify(item));

    }
  return (
    <Card
    horizontal
    className="max-w-md"
    imgAlt={product.title}
    imgSrc={product.image} 
  >
    <a href="#">
      <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
        {product.title}
      </h5>
    </a>
    <p className="font-normal text-gray-700 dark:text-gray-400">
        {product.description}
      </p>
    {/* <div className="mb-5 mt-2.5 flex items-center">
      <svg
        className="h-5 w-5 text-yellow-300"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
      </svg>
      <svg
        className="h-5 w-5 text-yellow-300"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
      </svg>
      <svg
        className="h-5 w-5 text-yellow-300"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
      </svg>
      <svg
        className="h-5 w-5 text-yellow-300"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
      </svg>
      <svg
        className="h-5 w-5 text-yellow-300"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
      </svg>
      <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
        {product.rating.rate}
      </span>
    </div> */}
    {/* <div className="flex items-center justify-between">
      <span className="text-3xl font-bold text-gray-900 dark:text-white">${product.price}</span>
      <a
        type="button"
        onClick={() => addToCart(product)}
        href="#"
        className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
      >
        Add to cart
      </a>
    </div> */}
        <div className="flex items-center justify-start">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">${product.price}</span>
        
      </div>
        
    <div className='flex'>
        {/* <MyButton isDisabled={quantity === 1 && true} content={<BiMinus onClick={() => quantity > 1 && setQuantity(quantity - 1)} />} /> */}
       
        {/* <Button ><BiMinus onClick={() => quantity > 1 && setQuantity(quantity - 1)} /></Button>
        <p className="font-normal text-gray-700 dark:text-gray-400 text-center w-20">{quantity}</p>
        <Button ><AiOutlinePlus onClick={()=> setQuantity(quantity + 1)} /></Button> */}

        {/* <MyButton content={<AiOutlinePlus onClick={() => setQuantity(quantity + 1)} />} /> */}

        <button onClick={() => item.quantity > 1 && decrementQuantity(item.quantity - 1)}>
  <BiMinus />
</button>
<p className="font-normal text-gray-700 dark:text-gray-400 text-center w-20">{item.quantity}</p>
<button className="" onClick={() => incrementQuantity(item.quantity + 1)}>
  <AiOutlinePlus />
</button>

      </div>
  </Card>
  );
}
