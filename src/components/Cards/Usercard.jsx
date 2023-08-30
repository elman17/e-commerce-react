import React from 'react'
import User from '../../assets/User.png'
import SocialIcon from '../Footer/SocialIcon'

const Usercard = () => {
    return (
        <div>
            <img src={User} alt="" />
            <div className='flex flex-col items-center gap-2.5'>
                <p>
                    Username
                </p>
                <p className=' text-sm'>
                    Profession
                </p>
                <SocialIcon />
            </div>
        </div>
    )
}

export default Usercard;