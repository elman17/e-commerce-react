import React, { useEffect, useState } from 'react';
import Cardthird from '../Cards/Cardthird'
import axios from 'axios';
import { getProducts } from '../api/product';

const getData = async (setValue) => {
    const { data } = await getProducts()
    setValue(data)
}


const Products = () => {
    const [products, setProducts] = React.useState(null);

    React.useEffect(() => {
        // const getData = async () => {
        //     const url = `${import.meta.env.VITE_APP_STRAPI_BASE_URL}/api/products/?populate=*`;

        //     try {
        //         const { data } = await axios.get(url)
        //         setProducts(data.data);
        //     } catch (error) {
        //         console.log('eror');
        //     }
        // }
        getData(setProducts)
    }, [])
    return (
        <div className='bsp w-full m-auto flex flex-col gap-y-10 justify-around pl-44 pr-44'>
            <div className='flex flex-wrap justify-between gap-y-12'>
                {products?.slice(0, 20)?.map((product) => (
                    <Cardthird key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Products;