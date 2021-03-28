import React,{useEffect, useState} from 'react'
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Contact from './screens/Contact';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Explore from './screens/Explore';
import Profile from './screens/Profile';
import Login from './screens/Login';
import Register from './screens/Register';
import Home from './screens/Home';
import  ProtectedRoute  from './components/ProctectedRoute';
import SideBar from './components/SideBar';
import ThemeButton from './components/ThemeButton';
import BottomTab from './components/BottomTab';
import axios from 'axios';
import UserTypeModal from './components/UserTypeModal';
import SkillSetModal from './components/SkillSetModal';
import Tournaments from './screens/Tournaments';

function App() {
  const [isAuthenticated,setAuthenticated] = useState(false)
  const [isUserType,setUserType] = useState(false)
  const [isVerified,setVerified] = useState(false)
  const [isLightTheme,setLightTheme] = useState(true)
  function toggleLightTheme(){
    setLightTheme(!isLightTheme)
  }
  const backendUrl= "http://localhost:5000/"
  useEffect(async ()=>{
    const res = await axios.get(`/api/current_user`)
    if(res.data!==""){
      setAuthenticated(true)
      res.data.usertype!==""&& setUserType(true)
      setVerified(res.data.verified)
    }
  })
  
  
  return (
    <Router>
    <div className={`md:ml-14 w-screen-98 h-full  transition-all duration-75 ${isLightTheme?"light":"dark"}`}>
      {/* <ThemeButton isLightTheme={isLightTheme} toggleLightTheme={toggleLightTheme} /> */}
      <BottomTab isAuthenticated={isAuthenticated} setAuthenticated={setAuthenticated} />
      <SideBar isAuthenticated={isAuthenticated} setAuthenticated={setAuthenticated} />
      <Switch>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/explore">
          <Explore />
        </Route>
        
        <ProtectedRoute isAuthenticated={isAuthenticated} exact path="/tournament" component={Tournaments} />
        <ProtectedRoute isAuthenticated={isAuthenticated} exact path="/profile" component={Profile} />
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/logout">
          <Redirect to="login" />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Redirect to="home" />
        </Route>
      </Switch>
    </div>
    {isAuthenticated&&!isUserType&&<UserTypeModal setUser={setUserType} />}
    {isAuthenticated&&isUserType&&!isVerified&&<SkillSetModal setProfile={setVerified} />}

    </Router>
  );
}

export default App;
