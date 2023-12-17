import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/index.css'
import dotenv from 'dotenv';
import { UserProvider } from './services/userContext.service.jsx';
// dotenv.config();


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
     <App />
    </UserProvider>
  </React.StrictMode>,
)
