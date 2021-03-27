import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Contact from './screens/Contact';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Explore from './screens/Explore';
import Profile from './screens/Profile';
import Login from './screens/Login';
import Register from './screens/Register';
import Home from './screens/Home';

function App() {
  return (
    <div className="">
      <Navbar />
      <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/explore">
            <Explore />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
