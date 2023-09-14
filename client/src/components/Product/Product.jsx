import React from 'react';
import Cardthird from '../Cards/Cardthird'


const Products = ({ products }) => {
    return (
        <div className='bsp w-full m-auto flex flex-col gap-y-10 justify-around pl-44 pr-44'>
            <div className='flex flex-wrap justify-between gap-y-12'>
                {products?.map((product) => (
                    <Cardthird key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Products;