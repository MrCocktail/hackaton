import { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  // Switch,
  Route,
} from 'react-router-dom'
import Layout from './utils/Layout'
import './styles/App.css'
import MyButton from './components/ui/Button'
import Home from './pages/Home'
import Shop from './pages/Shop'
import ShoppingCart from './pages/ShoppingCart'
import Product from './pages/Product'
import Header from './components/Header'
import CardUtils from './components/ui/CardUtils'

const App = () => {
  return (
      <Router>
        <Routes>
            <Route path='/' element={<Layout children={<Home />}/>}>
            </Route>
            <Route path='/cart' element={<Layout children={<ShoppingCart />}/>}>
            </Route>
            <Route path='/shop' element={<Layout children={<Shop />}/>}>
            </Route>
            <Route path='/product/:id' element={<Layout children={<Product />}/>}>
            </Route>
        </Routes>
      </Router>
  );
};

export default App