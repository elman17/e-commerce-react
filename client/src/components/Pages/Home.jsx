import React from 'react'
import Hero from '../Hero/hero'
import Bestseller from '../Product/Bestseller'
import Aboutcard from '../Cards/aboutcard'
import Footer from '../Footer/footer'
import Bestsellersec from '../Product/Bestsellersec'
import Aboutsec from '../Cards/Aboutsec'



const Home = () => {
    return (
        <div className='flex flex-col items-center gap-28'>
            <Hero />
            <Bestseller />
            <div className='flex flex-row justify-between gap-7'>
                <Aboutcard />
                <Aboutcard />
            </div>
            <Bestsellersec />
            <div className='flex flex-row  gap-3 m-auto'>
                <Aboutsec />
                <Aboutsec />
                <Aboutsec />
            </div>
            <Footer />

        </div>
    )
}

export default Home