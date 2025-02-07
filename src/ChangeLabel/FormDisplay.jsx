import React from 'react';

const FormDisplayComp = ({fName, lname, password, user, userInfoObj }) => {
    return <div className='container mt-4' style={{
        color:"white",
        backgroundColor: 'dodgerblue',
        minHeight: '250px',
        textAlign: 'center',
        padding: '.5rem'
        }}>
        <h1>Output </h1><hr/>
        <h3>{fName|| 'N/A'},{lname|| 'N/A'}, {user || 'N/A'}, {password || 'N/A'} </h3>
        <hr />
        <h2>User info in Object format</h2>
        <span>{JSON.stringify(userInfoObj)}</span>
    </div>
}

export default FormDisplayComp;