import React from 'react'
import { useLocation } from 'react-router-dom'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'

const Layout = ({children}) => {

  const location=useLocation();

  return (
    <>
      
        <Navbar />
      
      {children}
    
        <Footer />
     
    </>
  );
}

export default Layout