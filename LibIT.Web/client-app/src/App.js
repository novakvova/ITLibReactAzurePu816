// import logo from './logo.svg';
import React, { Component } from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route 
} from 'react-router-dom';
import './App.css';
import LoginPage from './components/auth/login/LoginPage';
import RegisterPage from './components/auth/register/RegisterPage';
import HomePage from './components/home/HomePage';
import Navbar from './components/navbar/Navbar';

class App extends Component {
  render() { 
    console.log("----App RENDER----");
    return ( 
      <Router>
        <Navbar/>
        <div className="container">
        <Switch>
          
          <Route exact path='/'>
            <HomePage/>
          </Route>

          <Route exact path='/login'>
            <LoginPage/>
          </Route>

          <Route exact path='/register'>
            <RegisterPage/>
          </Route>
          
        </Switch>
        </div>
      </Router>
    );
  }
}
 
export default App;