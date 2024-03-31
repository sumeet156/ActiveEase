import { useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import img1 from "./images/x-card1.jpg";
import img2 from "./images/card-2.jpg";
import img3 from "./images/card-3.jpg";
import trainer1 from "./images/trainer1.jpeg";
import trainer2 from "./images/trainer2.jpeg";
import trainer3 from "./images/trainer3.jpeg";
import MainCard from "./components/MainCard";

function App() {
  const [loginPopup, setLoginPopup] = useState(false);
  const [registerPopup, setRegisterPopup] = useState(false);
  
  return (
    <div className="App">
      <Navbar setLogin={setLoginPopup} setRegister={setRegisterPopup} />
      <Hero
        login={loginPopup}
        setLogin={setLoginPopup}
        setRegister={setRegisterPopup}
        register={registerPopup}
      />
      <MainCard heading={'Plans'}>
        <Card image={img1} info={'Unlimited access to'} first={'At-center group classes'} second={'All ELITE & PRO gyms'} third={'At-home live workouts'}/>
        <Card image={img2} info={'Unlimited access to'} first={'All PRO gyms'} second={'2 Sessions/month at ELITE gyms & group classes'} third={'At-home live workouts'}/>
        <Card image={img3} info={'Unlimited access to'} first={'At home workouts'} second={'Celebrity Workouts'} third={'Goal-based Workouts and Meditation Sessions'}/>
      </MainCard>
      <MainCard heading={'Trainers'}>
      <Card image={trainer1} info={'Rahul Sharma'} first={'Certified trainer with 5 years of experience'} second={'Specializes in strength training and bodybuilding'} third={'Passionate about promoting healthy lifestyle habits'}/>
        <Card image={trainer2} info={'Priya Patel'} first={'Experienced yoga instructor with 3 years of teaching experience'} second={'Focuses on holistic wellness and stress management'} third={'Offers personalized yoga sessions tailored to individual needs'}/>
        <Card image={trainer3} info={'Vikram Singh'} first={'Certified nutritionist and fitness coach'} second={'Provides expert guidance on diet planning and nutrition'} third={'Specializes in weight management and performance enhancement'}/>
      </MainCard>
    </div>
  );
}

export default App;
