import React, { useState } from 'react';
import { Select, Tag, Space, DatePicker } from 'antd';


// Loại Phim
const options = [
    {
        value: 'gold',
    },
    {
        value: 'lime',
    },
    {
        value: 'green',
    },
    {
        value: 'cyan',
    },
];



const tagRender = (props) => {
    const { label, value, closable, onClose } = props;
    const onPreventMouseDown = (event) => {
        event.preventDefault();
        event.stopPropagation();
    };
    return (
        <Tag
            color={value}
            onMouseDown={onPreventMouseDown}
            closable={closable}
            onClose={onClose}
            style={{
                marginRight: 3,
            }}
        >
            {label}
        </Tag>
    );
};



const ToolMovie = () => {

    const onChange = (date, dateString) => {
        console.log(date, dateString);
    };
    return (
        <>
            <div className="col">
                <Select
                    className='w-full'
                    placeholder="Loai Phim"
                    mode="multiple"
                    tagRender={tagRender}
                    defaultValue={['gold', 'cyan']}
                    options={options}
                />
            </div>
            <div className="col">
                <Select
                    className='w-full'
                    showSearch
                    placeholder="Rap Chieu Phim"
                    optionFilterProp="children"
                    filterOption={(input, option) => (option?.label ?? '').includes(input)}
                    filterSort={(optionA, optionB) =>
                        (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
                    }
                    options={[
                        {
                            value: '1',
                            label: 'Not Identified',
                        },
                        {
                            value: '2',
                            label: 'Closed',
                        },
                        {
                            value: '3',
                            label: 'Communicated',
                        },
                        {
                            value: '4',
                            label: 'Identified',
                        },
                        {
                            value: '5',
                            label: 'Resolved',
                        },
                        {
                            value: '6',
                            label: 'Cancelled',
                        },
                    ]}
                />
            </div>
            <div className='col'>
                <Space className='w-full' direction="vertical">
                    <DatePicker className='w-full' onChange={onChange} />
                </Space>

            </div>
        </>
    )
};
export default ToolMovie;