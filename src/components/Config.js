import React, { useState, useEffect } from "react";
import axios from "../axios";
import "./Config.css";
import { Redirect, Link } from "react-router-dom";

const Config = ({ match }) => {
  const [loggedin, setLoggedin] = useState(true);
  const fetchData = async () => {
    const token = localStorage.getItem("auth-token");
    if (!token) {
      setLoggedin(false);
    }
    const response = await axios.get("/api/user", {
      headers: { "x-access-token": token }
    });
    setUser(response.data);
    const crs = await axios.get("/api/course", {
      headers: { "x-access-token": token }
    });
    setUser(response.data);
    // user.courses.forEach((item) => {
    //   console.log(1);
    //   if (item._id == match.params.id) {
    //     console.log(item._id);
    //     setCourse(item);
    //   }
    // });
  };

  const [course, setCourse] = useState({});
  const [user, setUser] = useState({});
  console.log(user);
  console.log(course);
  useEffect(() => {
    fetchData();
  }, []);

  return <>{!loggedin ? <Redirect to="/" /> : null}</>;
};

export default Config;
