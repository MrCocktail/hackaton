import { BsFillHandbagFill } from "react-icons/bs"; 
'use client';
import React, { useContext, useEffect, useState } from 'react'
import { Avatar, Dropdown, Navbar, Badge } from 'flowbite-react';
import { Link } from "react-router-dom";
import { UserContext, useUserContext } from "../services/userContext.service";
import { DarkThemeToggle, Flowbite } from 'flowbite-react'


export default function Header() {
  const [cart, setCart] = useState([])
  // const user = JSON.parse(localStorage.getItem('user')) || []
  const { user,  logout } = useUserContext()
  const global = useUserContext()
  // console.log(user);
  const [connectedUser, setConnectedUser] = useState(user)
  console.log(connectedUser);
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log(storedCart);
    setCart(storedCart)
  }, [])
  useEffect(() => {
    // setConnectedUser(user)
    // console.log('user: ', user);
    // console.log('connectedUser: ', connectedUser);
  }, [])
  console.log('in header', cart);
  return (
    <Navbar fluid rounded className='w-full'> 
      <Navbar.Brand href="/">
        {/* <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /> */}
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">DevFundGoal</span>
      </Navbar.Brand>
      <div className="flex justify-center items-center md:order-2">
        <div className="flex">
            <Link to="/cart">
                <BsFillHandbagFill color="black" fontSize={24} />
            </Link>
                <Badge color="success" className="mb-0">    
                    {cart.length}
                </Badge>
        </div>
        <div>
            <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar alt="User settings" img={user && user.imageUrl} rounded />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">{user && user.prenom}</span>
                {/* <span className="block truncate text-sm font-medium">name@flowbite.com</span> */}
              </Dropdown.Header>
              <Dropdown.Item>
                <DarkThemeToggle />
              </Dropdown.Item>
              {/* <Dropdown.Item>Settings</Dropdown.Item>
              <Dropdown.Item>Earnings</Dropdown.Item> */}
              <Dropdown.Divider />
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown>
        </div>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="/shop">Shop</Navbar.Link>
        {/* <Navbar.Link href="/cart">Cart</Navbar.Link> */}
      </Navbar.Collapse>
    </Navbar>
  );
}

