import React from 'react'
import './main.css'
import CardList from './CardList'
import MainHeader from './MainHeader'
import Buttons from './Buttons'

export default function Main() {
    return (
        <main className='main'>
            <div className='container'>
                <MainHeader />
                <section className='main__list'>
                    <div className='list__actions'>
                       <Buttons className='btn btn__primary' text="All Products" />
                       <Buttons className='btn btn__secondary' text="Available Now" />
                    </div>
                 <div className='img__list'>
                 <CardList />
                 </div>
                </section>
            </div>
        </main>
    )
}
