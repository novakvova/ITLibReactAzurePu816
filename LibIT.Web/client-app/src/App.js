// import logo from './logo.svg';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import React, { Component, Suspense, lazy } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import './App.css';
//import LoginPage from './components/auth/login/LoginPage';
//import RegisterPage from './components/auth/register/RegisterPage';
//import HomePage from './components/home/HomePage';
//import Navbar from './components/navbar/Navbar';
const HomePage = React.lazy(() => import('./components/home/HomePage'));
const Navbar = React.lazy(() => import('./components/navbar/Navbar'));
const RegisterPage = React.lazy(() => import('./components/auth/register/RegisterPage'));
const LoginPage = React.lazy(() => import('./components/auth/login/LoginPage'));

const renderLoader = () => <p>Loading ...</p>;


class App extends Component {
    render() {
        return (

            <Suspense fallback={renderLoader}>
                <Router>
                    <Navbar />
                    <div className="container">

                        <Switch>
                            <Route exact path='/' render={() => <HomePage />} />

                            <Route exact path='/login' render={() => <LoginPage />} />

                            <Route exact path='/register' render={() => <RegisterPage />} />
                        </Switch>
                    </div>

                </Router>
            </Suspense>
            
        );
    }
}

export default App;