import React, { useState } from 'react';

const ContainerComp = ({formAttr, setOutputJsonData}) => {

    const [userObject, setUserObject] = useState({});

    const [jsonOutput, setJsonOutput] = useState();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserObject({
            ...userObject,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(JSON.stringify(userObject));
    }
   
    const onLoginOutputClick = () => {
        setJsonOutput(JSON.stringify(userObject));
        setOutputJsonData(userObject)
    }

    return <div className='container'>
        <h1 className='test-center text-warning'  style={{
            backgroundColor: 'black',
            color: 'pink',
            textAlign: 'center',
            padding: '1rem'
            }}> Admission Form
        </h1>
       
        <form  onSubmit={handleSubmit}> 
            <div className='form-group'>
                <label htmlFor='fname'> {formAttr.firstName}</label>
                <input type='text' id='fname' name='fname' className='form-control mb-2' placeholder='Your first name' onChange={handleChange} />
            </div>
            <div className='form-group'>
                <label htmlFor='lname'>{formAttr.lastName}</label>
                <input type='text' id='lname' name='lname' className='form-control mb-2' placeholder='Your last name' onChange={handleChange} />
            </div>
            <div className='form-group'>
                <label htmlFor='email'>{formAttr.Email}</label>
                <input type='text' id='email' name='email' className='form-control mb-2' placeholder='Your email' onChange={handleChange} />
            </div>
            <div className='form-group'>
                <label htmlFor='phone'>{formAttr.phone}</label>
                <input type='text' id='phone' name='phone' className='form-control mb-2' placeholder='Your phone number' onChange={handleChange} />
            </div> 

            <button type="button" onClick={onLoginOutputClick} className="btn btn-primary mb-2 w-50">Submit</button>
        </form>

        <div className="row">
          <div className='col-12'>
            <h2>JSON Output</h2>
            <pre>{jsonOutput}</pre>
          </div>
        </div>
    </div>
}

export default ContainerComp;