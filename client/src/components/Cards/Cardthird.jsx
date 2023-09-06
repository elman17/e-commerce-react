import React, { useEffect, useState } from 'react';
import Green from '../../assets/Green.svg';
import Greensec from '../../assets/Greensec.svg';
import Orange from '../../assets/Orange.svg';
import Blue from '../../assets/Blue.svg';
import axios from 'axios';

const getData = async (setProducts) => {
    const url = `${import.meta.env.VITE_APP_STRAPI_BASE_URL}/api/products`;

    try {
        const { data } = await axios.get(url);
        setProducts(data.data);
    } catch (error) {
        console.error('Veri alınamadı:', error);
    }
};

const Cardthird = ({ product }) => {
    return (
        <div style={{ width: '23%' }} className='flex flex-col justify-between items-center text-center gap-2 m-1 pb-5 mb-9'>
            <img src={import.meta.env.VITE_APP_STRAPI_BASE_URL + product?.attributes?.thumbnail?.data?.attributes?.url} alt="" className='imgp bg-gray-100' />
            <p className="namep font-semibold text-md">
                {product?.attributes?.name}
            </p>
            <p className="categoryp text-sm font-normal text-gray-500">
                {product?.category}
            </p>
            <p className="pricep text-sm text-green-500 flex gap-2">
                <span className='text-gray-300'>$16.48</span>
                ${product?.attributes?.Price}
            </p>
            <div className='flex flex-row gap-2'>
                <img src={Green} alt="" />
                <img src={Greensec} alt="" />
                <img src={Orange} alt="" />
                <img src={Blue} alt="" />
            </div>
        </div>
    );
};

export default Cardthird;
