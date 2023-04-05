import React, {useState} from 'react'
import {CustomItem} from './CustomItem'

function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const items = [
        {
            id: '1',
            name: 'John Dee',
            age: '32',
            loc : 'Bromo', 
            testi: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod', 
            img: './img/testi1.png'
        },{
            id: '2',
            name: 'John Dee',
            age: '32',
            loc : 'Bromo', 
            testi: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod', 
            img: './img/testi2.png'
        },{
            id: '3',
            name: 'John Dee',
            age: '32',
            loc : 'Bromo', 
            testi: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod', 
            img: './img/testi3.png'
           },
        
     ]

     const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = 0
        } else if (newIndex >= items.length) {
            newIndex = items.length - 1
        } 

        setCurrentIndex(newIndex)
     }

     root.style.setProperty('--index', currentIndex)

    return (
    <div className='cust-carousel'>
        <div 
        className='cust-carousel-inner'>
            {items.map((item) => {
                return <CustomItem key={item.id} item={item}/>
            })}
        </div>
        <div className='carousel-buttons'>
            <button onClick={()=>{
                updateIndex(currentIndex - 1)
            }} className={currentIndex==0? "button-arrow-inactive": "button-arrow-active"}>
                <img src='./img/chevron_left.svg'/>
            </button>
            <button onClick={()=>{
                updateIndex(currentIndex + 1)
            }}className={currentIndex==items.length-1? "button-arrow-inactive" : "button-arrow-active"}>
                <img src='./img/chevron_right.svg'/>
            </button>   
        </div>
    </div>
    )
}

export default Carousel