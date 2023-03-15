
import './App.css';
import React from 'react'
import './styles.scss'
import Landing from './pages/Landing';
import {Routes,Route} from 'react-router-dom'
import Login from './pages/Login';
import Registration from './pages/Registration';
function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element ={<Landing/>}/>
        <Route path = '/login' element = {<Login/>}/>
        <Route path='/registration' element = {<Registration/>}/>
      </Routes>
    </div>
  );
}

export default App;
