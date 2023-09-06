import React from 'react'
import Phone from '../../assets/Phone.svg'
import Letter from '../../assets/Letter.svg'
import SocialIcon from '../Footer/SocialIcon'

const TopHead = () => {
    return (
        <div className='flex flex-row items-center justify-between gap-7 pl-48 pr-52 pt-4 pb-3 bg-teal-500 text-white'>
            <div className='flex flex-row gap-1.5 text-xs'>
                <img src={Phone} alt="" />
                <span>
                    (225) 555-0118
                </span>
            </div>
            <div className='flex flex-row gap-1.5 text-xs'>
                <img src={Letter} alt="" />
                <span>
                    michelle.rivera@example.com
                </span>
            </div>
            <div>
                <p className=' text-sm font-bold'>
                    Follow Us  and get a chance to win 80% off
                </p>
            </div>
            <div className='flex flex-row justify-between gap-4'>
                <p className=' text-sm font-bold'>
                    Follow us    :
                </p>
                <SocialIcon />
            </div>

        </div>

    )
}

export default TopHead