import React from 'react';
import Header from '../components/Header';
import FooterCustom from '../components/FooterCustom';

const Layout = ({ children }) => {
  return (
    <div>
        <Header />
        {children}
        <FooterCustom />
    </div>
  );
};

export default Layout;
