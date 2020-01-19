import React, { Component } from 'react';
import './Courses.css';
import SmallCourse from './SmallCourse';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGraduationCap,
    faLock,
    faEnvelopeOpen
} from '@fortawesome/free-solid-svg-icons';
import { Route, Link } from 'react-router-dom';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

class Courses extends Component {
    render() {
        return (
            <main>
                <header>
                    <nav>
                        <div style={{ fontSize: 25 + 'px', color: '#009c8e' }}>
                            <Link style={{ color: '#009c8e' }} to='/'>
                                Maillux
                            </Link>
                            <div>Courses</div>
                        </div>
                    </nav>
                </header>
                <section className='courses-section'>
                    <div>
                        <Link to='/hello' title='Interview Preparation Course'>
                            <SmallCourse
                                title='Interview Preparation Course'
                                col={Math.floor(Math.random() * 10)}
                                author='Yash Sharma'
                                duration='8'
                                subs='56'
                                published='20 Jan 2020'
                                description='In this course you will learn about important interview questions related to data structures like array, linked lists, trees, graphs, and dynamic programming problems'
                            />
                        </Link>
                        <Link to='/hello' title='Interview Preparation Course'>
                            <SmallCourse
                                title='Interview Preparation Course'
                                col={Math.floor(Math.random() * 10)}
                                author='Yash Sharma'
                                duration='8'
                                subs='56'
                                published='20 Jan 2020'
                                description='In this course you will learn about important interview questions related to data structures like array, linked lists, trees, graphs, and dynamic programming problems'
                            />
                        </Link>
                        <Link to='/hello' title='Interview Preparation Course'>
                            <SmallCourse
                                title='Interview Preparation Course'
                                col={Math.floor(Math.random() * 10)}
                                author='Yash Sharma'
                                duration='8'
                                subs='56'
                                published='20 Jan 2020'
                                description='In this course you will learn about important interview questions related to data structures like array, linked lists, trees, graphs, and dynamic programming problems'
                            />
                        </Link>
                        <Link to='/hello' title='Interview Preparation Course'>
                            <SmallCourse
                                title='Interview Preparation Course'
                                col={Math.floor(Math.random() * 10)}
                                author='Yash Sharma'
                                duration='8'
                                subs='56'
                                published='20 Jan 2020'
                                description='In this course you will learn about important interview questions related to data structures like array, linked lists, trees, graphs, and dynamic programming problems'
                            />
                        </Link>{' '}
                        <Link to='/hello' title='Interview Preparation Course'>
                            <SmallCourse
                                title='Interview Preparation Course'
                                col={Math.floor(Math.random() * 10)}
                                author='Yash Sharma'
                                duration='8'
                                subs='56'
                                published='20 Jan 2020'
                                description='In this course you will learn about important interview questions related to data structures like array, linked lists, trees, graphs, and dynamic programming problems'
                            />
                        </Link>{' '}
                        <Link to='/hello' title='Interview Preparation Course'>
                            <SmallCourse
                                title='Interview Preparation Course'
                                col={Math.floor(Math.random() * 10)}
                                author='Yash Sharma'
                                duration='8'
                                subs='56'
                                published='20 Jan 2020'
                                description='In this course you will learn about important interview questions related to data structures like array, linked lists, trees, graphs, and dynamic programming problems'
                            />
                        </Link>{' '}
                        <Link to='/hello' title='Interview Preparation Course'>
                            <SmallCourse
                                title='Interview Preparation Course'
                                col={Math.floor(Math.random() * 10)}
                                author='Yash Sharma'
                                duration='8'
                                subs='56'
                                published='20 Jan 2020'
                                description='In this course you will learn about important interview questions related to data structures like array, linked lists, trees, graphs, and dynamic programming problems'
                            />
                        </Link>{' '}
                        <Link to='/hello' title='Interview Preparation Course'>
                            <SmallCourse
                                title='Interview Preparation Course'
                                col={Math.floor(Math.random() * 10)}
                                author='Yash Sharma'
                                duration='8'
                                subs='56'
                                published='20 Jan 2020'
                                description='In this course you will learn about important interview questions related to data structures like array, linked lists, trees, graphs, and dynamic programming problems'
                            />
                        </Link>{' '}
                        <Link to='/hello' title='Interview Preparation Course'>
                            <SmallCourse
                                title='Interview Preparation Course'
                                col={Math.floor(Math.random() * 10)}
                                author='Yash Sharma'
                                duration='8'
                                subs='56'
                                published='20 Jan 2020'
                                description='In this course you will learn about important interview questions related to data structures like array, linked lists, trees, graphs, and dynamic programming problems'
                            />
                        </Link>{' '}
                        <Link to='/hello' title='Interview Preparation Course'>
                            <SmallCourse
                                title='Interview Preparation Course'
                                col={Math.floor(Math.random() * 10)}
                                author='Yash Sharma'
                                duration='8'
                                subs='56'
                                published='20 Jan 2020'
                                description='In this course you will learn about important interview questions related to data structures like array, linked lists, trees, graphs, and dynamic programming problems'
                            />
                        </Link>{' '}
                        <Link to='/hello' title='Interview Preparation Course'>
                            <SmallCourse
                                title='Interview Preparation Course'
                                col={Math.floor(Math.random() * 10)}
                                author='Yash Sharma'
                                duration='8'
                                subs='56'
                                published='20 Jan 2020'
                                description='In this course you will learn about important interview questions related to data structures like array, linked lists, trees, graphs, and dynamic programming problems'
                            />
                        </Link>{' '}
                        <Link to='/hello' title='Interview Preparation Course'>
                            <SmallCourse
                                title='Interview Preparation Course'
                                col={Math.floor(Math.random() * 10)}
                                author='Yash Sharma'
                                duration='8'
                                subs='56'
                                published='20 Jan 2020'
                                description='In this course you will learn about important interview questions related to data structures like array, linked lists, trees, graphs, and dynamic programming problems'
                            />
                        </Link>{' '}
                        <Link to='/hello' title='Interview Preparation Course'>
                            <SmallCourse
                                title='Interview Preparation Course'
                                col={Math.floor(Math.random() * 10)}
                                author='Yash Sharma'
                                duration='8'
                                subs='56'
                                published='20 Jan 2020'
                                description='In this course you will learn about important interview questions related to data structures like array, linked lists, trees, graphs, and dynamic programming problems'
                            />
                        </Link>{' '}
                        <Link to='/hello' title='Interview Preparation Course'>
                            <SmallCourse
                                title='Interview Preparation Course'
                                col={Math.floor(Math.random() * 10)}
                                author='Yash Sharma'
                                duration='8'
                                subs='56'
                                published='20 Jan 2020'
                                description='In this course you will learn about important interview questions related to data structures like array, linked lists, trees, graphs, and dynamic programming problems'
                            />
                        </Link>{' '}
                        <Link to='/hello' title='Interview Preparation Course'>
                            <SmallCourse
                                title='Interview Preparation Course'
                                col={Math.floor(Math.random() * 10)}
                                author='Yash Sharma'
                                duration='8'
                                subs='56'
                                published='20 Jan 2020'
                                description='In this course you will learn about important interview questions related to data structures like array, linked lists, trees, graphs, and dynamic programming problems'
                            />
                        </Link>{' '}
                        <Link to='/hello' title='Interview Preparation Course'>
                            <SmallCourse
                                title='Interview Preparation Course'
                                col={Math.floor(Math.random() * 10)}
                                author='Yash Sharma'
                                duration='8'
                                subs='56'
                                published='20 Jan 2020'
                                description='In this course you will learn about important interview questions related to data structures like array, linked lists, trees, graphs, and dynamic programming problems'
                            />
                        </Link>{' '}
                        <Link to='/hello' title='Interview Preparation Course'>
                            <SmallCourse
                                title='Interview Preparation Course'
                                col={Math.floor(Math.random() * 10)}
                                author='Yash Sharma'
                                duration='8'
                                subs='56'
                                published='20 Jan 2020'
                                description='In this course you will learn about important interview questions related to data structures like array, linked lists, trees, graphs, and dynamic programming problems'
                            />
                        </Link>{' '}
                        <Link to='/hello' title='Interview Preparation Course'>
                            <SmallCourse
                                title='Interview Preparation Course'
                                col={Math.floor(Math.random() * 10)}
                                author='Yash Sharma'
                                duration='8'
                                subs='56'
                                published='20 Jan 2020'
                                description='In this course you will learn about important interview questions related to data structures like array, linked lists, trees, graphs, and dynamic programming problems'
                            />
                        </Link>{' '}
                        <Link to='/hello' title='Interview Preparation Course'>
                            <SmallCourse
                                title='Interview Preparation Course'
                                col={Math.floor(Math.random() * 10)}
                                author='Yash Sharma'
                                duration='8'
                                subs='56'
                                published='20 Jan 2020'
                                description='In this course you will learn about important interview questions related to data structures like array, linked lists, trees, graphs, and dynamic programming problems'
                            />
                        </Link>{' '}
                        <Link to='/hello' title='Interview Preparation Course'>
                            <SmallCourse
                                title='Interview Preparation Course'
                                col={Math.floor(Math.random() * 10)}
                                author='Yash Sharma'
                                duration='8'
                                subs='56'
                                published='20 Jan 2020'
                                description='In this course you will learn about important interview questions related to data structures like array, linked lists, trees, graphs, and dynamic programming problems'
                            />
                        </Link>
                    </div>
                </section>
            </main>
        );
    }
}

export default Courses;
