import React, { useEffect, useState } from "react";
import "./Courses.css";

import axios from "../axios";
import { getCourses } from "../utils/api";
import SmallCourse from "./SmallCourse";
import { Link, Redirect } from "react-router-dom";
const Courses = () => {
  const [loggedin, setLoggedin] = useState(true);
  const fetchData = async () => {
    const token = await localStorage.getItem("auth-token");
    if (!token) {
      setLoggedin(false);
      return;
    }
    const response = await axios.get("/api/user", {
      headers: { "x-access-token": token },
    });
    setUser(response.data);
  };
  const [user, setUser] = useState({});
  console.log(user);
  useEffect(() => {
    fetchData();
  }, []);
  const hashCode = (s) =>
    s.split("").reduce((a, b) => {
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
    <main className="Courses">
      <nav>
        <div className="left">
          <Link to="/">Maillux</Link>
        </div>
        <div className="right">
          {loggedin ? (
            <>
              <Link to="/create" style={{ margin: "5px" }}>
                Create
              </Link>
              <button
                onClick={(e) => {
                  localStorage.removeItem("auth-token");
                  {
                    setLoggedin(false);
                  }
                }}
              >
                LogOut
              </button>
            </>
          ) : (
            <>
              <Link to="/login">LogIn </Link>
              <Link to="/register"> SignUp</Link>
            </>
          )}
        </div>
      </nav>
      <section className="courses-section">
        <div>
          {courses.map((item) => {
            return (
              <Link to={"/course/" + item._id} title={item.title}>
                <SmallCourse
                  title={item.title}
                  col={hashCode(item.author) % 10}
                  author={item.author == user.username ? "you" : item.author}
                  duration={item.duration}
                  subscribers={item.subscribers}
                  published={new Date(
                    +item.createdAt.slice(0, 4),
                    +item.createdAt.slice(5, 7) - 1,
                    +item.createdAt.slice(8, 10)
                  )
                    .toDateString()
                    .slice(4)}
                  description={item.description || "No Description Available"}
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
