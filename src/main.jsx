import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import dotenv from 'dotenv';
import { UserProvider, UserContext } from './services/userContext.service.jsx';
import { DarkThemeToggle, Flowbite } from 'flowbite-react'

// dotenv.config();


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
     <Flowbite>
       <App />
     </Flowbite>
    </UserProvider>
  </React.StrictMode>,
)
