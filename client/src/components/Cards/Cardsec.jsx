import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Cardsec = ({ product }) => {
    const navigate = useNavigate();

    return (
        <div
            onClick={() => navigate(`/product-details/${product?.id}`)}
            className='flex flex-col items-center justify-between gap-2 m-1 mb-4 p-4 bg-white border rounded-lg shadow-lg hover:shadow-xl cursor-pointer transition-transform transform hover:scale-105'
            style={{ width: '23%' }}
        >
            <div className="img-container">
                <img
                    src={import.meta.env.VITE_APP_STRAPI_BASE_URL + product?.attributes?.thumbnail?.data?.attributes?.url}
                    alt={product?.attributes?.name}
                    className='imgp  rounded-lg transition-transform duration-300 transform hover:scale-110'
                />
            </div>
            <p className="namep font-semibold text-md mt-2 text-center">
                {product?.attributes?.name}
            </p>
            <p className="categoryp text-sm font-normal text-gray-500 text-center mt-2">
                {product?.category}
            </p>
            <p className="pricep text-sm text-green-500 text-center mt-2 flex gap-2">
                <span className='text-gray-300'>$16.48</span>
                ${product?.attributes?.Price}
            </p>
        </div>
    );
};

export default Cardsec;


