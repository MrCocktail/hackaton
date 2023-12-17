import React, { useEffect } from 'react'
import { DarkThemeToggle, Flowbite } from 'flowbite-react'
import Header from '../components/Header'
import Hero from '../components/HeroBanner'
import CardUtils from '../components/ui/CardUtils'
import FooterCustom from '../components/FooterCustom'
import { getLimitedProducts } from '../services/eCommerceService'
import Connection from '../components/ConnectionModal'
import { useUserContext } from '../services/userContext.service'

export default function Home() {
  const [products, setProducts] = React.useState([])
  const { user } = useUserContext() 
  console.log(user);
  useEffect(() => {
    getLimitedProducts(6).then(res => setProducts(res))
  }, [])
  return (
    <Flowbite>
        <div className='w-screen'>
            <Hero />
            <div className="flex flex-wrap gap-8 p-8">
              {products.map(product => (
                <div className="w-92 h-100 mb-20">
                  <CardUtils key={product.id} product={product} />
                </div>  
              ))}
            </div>
            {(user === null || user === "undefined") && <Connection />	}
            {/* <DarkThemeToggle /> */}
        </div>
    </Flowbite>
  )
}
