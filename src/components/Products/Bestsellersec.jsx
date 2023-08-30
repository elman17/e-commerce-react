import React from 'react'
import Cardsec from '../Cards/Cardsec'

const Bestsellersec = () => {
    return (
        <div className='bsp w-2/3 m-auto flex flex-col gap-y-10 justify-start'>
            <h2 className=' text-2xl font-semibold   text-black'>
                BESTSELLER PRODUCTS
            </h2>
            <div className='flex flex-wrap justify-between'>
                <Cardsec />
                <Cardsec />
                <Cardsec />
                <Cardsec />
                <Cardsec />
                <Cardsec />
                <Cardsec />
                <Cardsec />
            </div>
        </div>
    )
}

export default Bestsellersec