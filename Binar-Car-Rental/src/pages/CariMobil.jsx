import React from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Search from '../components/SearchBar'

function CariMobil() {
  return (
    <div className='main-container'>
        <header className='cust-container'>
            <Navbar/>
            <Banner/>
        </header>
        <div className='cust-container' id='searchBox'>
          <Search/>
        </div>
        <Footer/>
    </div>
  )
}

export default CariMobil