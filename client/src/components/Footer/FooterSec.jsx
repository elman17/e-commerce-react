import React from 'react'
import MainLogo from '../Header/MainLogo'
import SocialIcon from './SocialIcon'


const FooterSec = () => {
    return (
        <footer className=' w-full bg-white flex flex-col gap-12'>
            <div className=' pl-12 pr-12'>
                <div className='flex flex-col gap-10'>
                    <div className='flex justify-between w-11/12 pl-3 pr-6 m-auto'>
                        <MainLogo />
                        <SocialIcon />
                    </div>
                    <hr className=' w-11/12 m-auto' />
                </div>
                <div className='flex flex-row justify-around mt-12 mb-12'>
                    <div className='flex flex-col gap-6'>
                        <p>
                            Company Info
                        </p>
                        <ul className=' font-light gap-2.5 flex flex-col text-gray-600'>
                            <li>About Us</li>
                            <li>Carrier</li>
                            <li>We are hiring</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <p>
                            Legal
                        </p>
                        <ul className=' font-light gap-2.5 flex flex-col text-gray-600'>
                            <li>About Us</li>
                            <li>Carrier</li>
                            <li>We are hiring</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <p>
                            Features
                        </p>
                        <ul className=' font-light gap-2.5 flex flex-col text-gray-600'>
                            <li>Business Marketing</li>
                            <li>User Analytic</li>
                            <li>Live Chat</li>
                            <li>Unlimited Support</li>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-6'>
                        <p>
                            Resources
                        </p>
                        <ul className=' font-light gap-2.5 flex flex-col text-gray-600'>
                            <li>IOS & Android</li>
                            <li>Watch a Demo</li>
                            <li>Customers</li>
                            <li>API</li>
                        </ul>
                    </div>
                    <div>
                        <p className='mb-5'>Get In Touch</p>
                        <div className='flex flex-row h-10 rounded-6xl'>
                            <input type="email" name="" id="" placeholder='Your Email' className=' bg-gray-100 flex justify-center pl-3 rounded-md' />
                            <button className=' bg-teal-700 text-white rounded-md pl-2 pr-2'>
                                Subscribe
                            </button>
                        </div>
                        <p className='mt-2 text-xs'>
                            Lore imp sum dolor Amit
                        </p>
                    </div>
                </div>
            </div>

            <div className='pl-16 pt-8 pb-8 bg-gray-100'>
                <p className=' pl-12'>
                    Made With Love By Finland All Right Reserved
                </p>
            </div>
        </footer>
    )
}

export default FooterSec