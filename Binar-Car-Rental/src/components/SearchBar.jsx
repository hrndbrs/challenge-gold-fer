import React, {useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import SearchCSS from './SearchBar.module.css'
import Button from './Button'



function SearchBar(props) {
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

  const penumpang = {
    small : '2-4 orang',
    medium: '4-6 orang',
    large : '4-8 orang',
  }

  const [name, setName] = useState("")
  const [category, setCategory] = useState("")
  const [price, setPrice] = useState({})
  const [status, setStatus] = useState("")
  const [resultData, setResultData] = useState([])

  props.value??false


  if (props.page==='display') Form.setAttribute("disabled", "")

  // async function loadData() {
  //   const res = await fetch( API_URL )
  //   const data = await res.json()

  //   try {
  //     console.log(data)
  //     return data
  //   }catch(err) {
  //     console.error(err)
  //   }
  // }


  // const handleClick = async () => {
  //   const cars = await loadData()
  //   let x = 0

  //   let dataDisplay = cars.filter((car)=>{
  //     return car.name.toLowerCase().includes(name.toLowerCase()) && car.category === category && car.status === status
  //     }
  //   )
  // }

  async function handleClick() {
    const getPrice = PRICE_OPTION[price]

    const response = await axios.get(API_URL, {
      params: {
        name,
        category,
        ...getPrice,
        status,
      },
    })

    setResultData(await response.data.cars)
  }

  return (
    <div className={SearchCSS.menu}>
      {props.value&&(<p>Pencarianmu</p>)}
      <div className={SearchCSS.searchBar}>
        <div>
          <Form.Label htmlFor='name'>Nama Mobil</Form.Label>
          <Form.Control 
          defaultValue ={name??name}
          onChange={(e) => {
            setName(e.target.value.toLowerCase())
          }} 
          id='name' 
          placeholder='Ketik nama/tipe mobil' 
          disabled={props.page==='detail'}  
          />
        </div>
        <div>
          <Form.Label htmlFor='category'>Kategori</Form.Label>
          <Form.Select id='category'
          defaultValue={category??penumpang[category]}
          onChange={(e) => {
            setCategory(e.target.value)
          }}
          disabled={props.page==='detail'}  >
            <option disabled selected hidden>
              Masukan Kapasitas Mobil
            </option>
            <option value='small'>2 - 4 orang</option>
            <option value='medium'>4 - 6 orang</option>
            <option value='large'>4 - 8 orang</option>
          </Form.Select>
        </div>
        <div>
          <Form.Label htmlFor='harga'>Kategori</Form.Label>
          <Form.Select id='harga'
          // defaultValue={price??}
          onChange={(e) => {
            setPrice(e.target.value)
          }}
          disabled={props.page==='detail'}  >
          <option disabled selected hidden>
              Masukan Harga Sewa per Hari
            </option> 
            <option value="small">{'>'}Rp. 400.000</option>
            <option value="medium">Rp. 400.000 - Rp.600.000</option>
            <option value="large">{'>'}Rp. 600.000</option>
          </Form.Select>
        </div>
        <div>
          <Form.Label htmlFor='status'>Status</Form.Label>
          <Form.Select
            defaultValue={status??'Disewakan'}
            onChange={(e) => {
              setStatus(e.target.value==='true')
            }}
            id="status"
            disabled={props.page==='detail'}  
          >
            <option disabled selected hidden>
              Disewa
            </option>
            <option value='true'>Disewakan</option>
            <option value='false'>Tidak Disewakan</option>
          </Form.Select>
        </div>
        {props.page != 'detail'&&(
          <div style={{paddingTop: '1.575rem'}}>
          <div onClick={handleClick}>
            {!props.value?
              (<Button text='Cari Mobil'  location='/search-result' customstate={{name, category, price, status}}/>):
              (<Link to='/search-result'state={{name, category, price, status}}><button style={{
                  backgroundColor: '#FFF',
                  padding: '0.5rem 0.75rem',
                  border: '1px solid #0D28A6',
                  borderRadius: '0.125rem',
                  color: '#0D28A6'
                }} >
                Edit
                </button></Link>)
            }
          </div>
        </div>
        )
        }
        
      </div>
    </div>
  )
}

export default SearchBar