import React from 'react'
import MainLogo from '../Header/MainLogo'
import facebook from '../../assets/facebook.svg'
import insta from '../../assets/insta.svg'
import twit from '../../assets/twit.svg'
import SocialIcon from './SocialIcon'


const Footer = () => {
    return (
        <footer className=' w-full bg-blue-950 text-white px-12 py-12 flex flex-col gap-12'>
            <div className='flex flex-col gap-10'>
                <div className='flex justify-between w-5/6 m-auto'>
                    <MainLogo />
                    <SocialIcon />
                </div>
                <hr className='w-5/6 m-auto' />
            </div>
            <div className='flex flex-row justify-around'>
                <div className='flex flex-col gap-4'>
                    <p>
                        Company Info
                    </p>
                    <ul className=' font-thin'>
                        <li>About Us</li>
                        <li>Carrier</li>
                        <li>We are hiring</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div className='flex flex-col gap-4'>
                    <p>
                        Legal
                    </p>
                    <ul className=' font-thin'>
                        <li>About Us</li>
                        <li>Carrier</li>
                        <li>We are hiring</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div className='flex flex-col gap-4'>
                    <p>
                        Features
                    </p>
                    <ul className=' font-thin'>
                        <li>Business Marketing</li>
                        <li>User Analytic</li>
                        <li>Live Chat</li>
                        <li>Unlimited Support</li>
                    </ul>
                </div>
                <div className='flex flex-col gap-4'>
                    <p>
                        Resources
                    </p>
                    <ul className=' font-thin'>
                        <li>IOS & Android</li>
                        <li>Watch a Demo</li>
                        <li>Customers</li>
                        <li>API</li>
                    </ul>
                </div>
                <div>
                    <p className='mb-5'>Get In Touch</p>
                    <div className='flex flex-row h-10 rounded-6xl'>
                        <input type="email" name="" id="" placeholder='Your Email' />
                        <button className=' bg-green-800 text-white'>
                            Subscribe
                        </button>
                    </div>
                    <p className='mt-2 text-xs'>
                        Lore imp sum dolor Amit
                    </p>
                </div>
            </div>
            <div className='pl-16 pt-12 pb-3'>
                <p>
                    Made With Love By Finland All Right Reserved
                </p>
            </div>
        </footer>
    )
}

export default Footer