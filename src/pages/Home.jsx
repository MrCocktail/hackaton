import { BsArrowRight } from "react-icons/bs"; 
import React, { useEffect } from 'react'
import { DarkThemeToggle, Flowbite } from 'flowbite-react'
import Header from '../components/Header'
import Hero from '../components/HeroBanner'
import CardUtils from '../components/ui/CardUtils'
import FooterCustom from '../components/FooterCustom'
import { getLimitedProducts } from '../services/eCommerceService'
import Connection from '../components/ConnectionModal'
import { useUserContext } from '../services/userContext.service'
import Cookies from 'js-cookie'

export default function Home() {
  const [products, setProducts] = React.useState([])
  const { user } = useUserContext() 
  // localStorage.setItem('user', JSON.stringify(user))
  console.log(user);
  useEffect(() => {
    getLimitedProducts(5).then(res => setProducts(res))
  }, [])

  const valeurDuCookie = Cookies.get('userData');
  const cookieExiste = Cookies.get('userData') !== undefined;
  const all = Cookies.get()
  console.log(all);
  console.log(valeurDuCookie);
  return (
    <Flowbite>
        <div className='w-screen :dark:bg-gray-900'>
            <Hero products={products} />
            <div className="flex items-center flex-wrap gap-8 p-8">
              {products.map(product => (
                <div className="w-92 h-100 mb-20">
                  <CardUtils key={product.id} product={product} />
                </div>  
              ))}
              <a
          type="button"
          // onClick={() => addToCart(data)}
          href="/shop"
          className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800 w-48 mx-auto"
        >
          View more <BsArrowRight className="inline" />
        </a>
            </div>
            {!localStorage.getItem('user') && <Connection />	}
            
            {/* <DarkThemeToggle /> */}
        </div>
    </Flowbite>
  )
}
