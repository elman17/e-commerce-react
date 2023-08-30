import React from 'react'
import Photo from '../../assets/photo.svg'
const Cardp = () => {
    return (
        <div className='card w-12/3 bg-gray-100 m-1 flex flex-col gap-3 pt-10 px-4 pb-3'>
            <p className="namep font-semibold text-md">
                Body Spray
            </p>
            <p className="categoryp text-sm font-normal text-gray-500">
                Make Up
            </p>
            <img src={Photo} alt="" className='imgp bg-gray-100' />
            <p className="pricep text-sm  text-green-500">
                $6.48
            </p>

        </div>
    )
}

export default Cardp