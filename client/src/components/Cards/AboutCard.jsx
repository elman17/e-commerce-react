import React from 'react'
import background from '../../assets/background.svg'

const Aboutcard = () => {
    return (
        <div className='flex flex-row pt-14 pb-14' style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '510px' }}>
            <div className=' pl-10 w-1/2'>
                <p className='text-white text-m'>
                    Ends Today
                </p>
                <p className='text-white text-5xl w-1/2 ml-0'>
                    Elements Style
                </p>
                <p className='text-white text-sm underline-offset-3'>
                    Explore Items
                </p>
            </div>
            <div className=' w-1/2 m-16'>

            </div>
        </div>

    )
}

export default Aboutcard