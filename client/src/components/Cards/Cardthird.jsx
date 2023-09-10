import React from 'react';
import { useNavigate } from 'react-router-dom';
import Green from '../../assets/Green.svg';
import Greensec from '../../assets/Greensec.svg';
import Orange from '../../assets/Orange.svg';
import Blue from '../../assets/Blue.svg';

const Cardthird = ({ product }) => {
    const navigate = useNavigate();

    return (
        <div
            onClick={() => navigate(`/product-details/${product?.id}`)}
            className='card bg-white border rounded-lg shadow-lg hover:shadow-xl cursor-pointer p-4 flex flex-col justify-between gap-3 transition-transform duration-300 transform hover:scale-105'
            style={{ width: '23%' }}
        >
            <div className="img-container">
                <img
                    src={import.meta.env.VITE_APP_STRAPI_BASE_URL + product?.attributes?.thumbnail?.data?.attributes?.url}
                    alt={product?.attributes?.name}
                    className='imgp rounded-lg transition-transform duration-300 transform hover:scale-110'
                />
            </div>
            <div className="info-container text-center">
                <p className="namep font-semibold text-md">
                    {product?.attributes?.name}
                </p>
                <p className="categoryp text-sm font-normal text-gray-500">
                    {product?.attributes?.category}
                </p>
                <p className="pricep text-sm text-green-500">
                    <span className='text-gray-300 line-through mr-2'>$16.48</span>
                    ${product?.attributes?.Price}
                </p>
            </div>
            <div className='flex flex-row gap-2 justify-center'>
                <img src={Green} alt="" />
                <img src={Greensec} alt="" />
                <img src={Orange} alt="" />
                <img src={Blue} alt="" />
            </div>
        </div>
    );
};

export default Cardthird;

