import React from 'react'
import { Link } from 'react-router-dom';

const Navigationabout = () => {
    return (
        <nav>
            <ul className='flex flex-row justify-around gap-11 text-gray-400'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Productlist">Product</Link>
                </li>
                <li>
                    <Link to="/Pricing">Pricing</Link>
                </li>
                <li>
                    <Link to="/Contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigationabout