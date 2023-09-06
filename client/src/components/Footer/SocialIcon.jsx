import React from 'react'
import facebook from '../../assets/facebook.svg'
import insta from '../../assets/insta.svg'
import twit from '../../assets/twit.svg'

const SocialIcon = () => {
    return (
        <div className='flex justify-between gap-4 items-start'>
            <img src={facebook} alt="" />
            <img src={insta} alt="" />
            <img src={twit} alt="" />
        </div>
    )
}

export default SocialIcon