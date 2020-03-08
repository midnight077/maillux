import React, { useState, useEffect } from "react";
import axios from "../axios";
import { Redirect, Link } from "react-router-dom";

import "./Create.css";
const Create = () => {
  const [loggedin, setLoggedin] = useState(true);
  const fetchData = async () => {
    const token = await localStorage.getItem("auth-token");
    if (!token) {
      setLoggedin(false);
      return;
    }
    const response = await axios.get("/api/user", {
      headers: { "x-access-token": token }
    });
    setUser(response.data);
  };
  const [user, setUser] = useState({});
  console.log(user);
  useEffect(() => {
    fetchData();
  }, []);
  if (loggedin) {
    return (
      <>
        <nav className="create-nav">Configuration Panel</nav>
        <Link to="new" className="create-button-new">
          <div>Add new Course + </div>
        </Link>
      </>
    );
  }
  return <Redirect to="/" />;
};

export default Create;
