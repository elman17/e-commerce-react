import React from 'react';
import Products from '../Products/Products'
import Filter from '../Cards/Filter';
import TopHead from '../Header/TopHead';
import NavigationSec from '../Header/Navigation/NavigationSec';
import Service from '../Footer/Service';
import FooterSec from '../Footer/FooterSec';
import { Pagination } from 'antd';
import Right from '../../assets/Right.svg';
import Cardcov from '../../assets/card-cover-5.svg';


const ProductList = () => {
    const [products, setProducts] = React.useState(null);

    React.useEffect(() => {
        const getData = async () => {
            const url = `${import.meta.env.VITE_APP_STRAPI_BASE_URL}/api/products/?populate=*`;

            try {
                const { data } = await axios.get(url)
                setProducts(data.data);
            } catch (error) {
                console.log('eror');
            }
        }

        getData()
    }, [])


    return (
        <div className='flex flex-col'>
            <TopHead />
            <NavigationSec />
            <div className='bg-gray-100 mb-12'>
                <div className='flex flex-row justify-between items-center pl-48 pr-48 pt-4 pb-4'>
                    <h3 className='font-bold text-2xl'>
                        Shop
                    </h3>
                    <div className='flex flex-row gap-3.5 text-sm'>
                        <p>
                            Home
                        </p>
                        <img src={Right} alt="" />
                        <p>
                            Shop
                        </p>
                    </div>
                </div>
                <div className='flex flex-row justify-between h-auto gap-4 pl-44 pb-12' style={{ width: '90%' }}>
                    <div className='flex flex-col items-center justify-center gap-5 text-white' style={{ backgroundImage: `url(${Cardcov})`, backgroundSize: 'cover', backgroundPosition: 'center', minWidth: '206px', minHeight: '223px', width: '23%' }}>
                        <p className='text-lg font-semibold'>
                            Make Up
                        </p>
                        <p className='items-center'>
                            5 Items
                        </p>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-5 text-white' style={{ backgroundImage: `url(${Cardcov})`, backgroundSize: 'cover', backgroundPosition: 'center', minWidth: '206px', minHeight: '223px', width: '23%' }}>
                        <p className='text-lg font-semibold'>
                            Make Up
                        </p>
                        <p className='items-center'>
                            5 Items
                        </p>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-5 text-white' style={{ backgroundImage: `url(${Cardcov})`, backgroundSize: 'cover', backgroundPosition: 'center', minWidth: '206px', minHeight: '223px', width: '23%' }}>
                        <p className='text-lg font-semibold'>
                            Make Up
                        </p>
                        <p className='items-center'>
                            5 Items
                        </p>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-5 text-white' style={{ backgroundImage: `url(${Cardcov})`, backgroundSize: 'cover', backgroundPosition: 'center', minWidth: '206px', minHeight: '223px', width: '23%' }}>
                        <p className='text-lg font-semibold'>
                            Make Up
                        </p>
                        <p className='items-center'>
                            5 Items
                        </p>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-5 text-white' style={{ backgroundImage: `url(${Cardcov})`, backgroundSize: 'cover', backgroundPosition: 'center', minWidth: '206px', minHeight: '223px', width: '23%' }}>
                        <p className='text-lg font-semibold'>
                            Make Up
                        </p>
                        <p className='items-center'>
                            5 Items
                        </p>
                    </div>
                </div>
            </div>
            <Filter />
            <div className=' mt-16'>
                <Products />
            </div>
            <div className=' flex items-center mx-auto mt-12'>
                <Pagination defaultCurrent={1} total={50} />
            </div>
            <div className='mx-auto w-full mb-12'>
                <Service />
            </div>
            <FooterSec />
        </div>
    );
}

export default ProductList;
