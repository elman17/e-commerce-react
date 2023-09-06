import React from 'react'
import Abouthero from '../Hero/Abouthero'
import Video from '../../assets/Video.png'
import Usercard from '../Cards/Usercard'
import Service from '../Footer/Service'
import Human from '../../assets/Human.png'
import FooterSec from '../Footer/FooterSec'

const About = () => {
    return (
        <div>
            <Abouthero />
            <div className='flex flex-row w-3/5 justify-between mx-auto gap-14 items-center mt-6 mb-6'>
                <div>
                    <p className='text-red-600'>
                        Problems trying
                    </p>
                    <p className=' text-2xl w-96'>
                        Met minim Mollie non desert <br /> Alamo est sit cliquey dolor do met <br /> sent.
                    </p>
                </div>
                <p className='text-gray-500 w-3/5'>
                    Problems trying to resolve the conflict between the two major realms of <br /> Classical physics: Newtonian mechanics
                </p>
            </div>
            <div className='flex flex-row justify-between mx-auto w-3/5 pt-20 pb-20'>
                <span className=' text-7xl items-center'>
                    15K
                    <p className=' text-base'>
                        Monthly Visitors
                    </p>
                </span>
                <span className=' text-7xl text-center'>
                    150K
                    <p className=' text-base'>
                        Monthly Visitors
                    </p>
                </span>
                <span className=' text-7xl text-center'>
                    15
                    <p className=' text-base'>
                        Countries  Worldwide
                    </p>
                </span>
                <span className=' text-7xl text-center'>
                    100+
                    <p className=' text-base'>
                        Top Partners
                    </p>
                </span>
            </div>
            <div className=' m-auto'>
                <img src={Video} alt="" className=' mx-auto' />
            </div>
            <div>
                <div className='flex flex-col pt-28 gap-2.5'>
                    <p className='text-4xl font-bold mx-auto'>
                        Meet Our Team
                    </p>
                    <p className='mx-auto text-sm text-center text-gray-500'>
                        Problems trying to resolve the conflict between <br />
                        the two major realms of Classical physics: Newtonian mechanics
                    </p>
                </div>
                <div className='flex flex-row gap-7 justify-center pt-28 pb-28 w-2/3 m-auto'>
                    <div className=' mb-28'>
                        <Usercard />
                    </div>
                    <div>
                        <Usercard />
                    </div>
                    <div>
                        <Usercard />
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-center gap-7 text-center bg-gray-100 pb-20 pt-20'>
                <p className=' text-5xl'>
                    Big Companies Are Here
                </p>
                <p className=' text-gray-500'>
                    Problems trying to resolve the conflict between <br />
                    the two major realms of Classical physics: Newtonian mechanics
                </p>
                <Service />
            </div>
            <div className='flex flex-row w-full mb-16'>
                <div className='bg-blue-600 text-white w-3/4 flex flex-col justify-center pl-48 gap-6 pt-28'>
                    <p className=' text-lg'>
                        WORK WITH US
                    </p>
                    <p className=' text-5xl'>
                        Now Let’s grow Yours
                    </p>
                    <p className=' text-sm'>
                        The gradual accumulation of information about atomic and <br /> small-scale behavior during the first quarter of the 20th
                    </p>
                    <button className=' rounded-md text-white border border-gray-300 w-32 h-12 '>
                        Button
                    </button>
                </div>
                <img src={Human} alt="" />
            </div>
            <FooterSec />
        </div>
    )
}

export default About