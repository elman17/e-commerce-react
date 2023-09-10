import React from 'react'
import Flower from '../../assets/Flower.svg';


const Description = () => {
    return (
        <div className='flex flex-row w-4/5 mx-auto gap-7'>
            <div className='flex flex-col gap-8'>
                <p className='text-2xl'>the quick fox jumps over</p>
                <div className='flex flex-col gap-7 text-base text-gray-400 pr-44'>
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

export default Description