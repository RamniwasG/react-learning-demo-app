import React from 'react';

const LabelOutput = ({label, color, bgcolor}) => {
    return <div className='container mt-4' style={{
        backgroundColor: bgcolor,
        color: color,
        minHeight: '250px',
        textAlign: 'center',
        padding: '.5rem'
        }}>
        <h1>Output</h1><hr/>
        <h2>{label}, {color}, {bgcolor}</h2>
    </div>
}

export default LabelOutput;
