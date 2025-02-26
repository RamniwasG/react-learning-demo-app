import { useReducer, useState } from "react";
import RegistrationFormReducer, { initialState } from "./RegistrationFormReducer";


const RegistrationFormComp = () => {

    // const [confirmPass, setConfirmPass] = useState();
    // const [fullName, setFullName] = useState();
    // const [email, setEmail] = useState();
    // const [password, setPassword] = useState();
    const [registration, setRegistration ] = useState({ fullname: '', email: '', password: '', confirmpass: '', gender: ''});
    const [registrationForm, dispatch] = useReducer(RegistrationFormReducer, initialState)
    const [errorFullname, setErrorFullname] = useState({ hasError: false, errorMessage: '' })
    const [errorEmail, setErrorEmail] = useState({ hasError: false, errorMessage: '' })
    const [errorPassword, setErrorPassword] = useState({ hasError: false, errorMessage: '' })
    const [errorConfirmPass, setErrorConfirmPass] = useState({ hasError: false, errorMessage: '' })
    const [errorGender, setErrorGender] = useState({ hasError: false, errorMessage: '' })
    // const [error, setError] = useState({ hasError: false, errorMessage: '' })
    
    const handleUerInfoChange = (event) => {
        const {name, value} = event.target
        setRegistration({
            ...registration,
            [name]: value
        })
    }
    // const handleFullNameChange = (event) => {
    //     const {value} = event.target
    //     setFullName(value)
    // }
    // const handleEmailChange = (event) => {
    //     const {value} = event.target
    //     setEmail(value)
    // }
    // const handlePasswordChange = (event) => {
    //     const {value} = event.target
    //     setPassword(value)
    // }
    // const handleConfirmPassChange = (event) => {
    //     const {value} = event.target
    //     setConfirmPass(value)
    // }

    
        const onSaveResultClick = (event) => {
            event.preventDefault();
            // const userData = {
            //      registration,
            //     fullName: fullName,
            //     email : email,
            //     pass: password,
            //     conPass: confirmPass
            // };
            // console.log(userData)
            
            if(registration.fullname === '') {
                setErrorFullname({ hasError: true, errorMessage: 'Please Enter Your Full Name.'});
            } else if(registration.email === '') {
                setErrorEmail({ hasError: true, errorMessage: "We will never share your email with anyone else."});
            } else if(registration.password === '') {
                setErrorPassword({ hasError: true, errorMessage: "Enter at least 5 digit password."});
            } else if(registration.confirmpass === '') {
                setErrorConfirmPass({ hasError: true, errorMessage: "Enter at least 5 digit password."});
            }  else if(registration.gender === '') {
                setErrorGender({ hasError: true, errorMessage: "Please Select Your Gender."});
            } else {
                setErrorFullname({ hasError: true, errorMessage: 'Please Enter Your Full Name.'});
                setErrorEmail({ hasError: true, errorMessage: "We will never share your email with anyone else."});
                setErrorPassword({ hasError: true, errorMessage: "Enter at least 5 digit password."});
                setErrorConfirmPass({ hasError: true, errorMessage: "Please Cheked confirm password."});
                setErrorGender({ hasError: true, errorMessage: "Please Select Your Gender."});
                // setError({ hasError: false, errorMessage: ""});
                dispatch({type:'REGISTRATIONFORMDATA', value: registration })
            }
        }
    
    return<form onSubmit={onSaveResultClick}>
        <div className="container-fluid">
            <div className="row">
                <div className="col-6 mt-5 w-50 bg-secondary">
                    <h3 className="text-center text-dark bg-priamry m-1 p-1 border-bottom">Registration Form</h3>
                    <div className="form-group">
                        <label htmlFor="fullname" className="text-white">Full Name:</label>
                        <input type='text' id='fullname' name='fullname' placeholder="Enter name" className="form-control"
                        onChange={handleUerInfoChange}  />
                        {errorFullname.hasError && <small id="emailHelp" class="form-text text-muted" className="text-warning">{errorFullname.errorMessage}</small>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="text-white">Email:</label>
                        <input type='text' id='email' name='email' placeholder="Enter email" className="form-control"
                        onChange={handleUerInfoChange}  /> 
                       {errorEmail.hasError &&  <small id="emailHelp" class="form-text text-muted" className="text-warning">{errorEmail.errorMessage}</small>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="password" className="text-white">Password:</label>
                        <input type='password' id='password' name='password' placeholder="Enter password" className="form-control"
                        onChange={handleUerInfoChange}  />
                        {errorPassword.hasError && <small id="emailHelp" class="form-text text-muted" className="text-warning"> {errorPassword.errorMessage}</small>}
                    </div>
                    <div className="form-group">
                        <label htmlFor="confirmpas" className="text-white">Confirm Password:</label>
                        <input type='password' id='confirmpass' name='confirmpass' placeholder="Enter confirm password" className="form-control"
                        onChange={handleUerInfoChange}  />
                        {errorConfirmPass.hasError && <small id="emailHelp" class="form-text text-muted" className="text-warning"> {errorConfirmPass.errorMessage}</small>}
                    </div>
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <label class="input-group-text" for="inputGroupSelect01" className="text-white">Choose Gender</label>
                        </div>
                        {/* <div class="form-check-inline">
                            <label class="form-check-label">
                                <input type="radio" class="form-check-input" name="optradio">Option 1 />
                            </label>
                        </div>
                        <div class="form-check-inline">
                            <label class="form-check-label">
                                <input type="radio" class="form-check-input" name="optradio">Option 2
                            </label>
                        </div>
                        <div class="form-check-inline disabled">
                            <label class="form-check-label">
                                <input type="radio" class="form-check-input" name="optradio" disabled>Option 3
                            </label>
                        </div> */}
                        <select class="custom-select" id="inputGroupSelect01" name="gender"  onChange={handleUerInfoChange} style={{width: '100%', height:'40px', borderRadius: '8px'}}>
                            <option selected>Choose...</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                        {errorGender.hasError && <small id="emailHelp" class="form-text text-muted" className="text-warning">{errorGender.errorMessage}</small>}
                    </div>
                    <div className="text-center mt-4 mb-2">
                        <input type='submit' value='Submit' className='btn btn-danger mb-1 w-50 btn-white'  />
                        {/* <button type='button' onClick={onSaveResultClick} className='btn btn-danger mb-1 w-50 btn-white'>Submit</button> */}
                    </div>
                </div>
                <div className="col-6 mt-5 w-50" style={{backgroundColor: 'darkgrey'}}>
                    <h3 className="text-center border-bottom m-1 p-1 tex-tdark">Result Of Registration Form</h3>
                    <div style={{ overflowWrap: 'break-word'}}>{JSON.stringify(registrationForm.regsitrationFormData)}</div>
                </div>
            </div>
        </div>
    </form>
}

export default RegistrationFormComp;
