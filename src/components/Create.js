import React, { useState, useEffect } from "react";
import axios from "../axios";
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
  return <></>;
};

export default Create;
