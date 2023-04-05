import React from 'react'

function Footer() {
  return (
    <footer className='cust-container'>
                <div className='contact'>
                    <p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                    <p>binarcarrental@gmail.com</p>
                    <p>081-233-334-808</p>
                </div>
                <div className='foot-nav'>
                    <ul>
                        <li><a href="/#aboutServices">Our Services</a></li>
                        <li><a href="/#whyUs">Why Us</a></li>
                        <li><a href="/#testimony">Testimony</a></li>
                        <li><a href="/#faq">FAQ</a></li>  
                    </ul>
                </div>
                <div className='socmed-container'>
                    <p>Connect with us</p>
                    <div className='socmed'>
                        <a href='#'><img src={window.location.origin + '/img/icon_socmed/icon_facebook.svg'}/></a>
                        <a href='#'><img src={window.location.origin + "/img/icon_socmed/icon_instagram.svg"}/></a>
                        <a href='#'><img src={window.location.origin + "/img/icon_socmed/icon_twitter.svg"}/></a>
                        <a href='#'><img src={window.location.origin + "/img/icon_socmed/icon_mail.svg"}/></a>
                        <a href='#'><img src={window.location.origin + "/img/icon_socmed/icon_twitch.svg"}/></a>
                    </div>
                </div>
                <div>
                    <p>Copyright Binar 2022</p>
                    <div className='blue-box'></div>
                </div>
            </footer>
  )
}

export default Footer