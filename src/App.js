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
import FormDisplayComp from './ChangeLabel/FormDisplay';
import FormComponant from './ChangeLabel/Form';
import PostList from './learn_useffect/postList';
import UserComp from './learn_useffect/usersList';
import BasicCard from './learn_useffect/basicCard';
import TableData from './learn_useffect/table';
import UsersBiodata from './learn_useffect/usersBiodata';
import Apps from './Apps';
import UserName from './UserName';
import PhotoList from './learn_useffect/PhotoList';
import AlbumList from './learn_useffect/albumList';
import FetchUserById from './learn_useffect/FetchUserById';

function App() {
  const [selectedMenu, setSelectedMenu] = useState('Home');
  const [loginObj, setLoginObj] = useState(null);
  const [userObject, setUserObject] = useState(null);
  const [label, setlabelOutput] = useState("ABCD")
  const [color, setColor] = useState('')
  const [bgcolor, setBgColor] = useState('')
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [fName, setFname] = useState(''); 
  const [lname, setlName] = useState('');
  const [user, setUser] = useState('N/A');
  const [userInfoObj, setUserInfoObj] = useState({});


  

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
 const setFormData = (fName, lname, email, password) => {
    setFname(fName)
    setlName(lname)
    setUser(email)
    setPassword(password)
 }

 const setJsonFormData = (a) => {
  setUserInfoObj(a)
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
  } else if(selectedMenu === 'Form') {
    comp = <div className='row'>
      <div className='col-6'>
        <FormComponant setFormData={setFormData} setJsonFormData={setJsonFormData}/> 
      </div>
      <div className='col-6'>
        <FormDisplayComp
          fName={fName}
          lname={lname}
          user={user}
          password={password}
          color={color}
          bgcolor={bgcolor}
          userInfoObj={userInfoObj}
        />
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
  } else if(selectedMenu === 'BasicCard') {
    comp = <BasicCard />;
  } else if(selectedMenu ==='Learn_useEffect') {
    comp = <PostList />;
  } else if(selectedMenu === 'TableData') {
    comp = <TableData />;
  } else if(selectedMenu === 'UserComp') {
    comp = <UserComp />;
  } else if(selectedMenu === 'UsersBiodata') {
    comp = <UsersBiodata formAttr={{
      heading:'Users Biodata', 
    }}
    />;
  } else if(selectedMenu === 'Apps') {
    comp = <Apps backgroundColor="lightblue"/>;
  } else if(selectedMenu === 'UserName') {
    comp = <UserName textColor="brown" bgcolor="blue" />;
  } else if(selectedMenu === 'PhotosList') {
    comp = <PhotoList />;
  } else if (selectedMenu === 'AlbumList') {
    comp = <AlbumList />
  } else if (selectedMenu === 'FetchUserById') {
    comp = <FetchUserById />
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
