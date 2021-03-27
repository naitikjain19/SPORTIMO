import React,{useState} from 'react'
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

function App() {
  const [isAuthenticated,setAuthenticated] = useState(true)
  return (
    <Router>
    <div style={{marginTop:70}}  className="w-screen-98 h-screen">
      <Navbar isAuthenticated={isAuthenticated} setAuthenticated={setAuthenticated} />
      <Switch>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/explore">
          <Explore />
        </Route>
        <ProtectedRoute isAuthenticated={isAuthenticated} exact path="/profile" component={Profile} />
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Redirect to="home" />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
