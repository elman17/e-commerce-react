import React, { useState } from 'react';
import { TreeSelect } from 'antd';
import Square from '../../assets/Square.svg';
import Tri from '../../assets/Tri.svg';

const Filter = () => {
    const [value, setValue] = useState();

    const onChange = (newValue) => {
        setValue(newValue);
    };

    const treeData = [
    ];

    return (
        <div className='flex flex-row justify-around items-center pl-16 pr-20 w-full'>
            <p>
                Showing all 12 results
            </p>
            <div className='flex flex-row gap-4'>
                <p>
                    Views:
                </p>
                <img src={Square} alt="" />
                <img src={Tri} alt="" />
            </div>
            <div className='flex flex-row gap-4'>
                <TreeSelect
                    showSearch
                    style={{ width: '100%' }}
                    value={value}
                    dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
                    placeholder="Please select"
                    allowClear
                    treeDefaultExpandAll
                    onChange={onChange}
                    treeData={treeData}
                />
                <button className='bg-teal-600 text-white text-sm pt-2 pb-2 w-36 rounded-lg'>
                    Filter
                </button>
            </div>
        </div>
    );
}

export default Filter;

