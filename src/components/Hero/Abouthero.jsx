import React from 'react';
import Headerabout from '../Header/Headerabout';
import Freshh from '../../assets/Freshh.png'

const Abouthero = () => {
    return (
        <div className="bg-white relative" >
            <Headerabout />
            <div className='w-full m-auto'>
                <div className="contenthero w-100 h-auto  flex flex-row gap-8 justify-around">
                    <div className="right flex flex-col gap-10 leading-5 pt-24">
                        <p className="summer ext-lg font-bold pt-16 leading-tight tracking-wider text-left">
                            ABOUT COMPANY
                        </p>
                        <p className="description font-playfair-display text-7xl font-medium  text-left">
                            ABOUT US
                        </p>
                        <p className=" text-xl text-gray-500 max-w-sm" >
                            We know how large objects will act,
                            but things on a small scale
                        </p>
                        <div className="readbtn pb-32">
                            <button className="readmore bg-teal-600 text-white w-[153px] h-[52px] p-[15px 36px 15px 36px] rounded-lg border-[1px] gap-10">
                                Get Quote Now
                            </button>
                        </div>
                    </div>
                    <img src={Freshh} alt="" />
                </div>
            </div>

        </div>
    );
}

export default Abouthero;