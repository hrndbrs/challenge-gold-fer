import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Navbar from '../components/Navbar'
import Search from '../components/SearchBar'
import Footer from '../components/Footer'

function Detail() {
  const API_URL = 'https://bootcamp-rent-cars.herokuapp.com/customer/car/'
  const { id } = useParams()
  const [displayCar, setDisplayCar] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`${API_URL}${id}`)

      setDisplayCar(await response.data)
    }

    fetchData()
  }, [])


  let currencyIDR = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  })

  return (  
    <div className='main-container'>
      <header className='cust-container' style={{height: '16.625rem'}}>
        <Navbar/>
      </header>
      <div className='cust-container' id='searchBox'>
        <Search page='detail' value={true}/>
      </div>
      <div className='product-display'>
        <div className='display-description paket-detail'>
          <p>Tentang Paket</p>
          <p>Include</p>
          <ul>
            <li>Apa saja yang termasuk dalam paket misal durasi max 12 jam</li>
            <li>Sudah termasuk bensin selama 12 jam</li>
            <li>Sudah termasuk Tiket Wisata</li>
            <li>Sudah termasuk pajak</li>
          </ul>
          <p>Exclude</p>
          <ul>
            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
            <li>Tidak termasuk akomodasi penginapan</li>
          </ul>
          <p>Refund, Reschedule, Overtime</p>
          <ul style={{margin: '0'}}>
            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
            <li>Tidak termasuk akomodasi penginapan</li>
            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
            <li>Tidak termasuk akomodasi penginapan</li>
            <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
            <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
            <li>Tidak termasuk akomodasi penginapan</li>
          </ul>
        </div>
        <div className='display-description display-car-detail'>
          <img src={displayCar.image} style={{width:'16.875rem', margin: '0 auto'}}/>
          <p style={{margin: '3.25rem 0 0 0'}}>{displayCar.name}</p>
          <div className='car-category'>
            <img src={window.location.origin + '/img/fi_users.svg'}/>
            <span>
              {displayCar.category=='small'&&'2-4 orang'}
              {displayCar.category=='medium'&&'4-6 orang'}
              {displayCar.category=='large'&&'4-8 orang'}
            </span>
          </div>
          <p className='price-display'><span>Total</span><span>{currencyIDR.format(displayCar.price)}</span></p>
        </div>

      </div>
      
      <Footer/>
    </div>
  )
}

export default Detail