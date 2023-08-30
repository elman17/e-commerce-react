import React from 'react'
import Headerabout from '../Header/Headerabout'
import Footer from '../Footer/footer'
import Face from '../../assets/Face.svg'

const Signup = () => {
    return (
        <div>
            <Headerabout />
            <div className=' flex flex-col gap-16 justify-center items-center mt-20 mb-32'>
                <div className='flex flex-col items-center text-center gap-4'>
                    <p className=' text-5xl font-semibold'>
                        Sign up for free
                    </p>
                    <p className=' text-lg'>
                        Try everything free for 30 days, no payment <br />
                        details required
                    </p>
                </div>
                <div className='flex flex-col items-center'>
                    <button className='bg-teal-700 rounded-md flex flex-row text-white w-96 h-14 items-center justify-center gap-2'>
                        <img src={Face} alt="" />
                        <p className=''>
                            Facebook
                        </p>
                    </button>
                    <div className='flex flex-row items-center justify-center mt-6 gap-3'>
                        <div className=' bg-gray-100 w-28 h-1 flex items-center'></div>
                        <p>
                            OR
                        </p>
                        <div className=' bg-gray-100 w-28 h-1 flex items-center'></div>
                    </div>
                    <div className='flex flex-col gap-6 mt-6 items-center'>
                        <div className='flex flex-col gap-2.5'>
                            <h2>
                                Name *
                            </h2>
                            <input type="text" name="Name" id="" placeholder='Full Name' className=' h-12 w-96 rounded-md pl-6 text-sm bg-gray-100 border border-gray-400 ' />
                        </div>
                        <div className='flex flex-col gap-2.5'>
                            <h2>
                                Email address *
                            </h2>
                            <input type='email' name="email" id="" placeholder='example@gmail.com' className=' h-12 w-96 rounded-md pl-6 text-sm bg-gray-100 border border-gray-400 ' />
                        </div>
                        <div className='flex flex-col gap-2.5 items-center'>
                            <div className='flex flex-col gap-2.5'>
                                <h2>
                                    Password *
                                </h2>
                                <input type="password" name="password" id="" placeholder='Password' className=' h-12 w-96 rounded-md pl-6 text-sm bg-gray-100 border border-gray-400 ' />
                            </div>
                            <button className=' bg-green-500 w-96 h-14 text-white rounded-md mt-6'>
                                Get Started
                            </button>
                            <p className=' text-xs text-left text-gray-500 mt-6'>
                                By filling in the form above and clicking the “Get Started” button, you <br />
                                accept and agree to Terms of Service and Privacy Policy.
                            </p>
                            <p className='flex flex-row gap-2.5 text-lg font-semibold'>
                                Already have an account?
                                <span className=' text-green-700'>
                                    Sign in
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Signup