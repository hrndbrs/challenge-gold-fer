import React from 'react'
import { Link } from 'react-router-dom'
import NavbarCSS from './Navbar.module.css'

function Navbar() {
  return (
    <div className={NavbarCSS.navbar}>
        <Link to='/'><div className='blue-box'></div></Link>
        <div>
            <div className={NavbarCSS.navLinks}>
            <ul>
              <a href='/#aboutServices'><li>Our Services</li></a>
              <a href='/#whyUs'><li>Why Us</li></a>
              <a href='/#testimony'><li>Testimonial</li></a>
              <a href='/#faq'><li>FAQ</li></a>
            </ul>
            </div>
        </div>
        <div className={NavbarCSS.sandwich}>
          <a id="sandwich" data-bs-toggle="offcanvas" href="#sideMenu" role="button" aria-controls="offcanvasExample">
            <img src={window.location.origin + '/img/fi_menu.svg'}/>
          </a>
        </div>
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="sideMenu" aria-labelledby="sidemenuLabel" style={{width: '50%'}}>
        <div className="offcanvas-header" style={{padding: '0', margin: '34px 16px 0 16px'}}>
          <div className="offcanvas-title desc" id="sidemenuLabel">BCR </div>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" style={{height: '12px', width: '12px', padding: '0 14px'}}></button>
        </div>
        <div className="offcanvas-body" style={{padding: '0', margin: '10px 16px'}}>
          <ul className="desc" style={{listStyleType: 'none', border: 'none', padding: '0'}}>
            <li><a href="/#aboutServices">Our Services</a></li>
            <li><a href="/#whyUs">Why Us</a></li>
            <li><a href="/#testimony">Testimony</a></li>
            <li><a href="/#faq">FAQ</a></li>  
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar