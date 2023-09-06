import React from 'react'


const Cardsec = ({ product }) => {
    return (
        <div className='flex flex-col items-center gap-2 m-1 mb-1 pb-5 bg-gray-50' style={{ width: '24%' }}>
            <img src={import.meta.env.VITE_APP_STRAPI_BASE_URL + product?.attributes?.thumbnail?.data?.attributes?.url} alt="" className='imgp ' />
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
        </div>

    )
}

export default Cardsec