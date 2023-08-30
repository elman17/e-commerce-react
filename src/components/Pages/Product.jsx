import React from 'react'
import TopHead from '../Header/TopHead'
import NavigationSec from '../Header/Navigation/NavigationSec'
import CardInside from '../Cards/CardInside'

const Product = () => {
    return (
        <div>
            <header>
                <TopHead />
                <NavigationSec />
            </header>
            <CardInside />
        </div>
    )
}

export default Product