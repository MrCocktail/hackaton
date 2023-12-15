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

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="" element={<Home />}>
          {/* <Layout> */}
            {/* <Home /> */}
          {/* </Layout> */}
        </Route>
        {/* <Route path="/shop">
          <Layout>
            <Shop />
          </Layout>
        </Route>
        <Route path="/cart">
          <Layout>
            <ShoppingCart />
          </Layout>
        </Route>
        <Route path="/product/:id">
          <Layout>
            <Product />
          </Layout>
        </Route> */}
      </Routes>
    </Router>
  );
}

export default App
