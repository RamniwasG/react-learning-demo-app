import React from "react";

const RegistrationFormDisplay = ({fName, lname, password, phone, userInfoObj}) => {
    return <div className="container mt-4 " style={{
        color: 'black',
        textAlign: 'center',
        backgroundColor: 'lightcoral',
        minHeight: '250px'
    }}>
        <h5 className="border-bottom">Registration Form Display</h5>
        <h3>{fName} {lname} {phone} {password} </h3>
        {/* <h5>JSON Format</h5> */}
        <span>{JSON.stringify(userInfoObj)}</span>
    </div>
}

export default RegistrationFormDisplay;

