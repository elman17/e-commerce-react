import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <nav>
            <ul className='flex flex-row justify-around gap-11'>
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

export default Navigation