// À l'extérieur du composant UserProvider
import React, { createContext, useContext, useState } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [cart, setCart] = useState([]);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  const addCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        cart,
        login,
        logout,
        addCart,
        removeFromCart,
        clearCart,
        helo: '`helo`',
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUserContext doit être utilisé à l\'intérieur de UserProvider');
  }

  return context;
};

// export const GlobalContext = createContext()


