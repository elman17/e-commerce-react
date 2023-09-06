import React from 'react'
import Headerabout from '../Header/Headerabout'
import Blogcard from '../Cards/Blogcard'
import Right from '../../assets/Right.svg'
import Wide from '../Cards/Wide'
import Footer from '../Footer/footer'

const Blog = () => {
    return (
        <div>
            <Headerabout />
            <div className='flex flex-col gap-4 items-center mt-28'>
                <p className=' text-lg text-blue-950'>
                    LEARN WITH US
                </p>
                <p className=' text-8xl text-blue-950'>
                    The Blog
                </p>
                <div className='flex flex-row gap-4 text-sm'>
                    <p>
                        Home
                    </p>
                    <img src={Right} alt="" />
                    <p className=' text-gray-400'>
                        Blog
                    </p>
                </div>
            </div>
            <div className='flex flex-wrap m-auto gap-x-4 gap-y-20 w-2/3 pt-28 mt-12'>
                <Blogcard />
                <Blogcard />
                <Blogcard />
                <Blogcard />
                <Blogcard />
                <Blogcard />
            </div>
            <Wide />
            <Footer />
        </div>
    )
}

export default Blog