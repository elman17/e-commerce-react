import React from 'react'
import Cardp from '../Cards/Cardp'
import { getProducts } from '../api/product';
const getData = async (setValue) => {
    const { data } = await getProducts()
    setValue(data)
}

const Bestseller = () => {
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
        <div className='bsp w-2/3 m-auto flex flex-col gap-y-10 mt-28 justify-start'>
            <h2 className=' text-2xl font-semibold   text-black'>
                BESTSELLER PRODUCTS
            </h2>
            <div className='flex flex-wrap justify-between'>
                {products?.slice(0, 8)?.map(product => {
                    return <Cardp key={product.id} product={product} />
                })}
            </div>
        </div>
    )
}

export default Bestseller