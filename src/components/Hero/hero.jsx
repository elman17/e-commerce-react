import React from 'react';
import Header from '../Header/header';
import sekil from '../../assets/hero-4-png-picture (1).svg'
import icon from '../../assets/icon.png'

const Hero = () => {
    return (
        <div className="bg-gradient-to-r from-[#012155] to-[#335781] relative" >
            <Header />
            <div className="contentHero w-100 h-auto m-auto flex flex-row px-32 mx-auto gap-5 items-center">
                <div className="right text-white flex flex-col leading-5">
                    <p className="summer ext-lg font-bold pt-16 leading-tight tracking-wider text-left">
                        Summer 2020
                    </p>
                    <p className="description font-playfair-display w-2/3 text-7xl font-medium leading-tight tracking-wider text-left">
                        Make Your Skin Shine & Fresh
                    </p>
                    <p className="thirdtext pt-4 pb-6 text-base font-medium tracking-wider text-left leading-5 w-80" >
                        We know how large objects will act,
                        but things on a small scale.
                    </p>
                    <div className="readbtn pb-32">
                        <button className="readmore w-[153px] h-[52px] p-[15px 36px 15px 36px] rounded-[37px] border-[1px] gap-10">
                            Read More
                        </button>
                    </div>
                </div>
                <img src={sekil} alt="" />
                <div className=" w-10/12 bg-white job flex flex-row justify-center items-center m-auto gap-5 shadow-md bottom-0 absolute left-1/2 transform -translate-x-1/2 translate-y-1/2 pb-8 pt-8">
                    <div className="jobs flex flex-col items-center">
                        <img src={icon} alt="" />
                        <p className="security text-blue-900 text-2xl font-bold leading-9 tracking-tighter text-center">
                            Job Security
                        </p>
                        <p className="secabout text-gray-400 font-medium w-5/6 items-center text-center">
                            the quick fox jumps over the lazy dog
                        </p>
                    </div>
                    <div className="jobs flex flex-col items-center">
                        <img src={icon} alt="" />
                        <p className="security text-blue-900 text-2xl font-bold leading-9 tracking-tighter text-center">
                            Job Security
                        </p>
                        <p className="secabout text-gray-400 font-medium w-5/6 items-center text-center">
                            the quick fox jumps over the lazy dog
                        </p>
                    </div>
                    <div className="jobs flex flex-col items-center">
                        <img src={icon} alt="" />
                        <p className="security text-blue-900 text-2xl font-bold leading-9 tracking-tighter text-center">
                            Job Security
                        </p>
                        <p className="secabout text-gray-400 font-medium w-5/6 items-center text-center">
                            the quick fox jumps over the lazy dog
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Hero;
