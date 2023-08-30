import React from 'react';
import Cream from '../../assets/Cream.svg';
import { Rate } from 'antd';
import Bggreensec from '../../assets/Bggreensec.svg';
import Bggree from '../../assets/Bggree.svg';
import Bgorange from '../../assets/Bgorange.svg';
import Bgblue from '../../assets/Bgblue.svg';
import Heart from '../../assets/Heart.svg'
import Baskett from '../../assets/Baskett.svg'
import Vision from '../../assets/Vision.svg'
import Flower from '../../assets/Flower.svg'
import Bestseller from '../Products/Bestseller';
import Service from '../Footer/Service';
import FooterSec from '../Footer/FooterSec';
import Right from '../../assets/Right.svg'


const CardInside = () => {
    return (
        <div className='flex flex-col gap-12'>
            <div className=' bg-gray-50'>
                <div>
                    <div className='flex flex-row gap-4 mt-6 mb-6 w-4/5 mx-auto pl-12 text-sm'>
                        <p>
                            Home
                        </p>
                        <img src={Right} alt="" />
                        <p className=' text-gray-400'>
                            Shop
                        </p>
                    </div>
                    <div className='flex flex-row justify-around'>
                        <img src={Cream} alt="" />
                        <div className='flex flex-col items-start gap-4'>
                            <p className=' text-5xl'>
                                Cream Contour
                            </p>
                            <div className="flex items-center gap-2">
                                <Rate />
                                <p className='text-gray-400'>
                                    10 Reviews
                                </p>
                            </div>
                            <div className="flex flex-col gap-9">
                                <div className=' flex flex-col'>
                                    <p className=' text-2xl font-bold'>
                                        $1,139.33
                                    </p>
                                    <div className="flex flex-row gap-2">
                                        <p>
                                            Availability  :
                                        </p>
                                        <p className='text-green-700'>
                                            In Stock
                                        </p>
                                    </div>
                                </div>
                                <p className=' text-base font-normal text-gray-300 max-w-md'>
                                    Met minim Mollie non desert Alamo est sit cliquey dolor
                                    do met sent. RELIT official consequent door ENIM RELIT Mollie.
                                    Excitation venial consequent sent nostrum met.
                                </p>
                            </div>
                            <div className='flex flex-col gap-9 mt-8'>
                                <div className='flex flex-row gap-2'>
                                    <img src={Bggreensec} alt="" />
                                    <img src={Bggree} alt="" />
                                    <img src={Bgorange} alt="" />
                                    <img src={Bgblue} alt="" />

                                </div>
                                <div className='flex flex-row justify-center items-center gap-5'>
                                    <button className='text-white bg-teal-600 rounded-md items-center p-2'>
                                        Select Options
                                    </button>
                                    <div className='flex flex-row gap-4 items-center'>
                                        <img src={Heart} alt="" />
                                        <img src={Baskett} alt="" />
                                        <img src={Vision} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-center gap-12'>
                <div className="flex flex-row gap-6 text-sm mx-auto text-gray-400">
                    <p className=' font-semibold'>
                        Description
                    </p>
                    <p>
                        Additional Information
                    </p>
                    <p>
                        Reviews
                    </p>
                </div>
                <div className='flex flex-row w-4/5 mx-auto gap-7'>
                    <div className='flex flex-col gap-8'>
                        <p className='text-2xl'>
                            the quick fox jumps over
                        </p>
                        <div className='flex flex-col gap-7 text-base text-gray-400 pr-44'>
                            <p>
                                Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                            </p>
                            <p>
                                Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                            </p>
                            <p>
                                Met minim Mollie non desert Alamo est sit cliquey dolor do met sent. RELIT official consequent door ENIM RELIT Mollie. Excitation venial consequent sent nostrum met.
                            </p>
                        </div>
                    </div>
                    <img src={Flower} alt="" />
                </div>
            </div>
            <div className=' bg-slate-100 pt-12 mt-8'>
                <Bestseller />
                <Service />
            </div>
            <FooterSec />
        </div>
    )
}

export default CardInside