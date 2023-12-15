import React from 'react';
import Header from '../components/Header';
import FooterCustom from '../components/FooterCustom';
import { Outlet } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div>
        <Header />
        {/* <Outlet /> */}
        {children}
        <FooterCustom />
    </div>
  );
};

export default Layout;
