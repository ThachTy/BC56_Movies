import React, { useState } from 'react';
import { Radio, Tabs } from 'antd';
const Cinema = () => {

    return (

        <Tabs
            defaultActiveKey="1"
            tabPosition="left"
            style={{
                height: 220,
                background: "#fff",
            }}
            items={new Array(30).fill(null).map((_, i) => {
                const id = String(i);
                return {
                    label: `Tab-${id}`,
                    key: id,
                    disabled: i === 28,
                    children: `Content of tab ${id}`,
                };
            })}
        />

    );
};
export default Cinema;