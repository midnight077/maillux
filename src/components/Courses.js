import React, { useEffect, useState } from 'react';
import './Courses.css';
import { getCourses } from '../utils/api';
import SmallCourse from './SmallCourse';
import { Link } from 'react-router-dom';
const Courses = () => {
    const hashCode = (s) =>
        s.split('').reduce((a, b) => {
            a = (a << 5) - a + b.charCodeAt(0);
            return a & a;
        }, 0);
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        (async () => {
            const courses = await getCourses();
            setCourses(courses.data.data);
        })();
    }, []);
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
                    {courses.map((item) => {
                        return (
                            <Link to={'/course/' + item._id} title={item.title}>
                                <SmallCourse
                                    title={item.title}
                                    col={hashCode(item.author) % 10}
                                    author={item.author}
                                    duration={item.duration}
                                    subs={item.subscribers.length}
                                    published={new Date(
                                        +item.createdAt.slice(0, 4),
                                        +item.createdAt.slice(5, 7) - 1,
                                        +item.createdAt.slice(8, 10)
                                    )
                                        .toDateString()
                                        .slice(4)}
                                    description={
                                        item.description ||
                                        'No Description Available'
                                    }
                                />
                            </Link>
                        );
                    })}
                </div>
            </section>
        </main>
    );
};

export default Courses;
