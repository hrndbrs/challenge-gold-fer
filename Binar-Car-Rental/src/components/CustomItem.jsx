import React from 'react'

export const CustomItem = ({item}) => {
  return (
    <div className='custom-item'>
        <div></div>
        <img className='carousel-img' src={item.img} alt={item.name}/>
        <div className='carousel-detail'>
            <img src='./img/Rate.svg' style={{margin:'0'}}/>
            <div className='carousel-desc'>{item.testi}</div>
            <div className='user'>{item.name}, {item.age}, {item.loc}</div>
        </div>
    </div>
  )
}
