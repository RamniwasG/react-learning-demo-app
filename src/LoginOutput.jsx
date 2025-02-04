import React from 'react';

const LoginOutput = ({loginObj}) => {
    return <div className='container mt-4' style={{
        backgroundColor: 'rgb(47 28 28 / 13%',
        color: 'blue',
        minHeight: '250px',
        textAlign: 'center',
        padding: '.5rem'
        }}>
        <h1>Form Output</h1><hr/>
        {loginObj && <span>{JSON.stringify(loginObj)}</span>}
    </div>
}

export default LoginOutput;