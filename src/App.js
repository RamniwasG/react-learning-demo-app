import './App.css';
// import CustomBtn from './button/button';
import FormOutput from './FormOutput';
import Footer from './footer';
// import Navigations from './header';
import NavigationComp from './navigation';
import RegistrationForm from './RegistrationForm'
import LoginComp from './login';
import LoginOutput from './LoginOutput';
import { useState } from 'react';
import CounterApp from './Counter_App';
import StateLearning from './StateLearning';
import MathmeticalApp from './Mathmetical_App'


function App() {
  
  const [selectedMenu, setSelectedMenu] = useState('Home');

  let comp = '';
  if(selectedMenu === 'Admission') {
    comp = <div className='row'>
      <div className='col-6'>
        <RegistrationForm />
      </div>
      <div className='col-6'>
        <FormOutput />
      </div>
    </div>
  } else if(selectedMenu === 'Login') {
    comp = <div className='row'>
      <div className='col-6'>
        <LoginComp formTitle="Sign In Form" formAttr={{ username: 'Enter User Name', password: 'Enter Password '}} />
      </div>
      <div className='col-6'>
        <LoginOutput />
      </div>
    </div>
  } else if(selectedMenu === 'Counter_App') {
    comp = <CounterApp />;
  }  else if(selectedMenu === 'State_Learning') {
    comp = <StateLearning />;
  } else if(selectedMenu ==='Mathmetical_App') {
    comp = <MathmeticalApp />;
  } else {
    comp = <h3 className='text-center'>You are at {selectedMenu} Page</h3>
  }

  return (
    <div className='container pt-4'>
      <NavigationComp selectedMenu={selectedMenu} onSetSelectedMenu={(menuItem) => setSelectedMenu(menuItem)} />
      {comp}
      <Footer />
     
    </div>
    

  );
  

}


export default App;
