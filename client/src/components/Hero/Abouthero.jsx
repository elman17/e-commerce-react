import React from 'react';
import Headerabout from '../Header/Headerabout';
import drink from '../../assets/drink.jpeg'


const Abouthero = () => {
    return (
        <div className="bg-white relative pl-8 pr-8" >
            <div className='w-full pl-5 pr-5 m-auto'>
                <Headerabout />
            </div>
            <div className='w-11/12 m-auto'>
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
                    <img src={drink} alt="" className=' mt-8' style={{ width: '39rem', height: '40rem' }} />
                </div>
            </div>

        </div>
    );
}

export default Abouthero;