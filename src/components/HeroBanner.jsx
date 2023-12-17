'use client';
import { Carousel } from 'flowbite-react';
import img from '../assets/watch1.jpg';
import { useEffect, useState } from 'react';
import { topProducts } from '../services/eCommerceService';

export default function Hero() {
  const [products, setProducts] = useState([]); 
  useEffect(() => {
    topProducts().then(res => setProducts(res))
  }, [])
  // console.log(products);
  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
      <Carousel pauseOnHover>
        {products.map(product => { 
          // product.rating.rate > 4.5 &&
          // if (product.rating.rate == 4.8) {
          //   console.log(product.rating.rate);
            return (
              <div className="flex h-full items-center justify-evenly bg-gray-400 dark:bg-gray-700 dark:text-white">
                <img src={product.image} height={"200"} width={500} alt="Article Image" rounded />
                <div className="description">
                  <h1 className="text-3xl font-bold">{product.title.slice(0, 20)}</h1>
                  <p className="text-xl">One of the best item in the market</p>
                </div>
              </div>
            )
          // }
        // <div className="flex h-full items-center justify-around bg-gray-400 dark:bg-gray-700 dark:text-white">
        //     <img src={img} width={500} alt="" rounded />
        //     <div className="description">
        //       <h1 className="text-3xl font-bold">Slide 1</h1>
        //       <p className="text-xl">Slide 1 description</p>
        //     </div>
        // </div>
})}
        
      </Carousel>
    </div>
  );
}
