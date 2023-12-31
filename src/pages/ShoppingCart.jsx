import React, { useEffect, useState } from 'react'
import IndividualCart from '../components/ui/HorizontalCardUtils'
import { getProducts } from '../services/eCommerceService'
import { useUserContext } from '../services/userContext.service'
import FundMeFy from '../services/payment.service'

export default function ShoppingCart() {
  // const [quantity, setQuantity] = useState()
  const pay = new FundMeFy()
  const processPayment = (amount) => {
    pay
      .generate({
        amount,
        note: "DevFunGoal Payment",
        payorName: "Mr. Coklat",
        payorEmail: "coklat@me.com",
        returnUrl: "http://localhost:3000",
      })
      .then((res) => {
        const { mainData } = res;
        
        window.location.href = mainData.pay_url;
      })
      .catch((err) => console.log(err));
  };
  
  
  const [products, setProducts] = useState([]) 
  const [userCart, setUserCart] = useState(JSON.parse(localStorage.getItem('cart')) || [])
  const [total, setTotal] = useState(0)
  const { cart } = useUserContext()
  console.log(cart);
  const removeFromCart = (produitId) => {
    // Filtrer les produits pour obtenir un nouveau tableau sans le produit à retirer
    const nouveauPanier = userCart.filter((produit) => produit.id !== produitId);

    // Mettre à jour l'état avec le nouveau panier
    setProducts(nouveauPanier);
    localStorage.setItem('cart', JSON.stringify(nouveauPanier))
    window.location.reload()
  };
  useEffect(() => {
    	const cart = JSON.parse(localStorage.getItem('cart')) || []
    	setUserCart(cart)
  }, [])
  useEffect(() => {
    let amount = 0
    console.log(userCart);
    userCart.map(item => {
      amount += item.price * item.quantity
    })
    console.log(amount);
    setTotal(amount)
  }, [])
  useEffect(() => {
      getProducts().then(res => setProducts(res))
  }, [])

  console.log(userCart);
  return (
    <div>
      <h1 className='text-3xl font-bold mb-3 text-center'>Shopping Cart</h1>
      <div className="flex items-center justify-start">
        <h4 className='font-bold mx-10'>Total Amount: ${total}</h4>
        <a
          type="button"
          onClick={() => processPayment(total)}
          href="#"
          className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
        >
          Order
        </a>
      </div>
      <div className="flex flex-wrap gap-8 p-8">
            {(userCart.length > 0) ? userCart.map(product => (
                <div className="w-92 h-100 mb-20">
                    <IndividualCart key={product.id} product={product} removeFromCart={removeFromCart}/>
                </div>
            ))
          :
            <div>
              <h2 className='text-3xl text-center'>Your cart is empty</h2>
              </div>}
        </div>
    </div>
  )
}
