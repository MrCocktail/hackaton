'use client';
import { Dropdown } from 'flowbite-react';
import React from 'react'

export default function Shop() {
  return (
    <div>
      <h1 className='text-3xl font-bold text-center'>Shop</h1>
        <Dropdown label="Filter products" inline>
            <Dropdown.Item>Best rated</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
    </div>
  )
}
