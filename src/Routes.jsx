import React from 'react'
import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home'
import Page2 from './Pages/Page2'
import Labs from './Pages/Labs'
import Pharmacies from "./Pages/Pharmacies";
import About from "./Pages/About";
import Employer from './Pages/Employer'
import Privacy from './Pages/PrivacyPolicy/Privacy'
import TnC from './Pages/PrivacyPolicy/TnC'
import Contact from './Pages/Contact'
import Demo from './Pages/Demo'
const Router = () => {
      
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hospital-and-health-systems" element={<Page2 />} />
        <Route path="/labs-diagonistic-companies" element={<Labs />} />
        <Route path="/pharmacies-retailers" element={<Pharmacies />} />
        <Route path="/about-us" element={<About />} />
        <Route path='/employers' element={<Employer/>} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path="/demo" element={<Demo/>}/>
        <Route path="/membership-terms" element={<TnC />} />
        <Route path="/privacy-policy" element={<Privacy/>} />
      </Routes>
    </>
  );
}

export default Router