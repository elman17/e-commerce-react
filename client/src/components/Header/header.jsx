import React from 'react';
import Navigation from './Navigation/Navigation';
import Auth from './Navigation/Auth';
import Logo from './MainLogo';
//import {ReactComponent as TestIcon} from '../../assets/hero-4-png-picture (1).svg';

const Header = () => {
    return (
        <div className='bnavi flex flex-row justify-around gap-16  items-center text-white  h-[91px] left-[59px]'>
            <Logo />
            <Navigation />
            <Auth />
        </div>
    );
}

export default Header;
