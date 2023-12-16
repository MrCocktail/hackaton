'use client';
import React, { useEffect, useState } from 'react'
import { Dropdown } from 'flowbite-react';
import { getAllCategories, getProducts, getProductsByCategory } from '../services/eCommerceService';
import CardUtils from '../components/ui/CardUtils';

export default function Shop() {
    const [products, setProducts] = useState([])
    const [categories, setCategories] = useState([])
    const [label, setLabel] = useState('ALL')
    useEffect(() => {
        getProducts().then(res => setProducts(res))
    }, [])
    useEffect(() => {
        getAllCategories().then(res => setCategories(res))
    }, [])
    const filterProducts = (category) => {
        setLabel(category.toUpperCase())
        getProductsByCategory(category).then(res => setProducts(res))
    }
  return (
    <div>
      <h1 className='text-3xl font-bold text-center'>Shop</h1>
        <Dropdown label={`Filter products by ${label}`} inline>
            <Dropdown.Item>BEST RATED</Dropdown.Item>
            {categories.map(category => (
                <Dropdown.Item onClick={() => filterProducts(category)}>{category.toUpperCase()}</Dropdown.Item>
            ))}
        </Dropdown>
        <div className="flex flex-wrap gap-8 p-8">
            {products.map(product => (
                <div className="w-92 h-100 mb-20">
                    <CardUtils key={product.id} product={product} />
                </div>
            ))}
        </div>
    </div>
  )
}
