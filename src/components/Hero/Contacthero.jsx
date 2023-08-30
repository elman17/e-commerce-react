import React from 'react';
import Headerabout from '../Header/Headerabout';
import Freshh from '../../assets/Freshh.png'
import SocialIcon from '../Footer/SocialIcon';

const Contacthero = () => {
    return (
        <div className="bg-white relative" >
            <Headerabout />
            <div className='w-full m-auto'>
                <div className="contenthero w-100 h-auto  flex flex-row gap-8 justify-around">
                    <div className="right flex flex-col gap-10 leading-5 pt-24">
                        <p className="summer ext-lg font-bold pt-16 leading-tight tracking-wider text-left">
                            CONTACT US
                        </p>
                        <p className="description font-playfair-display text-7xl font-medium  text-left">
                            Get in touch <br /> today!
                        </p>
                        <p className=" text-xl text-gray-500 max-w-sm" >
                            We know how large objects will act,
                            but things on a small scale
                        </p>
                        <div className="readbtn pb-32 flex flex-col gap-8">
                            <div className=' text-2xl text-blue-950 flex flex-col gap-2'>
                                <p>
                                    Phone ; +451 215 215
                                </p>
                                <p>
                                    Fax : +451 215 215
                                </p>
                            </div>
                            <div className=' w-24'>
                                <SocialIcon />
                            </div>
                        </div>
                    </div>
                    <img src={Freshh} alt="" />
                </div>
            </div>

        </div>
    );
}

export default Contacthero;