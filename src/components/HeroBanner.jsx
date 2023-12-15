'use client';
import { Carousel } from 'flowbite-react';
import img from '../assets/watch1.jpg';

export default function Hero() {
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel pauseOnHover>
        <div className="flex h-full items-center justify-around bg-gray-400 dark:bg-gray-700 dark:text-white">
            <img src={img} width={500} alt="" rounded />
            <div className="description">
              <h1 className="text-3xl font-bold">Slide 1</h1>
              <p className="text-xl">Slide 1 description</p>
            </div>
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          Slide 2
        </div>
        <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
          Slide 3
        </div>
      </Carousel>
    </div>
  );
}
