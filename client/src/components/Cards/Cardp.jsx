import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Cardp = ({ product }) => {
    const navigate = useNavigate();

    return (
        <div
            onClick={() => navigate(`/product-details/${product?.id}`)}
            className='card bg-white border items-center rounded-lg shadow-lg hover:shadow-xl cursor-pointer p-4 flex flex-col justify-between gap-3 transition-transform duration-300 transform hover:scale-105'
            style={{ width: '23%' }}
        >
            <div className="img-container">
                <img
                    src={import.meta.env.VITE_APP_STRAPI_BASE_URL + product?.attributes?.thumbnail?.data?.attributes?.url}
                    alt={product?.attributes?.name}
                    className='imgp  rounded-lg transition-transform duration-300 transform hover:scale-110'
                />
            </div>
            <div className="info-container flex flex-col items-center justify-between gap-4">
                <p className="namep font-semibold text-md text-center">
                    {product?.attributes?.name}
                </p>
                <p className="categoryp text-sm font-normal text-gray-500 text-center">
                    {product?.category}
                </p>
                <p className="pricep text-sm text-green-500 text-center">
                    ${product?.attributes?.Price}
                </p>
            </div>
        </div>
    );
}

export default Cardp;




