import React, { useState } from "react";

const RegistrationFormOfComponant = ({setFormData, setJsonFormData}) => {
    const [userInformation, setUserInformation] = useState();

        const handleInputChange = (event) => {
            const {name, value} = event.target
            setUserInformation({
                ...userInformation,
                [name]: value
            })
        }
    const onSubmitButtonClick = (e) => {
        setFormData(userInformation.fname, userInformation.lname, userInformation.phone, userInformation.password);
        setJsonFormData(userInformation);
        e.preventDefault();
    }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    // }
    console.log(userInformation);

    return<div className="border p-3">
        <form>
            <h2 className="text-center m-2 bg-white text-primary">Registration Form </h2>
            <div>
                <label htmlFor="Fname"> First Name</label>
                <input type='text' id="fname" className="form-control mt-1 w-50" 
                name="fname" placeholder="please enter your name" onChange={handleInputChange} />
            </div>
            <div>
                <label htmlFor="lname"> Last Name</label>
                <input type='text' id="lname" className="form-control mt-1 w-50 d-flex justify-content-end" 
                name="lname" placeholder="please enter your name" onChange={handleInputChange} />
            </div>
            <div>
                <label htmlFor="phone"> Phone</label>
                <input type='text' id="phone" className="form-control mt-1 w-50 float-right" 
                name="phone" placeholder="please enter your phone" onChange={handleInputChange} />
            </div>
            <div>
                <label htmlFor="password"> Password</label>
                <input type='password' id="password" className="form-control mt-1 w-50 d-flex justify-content-end"
                style={{}} name="password" placeholder="please enter password" onChange={handleInputChange} />
            </div>
            <div className="d-flex justify-content-end">
                <input type="submit" value="submit" onClick={onSubmitButtonClick} className="btn m-3 w-50 btn-primary text-white" />
            </div>
        </form> 
    </div>
       
}

export default RegistrationFormOfComponant;