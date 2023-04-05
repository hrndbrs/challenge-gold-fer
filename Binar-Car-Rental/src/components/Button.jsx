import React from 'react' 
import { Link } from 'react-router-dom'
import './Button.css'

function Button(props) {
  return (
    <Link to={props.location} state={props.customstate}>
      <button className='cust-button'>{props.text}</button>
    </Link>
  )
}


export default Button