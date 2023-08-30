import React from 'react'
import prodctsec from '../../assets/productsec.svg'

const Cardsec = () => {
    return (
        <div style={{ width: '23%' }} className='flex flex-col items-center gap-2 m-1 mb-1 pb-5'>
            <img src={prodctsec} alt="" className='imgp bg-gray-100' />
            <p className="namep font-semibold text-md">
                Body Spray
            </p>
            <p className="categoryp text-sm font-normal text-gray-500">
                Make Up
            </p>
            <p className="pricep text-sm text-green-500 flex gap-2">
                <span className='text-gray-300'>$16.48</span>
                $6.48
            </p>
        </div>

    )
}

export default Cardsec