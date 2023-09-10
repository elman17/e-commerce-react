import React from 'react'
import Cardsec from '../Cards/Cardsec'
import arrowleft from '../../assets/arrowleft.svg'
import arrowlefttt from '../../assets/arrowlefttt.svg'
import axios from 'axios'


const Bestsellersec = () => {
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
        <div className='bsp w-2/3 m-auto flex flex-col gap-y-10 justify-between'>
            <div className='flex flex-row justify-between'>
                <div className='flex flex-row gap-14'>
                    <h2 className=' text-2xl font-semibold   text-black'>
                        BESTSELLER PRODUCTS
                    </h2>
                    <div className=' flex flex-row gap-5 items-center text-sm text-gray-500'>
                        <p className=' text-green-700'>Men</p>
                        <p>Women</p>
                        <p>Accessories</p>
                    </div>
                </div>
                <div className='flex flex-row gap-4 max-h-10'>
                    <img src={arrowleft} alt="" />
                    <img src={arrowlefttt} alt="" />
                </div>
            </div>
            <div className=' bg-gray-200 h-0.5 '></div>
            <div className='flex flex-wrap justify-between'>
                {products?.slice(0, 16)?.map(product => {
                    return <Cardsec key={product.id} product={product} />
                })}
            </div>
        </div>
    )
}

export default Bestsellersec