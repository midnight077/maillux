import React from 'react';
import './App.css';
import Landing_Page from './components/Landing_page';
import Login from './components/Login';
import Signup from './components/Signup';
import Courses from './components/Courses';
import { Route } from 'react-router-dom';

function App() {
    return (
        <div className='App'>
            <Route exact path='/' component={Landing_Page} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/register' component={Signup} />
            <Route exact path='/courses' component={Courses} />
        </div>
    );
}

export default App;
