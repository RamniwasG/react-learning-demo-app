import { useState } from 'react';
import './App.css';
// import CustomBtn from './button/button';
import FormOutput from './FormOutput';
import Footer from './footer';
// import Navigations from './header';
import NavigationComp from './navigation';
import RegistrationForm from './RegistrationForm'
import LoginComp from './login';
import LoginOutput from './LoginOutput';  
import CounterApp from './Counter_App';
import StateLearning from './StateLearning';
import MathmeticalApp from './Mathmetical_App';
import StateLifting from './stateLifting/StateLifting';
import LabelComp from './ChangeLabel/Label';
import LabelOutput from './ChangeLabel/LabelOutput';
import UserNameComponant from './ChangeLabel/UserName';
import UserNameOutput from './ChangeLabel/UserNameOutput';


function App() {
  const [selectedMenu, setSelectedMenu] = useState('Home');
  const [loginObj, setLoginObj] = useState(null);
  const [userObject, setUserObject] = useState(null);
  const [label, setlabelOutput] = useState("ABCD")
  const [color, setColor] = useState('')
  const [bgcolor, setBgColor] = useState('')
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')

  const handleSelectMenuItem = (menuItem) => {
    setSelectedMenu(menuItem)
  }

  const setLoginJsonData = (loginObj) => {
    setLoginObj(loginObj)
  }

 const setLabelData = (label, color, bgcolor) => {
    setlabelOutput(label)
    setColor(color)
    setBgColor(bgcolor)
 }

 const setUserData = (userName, password) => {
    setUserName(userName)
    setPassword(password)
}

  const setOutputJsonData=(userObject) => {
    setUserObject(userObject)
  }

  let comp = '';
  if(selectedMenu === 'Admission') {
    comp = <div className='row'>
      <div className='col-6'>
        <RegistrationForm  formAttr={{
          firstName: 'First Name', 
          lastName: 'Last Name', 
          Email: 'Email', 
          phone:'Phone'
        }}
         setOutputJsonData={setOutputJsonData}
        />
      </div>
      <div className='col-6'>
        <FormOutput userObject={userObject} />
      </div>
    </div>
  } else if(selectedMenu === 'Login') {
    comp = <div className='row'>
      <div className='col-6'>
        <LoginComp
          formTitle="Sign In Form" 
          formAttr={{ 
            username: 'Enter User Name',
            password: 'Enter Password'
          }}
          setLoginJsonData={setLoginJsonData}
        />
      </div>
      <div className='col-6'>
        <LoginOutput loginObj={loginObj} />
      </div>
    </div>
  } else if(selectedMenu === 'label') {
    comp = <div className='row'>
      <div className='col-6'>
        <LabelComp setLabelData={setLabelData}
        />
      </div>
      <div className='col-6'>
        <LabelOutput label={label} color={color} bgcolor={bgcolor} />
      </div>
    </div>
  } else if(selectedMenu === 'userName') {
    comp = <div className='row'>
      <div className='col-6'>
        <UserNameComponant setUserData={setUserData}
        />
      </div>
      <div className='col-6'>
        <UserNameOutput userName={userName} password={password} />
      </div>
    </div>
  } else if(selectedMenu === 'Counter_App') {
    comp = <CounterApp />;
  }  else if(selectedMenu === 'State_Learning') {
    comp = <StateLearning />;
  } else if(selectedMenu ==='Mathmetical_App') {
    comp = <MathmeticalApp />;
  } else if(selectedMenu ==='State_lifting') {
    comp = <StateLifting />;
  } else {
    comp = <h3 className='text-center'>You are at {selectedMenu} Page</h3>
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-3'>
          <NavigationComp selectedMenu={selectedMenu} onSetSelectedMenu={handleSelectMenuItem} />
        </div>
        <div className='col-9'>
          {comp}
        </div>
      </div>
      <Footer />
    </div>
    

  );
  

}


export default App;
