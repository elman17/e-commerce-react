import React from 'react'
import Hooli from '../../assets/Hooli.svg'
import Lyft from '../../assets/Lyft.svg'
import Leaf from '../../assets/Leaf.svg'
import Stripe from '../../assets/Stripe.svg'
import Aws from '../../assets/Aws.svg'
import Reddit from '../../assets/Reddit.svg'

const Service = () => {
    return (
        <div className='bg-gray-100 w-full mt-20'>
            <div className='flex flex-row justify-between w-3/4 pt-12 pb-12 mx-auto'>
                <img src={Hooli} alt="" />
                <img src={Lyft} alt="" />
                <img src={Leaf} alt="" />
                <img src={Stripe} alt="" />
                <img src={Aws} alt="" />
                <img src={Reddit} alt="" />
            </div>
        </div>
    )
}

export default Service