import React from 'react'
import BannerCSS from './Banner.module.css'
import Button from './Button'

function Banner(props) {
  return (
    <div className={BannerCSS.heroSect}>
        <div className="d-flex flex-column">
            <div className={BannerCSS.bannerTitle}>
            Sewa & Rental Mobil Terbaik di Tomioka
            </div>
            <div className={BannerCSS.bannerSubtitle}>
            Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
            </div>
            {props.page==='home'&&<Button text="Mulai Sewa Mobil" location='/search'/>}
        </div>
        <div className={BannerCSS.bannerImage}>
            <img src="./img/img_car.svg" alt="" style={{width: 'clamp(344.22px, 120%, 704px)'}}/>
        </div>
    </div>
  )
}

export default Banner