import React, { Component } from 'react';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGraduationCap,
    faLock,
    faEnvelopeOpen
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
class Login extends Component {
    render() {
        return (
            <main className='main'>
                <section className='login-section'>
                    <div>
                        <p>
                            Login to <span className='coloured'>Maillux</span>
                        </p>
                        <div>
                            <input
                                type='email'
                                placeholder='email'
                                required
                            ></input>
                            <input
                                type='password'
                                placeholder='password'
                                required
                            ></input>
                        </div>
                        <button>Submit</button>
                        <Link to='/forgot'>Forgot Password?</Link>
                        <p>Not Registered Yet ?</p>
                        <Link to='/register'>Create New Account</Link>
                    </div>
                </section>
            </main>
        );
    }
}

export default Login;
