import React from 'react'
import Contacthero from '../Hero/Contacthero'
import FooterSec from '../Footer/FooterSec'
import Phoneb from '../../assets/Phoneb.svg'
import Location from '../../assets/Location.svg'
import Letterbg from '../../assets/Letterbg.svg'
import Arrow from '../../assets/Arrow.svg'

const Contact = () => {
    return (
        <div>
            <Contacthero />
            <div className='flex flex-col items-center text-center mb-16'>
                <p className=' text-sm'>
                    VISIT OUR OFFICE
                </p>
                <p className=' text-5xl leading-tight font-normal opacity-80'>
                    We help small businesses <br />
                    with big ideas
                </p>
                <div className='flex flex-wrap mt-20'>
                    <div className='flex flex-col gap-4 pb-12 pt-20 items-center'>
                        <img src={Phoneb} alt="" className=' pl-28 pr-28' />
                        <div className='text-sm font-semibold'>
                            <p>
                                georgia.young@example.com
                            </p>
                            <p>
                                georgia.young@ple.com
                            </p>
                        </div>
                        <p className=' font-bold'>
                            Get Support
                        </p>
                        <button className='border-2 border-teal-700 rounded-3xl font-bold  text-teal-700 w-48 h-12'>
                            Submit Request
                        </button>
                    </div>
                    <div className='flex flex-col gap-4 bg-blue-950 text-white  pt-20 pb-20 items-center'>
                        <img src={Location} alt="" className=' pl-28 pr-28' />
                        <div className='text-sm font-semibold'>
                            <p>
                                georgia.young@example.com
                            </p>
                            <p>
                                georgia.young@ple.com
                            </p>
                        </div>
                        <p className=' font-bold'>
                            Get Support
                        </p>
                        <button className='border-2 border-teal-700 rounded-3xl font-bold  text-teal-700 w-48 h-12'>
                            Submit Request
                        </button>
                    </div>
                    <div className='flex flex-col gap-4 pb-12 pt-20 items-center'>
                        <img src={Letterbg} alt="" className=' pl-28 pr-28' />
                        <div className='text-sm font-semibold'>
                            <p>
                                georgia.young@example.com
                            </p>
                            <p>
                                georgia.young@ple.com
                            </p>
                        </div>
                        <p className=' font-bold'>
                            Get Support
                        </p>
                        <button className='border-2 border-teal-700 rounded-3xl font-bold  text-teal-700 w-48 h-12'>
                            Submit Request
                        </button>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-center gap-4 mb-20'>
                <img src={Arrow} alt="" />
                <p className='text-blue-950 font-bold'>
                    WE Can't WAIT TO MEET YOU
                </p>
                <p className='text-8xl text-blue-950'>
                    Let’s Talk
                </p>
                <button className='text-white bg-teal-700 rounded-md w-44 h-12'>
                    Try it free now
                </button>
            </div>
            <FooterSec />
        </div>
    )
}

export default Contact