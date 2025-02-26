import React, {useState} from 'react';

const UserNameComponant = ({ setLabelData }) => {

    const [userName, setuserName] = useState('');
    const [password, setPassword] = useState('12345');

    const handleUserChange = (event) => {
        const { value } = event.target;
        setuserName(value);
    }

    const handlePasswordChange = (event) => {
        const {value} = event.target;
        setPassword(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
    }


    const onSaveClick = () => {
        // const obj = {
        //     'label': label,
        //     'color': color, 
        //     'bgcolor': bgcolor
        // }
        // console.log(JSON.stringify(obj))
        setLabelData(userName,password)
    }


    return  <div>
         <form onSubmit={handleSubmit}>
         <h3 className='text-center'>Change the label of 2nd column label</h3>
        <div className='mb-2'>
            <lebel htmlFor="label">UserId</lebel>
            <input type="text" name="label" className='form-control mb-3' onChange={handleUserChange} />
        </div>
        <div className='mb-2'>
            <lebel htmlFor="password">Password</lebel>
            <input type="password" name="label" className='form-control mb-3' onChange={handlePasswordChange} />
        </div>
        <button type="button" onClick={onSaveClick} className='btn btn-info mb-2 w-50'>Save</button>
        </form>
    </div>
   
}

export default UserNameComponant;