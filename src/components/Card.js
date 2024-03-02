import React from 'react';
import FilledStarSVG from '../assets/images/Star_fill.svg';
import EmptyStarSVG from '../assets/images/Star.svg';
export default function Card({coffee:{
  name,
  price,
  ratings,
  votes,
  isPopular
}}) {
  return (
    <div className='img'>
    <img 
    src='https://images.unsplash.com/photo-1585747733279-8f64c2b71381?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bGF0dGV8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
    alt="coffee -mug"
    />
    <div className='card_description'>
    <span className='product_name'>{name}</span>
    <span className='price_tag'>${price.toFixed(2)}</span>
    <span className='rating_tag'>
         <img src={ratings? FilledStarSVG: EmptyStarSVG} alt="My SVG" /> 
         {ratings}
         <span className="rating_count"> {ratings?`(${votes} votes)`: 'No ratings'}</span>
    </span>
    </div>
    {isPopular&&<span className='popular'>popular</span>}
</div>
  )
}
