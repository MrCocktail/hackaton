import React from 'react'
import { DarkThemeToggle, Flowbite } from 'flowbite-react'
import Header from '../components/Header'
import Hero from '../components/HeroBanner'
import CardUtils from '../components/ui/CardUtils'
import FooterCustom from '../components/FooterCustom'

export default function Home() {
  return (
    <Flowbite>
        <div className='w-screen'>
            <Header />
            <Hero />
            <div className="grid grid-cols-1 mx-aut w-screen">
                <CardUtils />
            </div>
            <FooterCustom />
            {/* <DarkThemeToggle /> */}
        </div>
    </Flowbite>
  )
}
