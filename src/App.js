import './App.css';
import React, { useState } from 'react';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = ()=>{
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#425d79';
      showAlert("Dark Mode has been enble", "success")   
      document.title = 'TextUtility - DrakMode';
      setTimeout(() => {
        document.title = 'TextUtility-Home';
      }, 1500);
      
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enble", "success")
      document.title = 'TextUtility - LightMode';
      setTimeout(() => {
        document.title = 'TextUtility-Home';
      }, 1500);    }
  }
  return (
    <>
    {/* <Router> */}
    <Navbar title = "Chetan Dewasi" mode = {mode} toggleMode = {toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
      {/* <Switch>
        <Route path='/about'>
            <About/>
        </Route>
        <Route path='/'> */}
          <TextForm showAlert={showAlert} heading = "Enter the text to analyze" mode = {mode}/>
        {/* </Route>
        
      </Switch> */}
    </div>
    {/* </Router> */}
    </>
  );
}

export default App;
