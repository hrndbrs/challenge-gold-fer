import React from 'react'
import PropTypes from 'prop-types'
import CardCSS from './Card.module.css'

function Card(props) {
    if(props.type === 'benefit') {
        const benefits = [
            {
                title: 'Mobil Lengkap', 
                id: '1',
                img : './img/icon_complete.svg', 
                desc: 'Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat'
            },{
                title: 'Harga Murah',
                id: '2', 
                img : './img/icon_price.svg', 
                desc: 'Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain'
            },{
                title: 'Layanan 24 Jam', 
                id: '3',
                img : './img/icon_24hrs.svg', 
                desc: 'Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu'
            },{
                title: 'Supir Profesional', 
                id: '4',
                img : './img/icon_professional.svg', 
                desc: 'Supir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu'
            }
        ]

        return (
            <div className='card'>
                {benefits.map((benefit) => {
                return (<div className={CardCSS.benefit} key={benefit.id}>
                    <img src={benefit.img} alt={benefit.id}/>
                    <p style={{margin:'1rem 0',fontSize:'1rem'}}>{benefit.title}</p>
                    <p style={{margin:'0',fontSize:'0.875rem'}}>{benefit.desc}</p>
                </div>)
            })}
            </div>
          )
    }

}

Card.propTypes = {
    type: PropTypes.string,
    index: PropTypes.number,
}

export default Card