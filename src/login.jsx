// import React, {useState} from 'react';
import React, {useState} from 'react';


    const LoginComp = ({ formTitle, formAttr }) => {

    // const [loginObject, setLoginObject] = useState({});
     const [loginObject, setLoginObject] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setLoginObject({
            ...loginObject,
            [name]: value
        });
    }


    const handleSubmit = (e) => {
         e.preventDefault();
         console.log(JSON.stringify(loginObject));
    }

    // const h1Style = {
    //     backgroundColor:'black',
    //     padding:'1rem'
    // }
    
    return <div className='container mt-4'>
        <h1 className='text-center text-warning' style={{
            backgroundColor:'black',
            padding:'1rem'
        }}>{formTitle}</h1>
        <form onSubmit={handleSubmit}>
            <div className='form-group'>
                <label htmlFor='username'>{formAttr.username}</label>
                <input type='text' id='username' name='username' className='form-control mb-2' placeholder='Your user name' onChange={handleChange} />
            </div>
            <div className='form-group'>
                <label htmlFor='password'>{formAttr.password}</label>
                <input type='password' id='password' name='password' className='form-control mb-2' placeholder='Your password' onChange={handleChange}  />
                <button type="submit" className="btn btn-primary mb-2 w-50">Submit</button>
            </div>
        </form>
    </div>
}

export default LoginComp;