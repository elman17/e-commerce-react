import React from 'react'
import MainLogo from '../MainLogo'
import Profile from '../../../assets/Profile.svg'
import Search from '../../../assets/Search.svg'
import Basket from '../../../assets/Basket.svg'
import Wish from '../../../assets/Wish.svg'
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Menu } from 'antd';



const NavigationSec = () => {
    const menuItems = [
        { label: '1st menu item', key: '0', href: 'https://www.antgroup.com' },
        { label: '2nd menu item', key: '1', href: 'https://www.aliyun.com' },
        { type: 'divider' },
        { label: '3rd menu item', key: '3' },
    ];

    const menu = (
        <Menu>
            {menuItems.map(item => {
                if (item.type === 'divider') {
                    return <Menu.Divider key={item.key} />;
                }
                return (
                    <Menu.Item key={item.key}>
                        <a href={item.href}>{item.label}</a>
                    </Menu.Item>
                );
            })}
        </Menu>
    );

    return (
        <div>
            <div className='flex flex-row justify-between items-center pl-48 pr-48 pt-4 pb-4'>
                <MainLogo />
                <ul className='flex flex-row justify-between gap-6 font-light text-gray-500'>
                    <li>Home</li>
                    <li className=' font-semibold text-blue-900'>
                        <Dropdown overlay={menu} trigger={['click']}>
                            <a href="#" onClick={e => e.preventDefault()}>
                                Shop <DownOutlined />
                            </a>
                        </Dropdown>
                    </li>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Contact</li>
                    <li>Pages</li>
                </ul>
                <div className='flex flex-row justify-between gap-3.5'>
                    <div className='flex flex-row justify-between gap-2'>
                        <img src={Profile} alt="" />
                        <p>
                            Login / Register
                        </p>
                    </div>
                    <div className=' flex flex-row justify-between gap-3.5'>
                        <img src={Search} alt="" />
                        <img src={Basket} alt="" />
                        <img src={Wish} alt="" />
                    </div>

                </div>
            </div>
        </div>
    );
}

export default NavigationSec;
