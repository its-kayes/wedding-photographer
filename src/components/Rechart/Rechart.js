import React from 'react';
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';
import './Rechart.css';

const Rechart = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "program": 11,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "program": 23,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "program": 16,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "program": 29,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "program": 12,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "program": 6,
            "revenue": 61000
        }
    ];

    return (
        <div className='rechart-container' >
            <LineChart width={600} height={300} data={data}>
                <Line type="monotone" dataKey="program" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
            </LineChart>
        </div>
    );
};

export default Rechart;