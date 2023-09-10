import React from 'react'
import Flower from '../../assets/Flower.svg';

const AdditionInfo = () => {
    return (
        <div className='flex flex-row w-4/5 mx-auto gap-7'>
            <div className='flex flex-col gap-8'>
                <p className='text-2xl'>the quick fox jumps over</p>
                <div className='flex flex-col gap-7 text-base text-gray-400 pr-44'>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Deleniti dicta dolores placeat, voluptate accusamus voluptatibus
                        nam veniam ratione laborum cumque explicabo. Molestias non quibusdam,
                        cupiditate id possimus ut odit delectus provident, natus quod in aliquid,
                    </p>
                    <p>
                        Met minim Mollie non desert Alamo est sit cliquey dolor do met
                        sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
                        venial consequent sent nostrum met.
                    </p>
                    <p>
                        Met minim Mollie non desert Alamo est sit cliquey dolor do met
                        sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
                        venial consequent sent nostrum met.
                    </p>
                </div>
            </div>
            <img src={Flower} alt='' />
        </div>
    )
}

export default AdditionInfo;
