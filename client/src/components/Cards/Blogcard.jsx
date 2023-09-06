import React from 'react'
import Cosmetics from '../../assets/Cosmetics.jpeg'
import Clock from '../../assets/Clock.svg'
import Invest from '../../assets/Invest.svg'
import Next from '../../assets/Next.svg'

const Blogcard = () => {
    return (
        <div className='flex flex-col gap-2.5 shadow-lg' style={{ width: '32%' }}>
            <img src={Cosmetics} alt="" />
            <div className='flex flex-col gap-2.5 pr-6 pl-6 text-gray-400 pb-8'>
                <div className='flex flex-row gap-4 items-center text-sm'>
                    <p className='text-blue-200'>
                        Google
                    </p>
                    <p>
                        Trending
                    </p>
                    <p>
                        New
                    </p>
                </div>
                <p className=' text-xl text-blue-950'>
                    Loudest à la Madison #1 <br />(L'integral)
                </p>
                <p lassName=' text-sm'>
                    We focus on ergonomics and meeting <br />
                    you where you work. It's only a <br />
                    keystroke away.
                </p>
                <div className='flex flex-row justify-between pt-3.5 pb-3.5'>
                    <div className='flex flex-row gap-x-1.5'>
                        <img src={Clock} alt="" />
                        <span>22 April 2021</span>
                    </div>
                    <div className='flex flex-row gap-x-1.5'>
                        <img src={Invest} alt="" />
                        <span>10 comments</span>
                    </div>
                </div>
                <div className='flex flex-row gap-2.5 text-gray-500'>
                    <p>Learn More </p>
                    <img src={Next} alt="" />
                </div>
            </div>
        </div>
    )
}

export default Blogcard