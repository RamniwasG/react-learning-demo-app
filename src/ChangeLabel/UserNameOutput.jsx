import React from 'react';

const UserNameOutput = ({userName, password}) => {
    return <div className='container mt-4' style={{
        backgroundColor: 'dodgerblue',
        minHeight: '250px',
        textAlign: 'center',
        padding: '.5rem'
        }}>
        <h1>Output</h1><hr/>
        <h1>{userName}, {password}</h1>
        </div>
}

export default UserNameOutput;