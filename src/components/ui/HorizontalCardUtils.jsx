import { AiOutlinePlus } from "react-icons/ai"; 
import { BiMinus } from "react-icons/bi"; 

'use client';

import { Button, Card } from 'flowbite-react';
import img from '../../assets/watch1.jpg'
import MyButton from "./Button";
import { useState } from "react";

export default function IndividualCart() {
    const [quantity, setQuantity] = useState(1); 

    const incrementQuantity = () => {
        console.log(quantity);
        setQuantity(quantity + 1);
    }
    const decrementQuantity = () => {
        quantity > 1 && setQuantity(quantity - 1);
    }
  return (
    <Card className="max-w-sm" imgSrc={img} horizontal>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
      </p>
      <div className='flex'>
        {/* <MyButton isDisabled={quantity === 1 && true} content={<BiMinus onClick={() => quantity > 1 && setQuantity(quantity - 1)} />} /> */}
       
        {/* <Button ><BiMinus onClick={() => quantity > 1 && setQuantity(quantity - 1)} /></Button>
        <p className="font-normal text-gray-700 dark:text-gray-400 text-center w-20">{quantity}</p>
        <Button ><AiOutlinePlus onClick={()=> setQuantity(quantity + 1)} /></Button> */}

        {/* <MyButton content={<AiOutlinePlus onClick={() => setQuantity(quantity + 1)} />} /> */}

        <button onClick={() => quantity > 1 && setQuantity(quantity - 1)}>
  <BiMinus />
</button>
<p className="font-normal text-gray-700 dark:text-gray-400 text-center w-20">{quantity}</p>
<button onClick={() => setQuantity(quantity + 1)}>
  <AiOutlinePlus />
</button>

      </div>
    </Card>
  );
}
