import React from 'react';
import './App.css';
import Landing_Page from './components/Landing_page';
import Login from './components/Login';
import Signup from './components/Signup';
import { Route } from 'react-router-dom';

function App() {
    return (
        <div className='App'>
            <Route exact path='/' component={Landing_Page} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Signup} />
        </div>
    );
}

export default App;
