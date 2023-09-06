import React from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';

const Cardp = ({ product }) => {
    const navigate = useNavigate()
    return (
        <div onClick={() => navigate(`/product-details/${product?.id}`)} className='card bg-gray-50 mt-9 flex flex-col justify-between gap-3 pt-10 px-4 pb-3 cursor-pointer' style={{ width: '23%' }}>
            <p className="namep font-semibold text-md text-center">
                {product?.attributes?.name}
            </p>
            <p className="categoryp text-sm font-normal text-gray-500">
                {product?.category}
            </p>
            <img src={import.meta.env.VITE_APP_STRAPI_BASE_URL + product?.attributes?.thumbnail?.data?.attributes?.url} alt="" className='imgp bg-gray-100' />
            <p className="pricep text-sm  text-green-500">
                ${product?.attributes?.Price}
            </p>
        </div>
    );
}

export default Cardp;
