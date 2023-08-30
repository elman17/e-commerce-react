import React from 'react'
import secabout from '../../assets/secabout.png'

const Aboutsec = () => {
    return (
        <div className='flex flex-row w-full pb-5' style={{ backgroundImage: `url(${secabout})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className=' w-1/2 m-16'></div>
            <div className=' flex flex-col justify-center pb-16 pt-16 pl-8'>
                <p className='text-white text-xs pl-5'>
                    Ends Today
                </p>
                <p className='text-white  w-1/2 text-2xl pr-5'>
                    Cosmetic
                </p>
                <p className='text-white pr-5'>
                    Explore Items
                </p>
            </div>
        </div>
    )
}

export default Aboutsec