import React from 'react'
import Headerabout from '../Header/Headerabout'
import Usercard from '../Cards/Usercard'
import SocialIcon from '../Footer/SocialIcon'
import FooterSec from '../Footer/FooterSec'
import Right from '../../assets/Right.svg'
import Woman from '../../assets/Woman.png'
import Woman1 from '../../assets/Woman1.png'
import Woman2 from '../../assets/Woman2.png'
import Woman3 from '../../assets/Woman3.png'
import Woman4 from '../../assets/Woman4.png'

const Team = () => {
    return (
        <div className='flex flex-col items-center gap-20'>
            <Headerabout />
            <div className=' flex flex-col items-center gap-4'>
                <p>
                    WHAT WE DO
                </p>
                <p className=' text-7xl'>
                    Innovation tailored for you
                </p>
                <div className='flex flex-row gap-3.5'>
                    <p>
                        Home
                    </p>
                    <img src={Right} alt="" />
                    <p className='text-gray-500'>
                        Team
                    </p>
                </div>
            </div>
            <div className='pl-28 w-full'>
                <div className='flex flex-row gap-4'>
                    <img src={Woman} alt="" className='w-1/2' />
                    <div className='flex flex-row flex-wrap  gap-4 w-full'>
                        <img src={Woman1} alt="" className='w-5/12' />
                        <img src={Woman2} alt="" className='w-5/12' />
                        <img src={Woman3} alt="" className='w-5/12' />
                        <img src={Woman4} alt="" className='w-5/12' />
                    </div>
                </div>
            </div>
            <div className='w-4/5 flex flex-col justify-center gap-28 mt-8'>
                <p className=' text-4xl flex justify-center'>
                    Meet Our Team
                </p>
                <div className='flex flex-col  gap-8 justify-center'>
                    <div className='flex flex-wrap justify-center gap-8  mb-28'>
                        <Usercard />
                        <Usercard />
                        <Usercard />
                    </div>
                    <div className='flex flex-wrap justify-center gap-8 mb-28'>
                        <Usercard />
                        <Usercard />
                        <Usercard />
                    </div>
                    <div className='flex flex-wrap justify-center gap-8 mb-28'>
                        <Usercard />
                        <Usercard />
                        <Usercard />
                    </div>
                </div>
            </div>
            <div className='flex flex-col gap-7 justify-center items-center'>
                <p className=' text-4xl text-center'>
                    Start your 14 days free trial
                </p>
                <p className=' text-center text-gray-500'>
                    Met minim Mollie non desert Alamo est sit cliquey dolor <br />
                    do met sent. RELIT official consequent.
                </p>
                <button className=' bg-teal-600 w-44 h-12 text-white rounded-md'>
                    Try it free now
                </button>
                <SocialIcon />
            </div>
            <FooterSec />
        </div>
    )
}

export default Team