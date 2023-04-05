import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Card from '../components/Card'
import Carousel from '../components/Carousel'
import Button from '../components/Button'
import Footer from '../components/Footer'

function Home() {
    const [isClick1, setIsClick1] = useState(false)
    const [isClick2, setIsClick2] = useState(false)
    const [isClick3, setIsClick3] = useState(false)
    const [isClick4, setIsClick4] = useState(false)
    const [isClick5, setIsClick5] = useState(false)

    const handleClick1 = ()=>{
        setIsClick1(isClick1 => {
            return isClick1 === false ? true : false
        })
    }
    const handleClick2 = ()=>{
        setIsClick2(isClick2 =>{
            return isClick2 === false ? true : false
        })
    }
    const handleClick3 = ()=>{
        setIsClick3(isClick3 =>{
            return isClick3 === false ? true : false
        })
    }
    const handleClick4 = ()=>{
        setIsClick4(isClick4 =>{
            return isClick4 === false ? true : false
        })
    }
    const handleClick5 = ()=>{
        setIsClick5(isClick5 =>{
            return isClick5 === false ? true : false
        })
    }

    return (
        <div className='main-container'>
            <header className='cust-container'>
                <Navbar/>
                <Banner page='home'/>
            </header>
            <div className="cust-container" id="aboutServices">
                <img src="./img/lesti-kejora.svg" style={{width: 'clamp(252px, 70%, 459px)'}} alt=''/>
                <div className="about-services-desc">
                    <div style={{fontSize:'1.5rem', lineHeight: '2.25rem', margin: '0 0 0 0.5rem'}}>
                        Best Car Rental for any kind of trip in Tomioka!
                    </div>
                    <div style={{fontSize: '0.875rem', margin: '1rem 0'}}>
                        Sewa mobil di Tomioka bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.
                    </div>
                    <div style={{width: '100%'}}>
                        <ul style={{position: 'static', margin: '-0.5rem 0 0 0', paddingLeft: '0', fontSize: '0.875rem'}}>
                            <li>Sewa Mobil Dengan Supir di Tokyo 12 Jam</li>
                            <li>Sewa Mobil Lepas Kunci di Tokyo 24 Jam</li>
                            <li>Sewa Mobil Jangka Panjang Bulanan</li>
                            <li>Gratis Antar - Jemput Mobil di Bandara</li>
                            <li>Layanan Airport Transfer / Drop In Out</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='cust-container' id='whyUs'>
                <div className="why-us">
                    <p style={{fontSize: '1.5rem', margin: '0'}}>Why Us</p>
                    <p style={{fontSize: '0.875rem', margin: '1rem 0'}}>Mengapa harus pilih Binar Car Rental?</p>
                </div>
                <div className='inner'>
                    <Card type='benefit'/>
                </div>
            </div>
            <div className='cust-container' id='testimony'>
                <div>
                    <p style={{fontSize: '1.5rem'}}>Testimonial</p>
                    <p style={{fontSize: '0.875rem'}}>Berbagai review positif dari para pelanggan kami</p>
                </div>
                <Carousel/>
            </div>
            <div className="cust-container cta">
                <div className='cta-inner'>
                    <div className='cta-title'>
                        Sewa Mobil di Tomioka Sekarang
                    </div>
                    <div className='cta-subtitle'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </div>
                    <div><Button text='Mulai Sewa Mobil' location='/search' />
                    </div>
                </div>
            </div>
            <div className='cust-container' id='faq'>
                <div className='faq-head' style={{width:'clamp(20.5rem, 50%, 23rem)'}}>
                    <div style={{fontSize: '1.5rem'}}>Frequently Asked Question</div>
                    <div style={{fontSize: '0.875rem'}}>Lorem ipsum dolor sit amet, consectetur adipiscing</div>
                </div>
                <div className='q-list'>
                    <ul>
                        <li>
                            <div className='question'>
                                Apa saja syarat yang dibutuhkan?
                                <button onClick={handleClick1}>
                                    <img className='arrow-down' src='./img/fi_chevron-down.svg' 
                                    {...isClick1?{
                                        style:{
                                            transform: "rotate(-180deg)",transition: "transform 0.8s"
                                        }
                                    }:{
                                        style:{
                                            transition: "transform 0.8s"
                                        }}}/>
                                </button>
                            </div>
                            <div className={isClick1? "answer-active": "answer-inactive"}>kosong</div>
                        </li>
                        <li>
                            <div className='question'>
                                Berapa hari minimal sewa mobil lepas kunci?
                                <button onClick={handleClick2}>
                                    <img className='arrow-down' src='./img/fi_chevron-down.svg' 
                                    {...isClick2?{
                                        style:{
                                            transform: "rotate(-180deg)",transition: "transform 0.8s"
                                        }
                                    }:{
                                        style:{
                                            transition: "transform 0.8s"
                                        }}}/>
                                </button>
                            </div>
                            <div className={isClick2? "answer-active": "answer-inactive"}>kosong</div>
                        </li>
                        <li>
                            <div className='question'>
                                Berapa hari sebelumnya sabaiknya booking sewa mobil?
                                <button onClick={handleClick3}>
                                    <img className='arrow-down' src='./img/fi_chevron-down.svg' 
                                    {...isClick3?{
                                        style:{
                                            transform: "rotate(-180deg)",transition: "transform 0.8s"
                                        }
                                    }:{
                                        style:{
                                            transition: "transform 0.8s"
                                        }}}/>
                                </button>
                            </div>
                            <div className={isClick3? "answer-active": "answer-inactive"}>kosong</div>
                        </li>
                        <li>
                            <div className='question'>
                                Apakah ada biaya antar-jemput?
                                <button onClick={handleClick4}>
                                    <img className='arrow-down' src='./img/fi_chevron-down.svg' 
                                    {...isClick4?{
                                        style:{
                                            transform: "rotate(-180deg)",transition: "transform 0.8s"
                                        }
                                    }:{
                                        style:{
                                            transition: "transform 0.8s"
                                        }}}/>
                                </button>
                            </div>
                            <div className={isClick4? "answer-active": "answer-inactive"}>kosong</div>
                        </li>
                        <li>
                            <div className='question'>
                                Bagaimana jika terjadi kecelakaan?
                                <button onClick={handleClick5}>
                                    <img className='arrow-down' src='./img/fi_chevron-down.svg' 
                                    {...isClick5?{
                                        style:{
                                            transform: "rotate(-180deg)",transition: "transform 0.8s"
                                        }
                                    }:{
                                        style:{
                                            transition: "transform 0.8s"
                                        }}}/>
                                </button>
                            </div>
                            <div className={isClick5? "answer-active": "answer-inactive"}>kosong</div>
                        </li>
                    </ul>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Home