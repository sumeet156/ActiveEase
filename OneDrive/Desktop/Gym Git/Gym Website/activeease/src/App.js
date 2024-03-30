import { useState } from 'react';
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  const [loginPopup, setLoginPopup] = useState(false);
  const [registerPopup, setRegisterPopup] = useState(false);
  return (
    <div className="App">
      <Navbar  setLogin={setLoginPopup} setRegister={setRegisterPopup}/>
      <Hero login={loginPopup} register={registerPopup}/>
    </div>
  );
}

export default App;
