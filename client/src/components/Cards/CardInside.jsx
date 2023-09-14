import React, { useEffect, useState } from 'react';
import Description from './Description';
import AdditionInfo from './AdditonInfo';
import Review from '../../Layout/Review';
import { Rate } from 'antd';
import Bggreensec from '../../assets/Bggreensec.svg';
import Bggree from '../../assets/Bggree.svg';
import Bgorange from '../../assets/Bgorange.svg';
import Bgblue from '../../assets/Bgblue.svg';
import Heart from '../../assets/Heart.svg';
import Baskett from '../../assets/Baskett.svg';
import Vision from '../../assets/Vision.svg';
import Bestseller from '../Product/Bestseller';
import Service from '../Footer/Service';
import FooterSec from '../Footer/FooterSec';
import Right from '../../assets/Right.svg';
import { useParams } from 'react-router-dom';
import { getProductByID } from '../api/product';
import Slider from '../../components/Slider/Slider';
const getData = async (id, setValue) => {
    const { data } = await getProductByID(id);
    setValue(data);
};

const getImages = (data) => {
    let initData = data?.data;
    initData = initData?.map((el) => {
        return { src: `${import.meta.env.VITE_APP_STRAPI_BASE_URL}${el.attributes.url}` };
    });
    return initData;
};

const CardInside = () => {
    const { id } = useParams();
    const [activeTab, setActiveTab] = useState('Description');
    const [product, setProduct] = React.useState({});
    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    useEffect(() => {
        getData(id, setProduct);
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    }, [id]);

    return (
        <div className='flex flex-col gap-12'>
            <div className='bg-gray-50'>
                <div>
                    <div className='flex flex-row gap-4 mt-6 mb-6 w-4/5 mx-auto pl-12 text-sm'>
                        <p>Home</p>
                        <img src={Right} alt='' />
                        <p className='text-gray-400'>Shop</p>
                    </div>
                    <div className='flex flex-row justify-around prudct2'>
                        <Slider images={getImages(product?.attributes?.Images)} />
                        <div className='flex flex-col items-start gap-4'>
                            <p className='text-5xl'>{product?.attributes?.name}</p>
                            <div className='flex items-center gap-2'>
                                <Rate />
                                <p className='text-gray-400'>10 Reviews</p>
                            </div>
                            <div className='flex flex-col gap-9'>
                                <div className='flex flex-col'>
                                    <p className='text-2xl font-bold'>${product?.attributes?.Price}</p>
                                    <div className='flex flex-row gap-2'>
                                        <p>Availability :</p>
                                        <p className='text-green-700'>In Stock</p>
                                    </div>
                                </div>
                                <p className='text-base font-normal text-gray-300 max-w-md'>
                                    Met minim Mollie non desert Alamo est sit cliquey dolor do met
                                    sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
                                    venial consequent sent nostrum met.
                                </p>
                            </div>
                            <div className='flex flex-col gap-9 mt-8'>
                                <div className='flex flex-row gap-2'>
                                    <img src={Bggreensec} alt='' />
                                    <img src={Bggree} alt='' />
                                    <img src={Bgorange} alt='' />
                                    <img src={Bgblue} alt='' />
                                </div>
                                <div className='flex flex-row justify-center items-center gap-5'>
                                    <button className='text-white bg-teal-600 rounded-md items-center p-2'>
                                        Add to Baskett
                                    </button>
                                    <div className='flex flex-row gap-4 items-center'>
                                        <img src={Heart} alt='' />
                                        <img src={Baskett} alt='' />
                                        <img src={Vision} alt='' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-center gap-12'>
                <div className='flex flex-row gap-6 text-sm mx-auto text-gray-400'>
                    <p
                        className={`font-semibold cursor-pointer ${activeTab === 'Description' ? 'text-base font-semibold' : ''
                            }`}
                        onClick={() => handleTabClick('Description')}
                    >
                        Description
                    </p>
                    <p
                        className={`cursor-pointer ${activeTab === 'Additional Information'
                            ? 'text-base font-semibold'
                            : ''
                            }`}
                        onClick={() => handleTabClick('Additional Information')}
                    >
                        Additional Information
                    </p>
                    <p
                        className={`cursor-pointer ${activeTab === 'Reviews' ? 'text-base font-semibold' : ''
                            }`}
                        onClick={() => handleTabClick('Reviews')}
                    >
                        Reviews
                    </p>
                </div>
                <div className='bg-gray-100 w-10/12 h-0.5'></div>
                {activeTab === 'Description' ? <Description /> : null}
                {activeTab === 'Additional Information' ? <AdditionInfo /> : null}
                {activeTab === 'Reviews' ? <Review /> : null}
            </div>
            <div className=' bg-slate-100 pt-12 mt-8'>
                <Bestseller />
                <Service />
            </div>
            <FooterSec />
        </div>
    );
};

export default CardInside;
