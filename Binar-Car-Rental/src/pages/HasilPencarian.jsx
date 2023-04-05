import React, {useState, useEffect} from 'react'
import { useLocation, Link } from 'react-router-dom'
import axios from 'axios'
import Navbar from '../components/Navbar'
import Search from '../components/SearchBar'
import Footer from '../components/Footer'

const API_URL = "https://bootcamp-rent-cars.herokuapp.com/customer/v2/car"

const PRICE_OPTION = {
    small: {
      maxPrice: 400000,
    },
    medium: {
      minPrice: 400000,
      maxPrice: 600000,
    },
    large: {
      minPrice: 600000,
    },
  }

function HasilPencarian() {

  const [resultData, setResultData] = useState([])
  const loc = useLocation()

  const {name, category, price, status} = loc.state || {}
 
  useEffect (() => {
    const getPrice = PRICE_OPTION[price]

    const fetchData = async () => {
       const response = await axios.get(API_URL, {
        params: {
          name,
          category,
          ...getPrice,
          status: status === "true" ? true : false,
        },
      })

      setResultData(await response.data.cars)
    }

    fetchData()


  }, [name, category, price, status])


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
        <Search value={true}/>
      </div>
      <div className='result cust-container' id='result'>
        {resultData.map((car) => (
          <div className='result-entry' key={car.id}>
            <div className='car-detail'>
              <img src={car.image}/>
              <div style={{fontWeight: '400'}}>{car.name}</div>
              <div style={{fontSize: '1rem'}}>{currencyIDR.format(car.price)} / hari</div>
              <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </div>
             </div>
           <Link to={`/car/detail/${car.id}`}><button style={{width: '100%'}}>Pilih Mobil</button></Link>
          </div>))}
      </div>
      <Footer/>
    </div>
  )
}

export default HasilPencarian