import React from 'react'

const Wide = () => {
    return (
        <div className=' bg-blue-600 flex flex-row justify-between items-center text-white mt-48 pt-20 pb-20 pl-48 pr-48'>
            <div className='flex flex-col gap-8'>
                <p className=' text-5xl'>
                    Subscribe For Latest Newsletter
                </p>
                <p>
                    The gradual accumulation of information about atomic and <br />
                    small-scale behavior during the first quarter of the 20th
                </p>
            </div>
            <button className='bg-teal-700 text-white pl-10 pr-10 h-14 rounded-md items-center'>
                Get Started
            </button>
        </div>
    )
}

export default Wide