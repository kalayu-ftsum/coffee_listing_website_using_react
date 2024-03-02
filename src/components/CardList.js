import React from 'react';
import Card from './Card';

const CoffeeList=[{
    name:"Cappuccino",
    price:5.20,
    ratings:4.7,
    votes:65,
    isPopular:true
},
{
    name:"House Coffee",
    price:3.50,
    ratings:4.85,
    votes:14,
    isPopular:true
},
{
    name:"Espresso",
    price:2.50,
    ratings:4.9,
    votes:55,
    isPopular:false
},
{
    name:"Coffee Latte",
    price:4.50,
    ratings:5.0,
    votes:23,
    isPopular:false
},
{
    name:"Chocolate Coffee",
    price:4.00,
    ratings:4.65,
    votes:122,
    isPopular:false
},
{
    name:"Valentine Special",
    price:5.50,
    isPopular:false
}
]
export default function CardList() {
  return (<React.Fragment>
    {
        CoffeeList.map((coffee)=><Card coffee={coffee} key={coffee.name} />)
    }
    </React.Fragment>
  )
}
