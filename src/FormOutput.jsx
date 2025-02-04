import React from 'react';

const FormOutput = ({userObject}) => {
    return <div className='container' style={{
        backgroundColor: 'rgb(47 28 28 / 13%',
        color: 'blue',
        minHeight: '390px',
        textAlign: 'center',
        padding: '.5rem'
        }}>
        <h1>Form Output</h1><hr/>
        {userObject && <span>{JSON.stringify(userObject)}</span>}
    </div>
    
}

export default FormOutput;
