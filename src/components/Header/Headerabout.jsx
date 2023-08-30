import React from 'react'
import Navigationabout from './Navigation/Navigationabout'


const Headerabout = () => {
    return (
        <div className='bnavi flex flex-row justify-around  items-center w-full h-14 pt-16'>
            <div>
                <p className=' text-black text-2xl font-semibold'>
                    Logo
                </p>
            </div>
            <Navigationabout />
            <div className="login flex flex-row justify-around gap-11">
                <button className="log text-teal-700 text-base">
                    Login
                </button>
                <button className="become bg-teal-700 text-white p-4 rounded-lg">
                    Become a member
                    <span>
                        ≥≥≥≥≥≥
                    </span>
                </button>
            </div>
        </div>
    );
}

export default Headerabout;