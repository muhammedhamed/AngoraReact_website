import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./login.css";

function Signup() {
  const [data, setData] = useState({
    FirstName: "",
    LastName: "",
    UserName: "",
    Email: "",
    Password: "",
  });

  const handlesubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5500/user/signup", { ...data });

      localStorage.setItem("token", true);
    } catch (error) {
      alert(error.response.data);
    }
  };

  const handleChange = ({ target }) => {
    setData({ ...data, [target.name]: target.value });
  };

  return (
    <div className="container">
      <div className=" header m-auto w-50 py-5 text-center">
        <h2> SignUp </h2>
        <form method="POST" onSubmit={handlesubmit}>
          {/* <label className='form-label' htmlFor='FirstName'> FirstName </label> */}
          <input
            className="form-control"
            type="text"
            name="FirstName"
            placeholder="FirstName"
            value={data.FirstName}
            onChange={handleChange}
          />
          <br />
          {/* <label className='form-label' htmlFor='LastName'> LastName </label> */}
          <input
            className="form-control"
            type="text"
            name="LastName"
            placeholder="LastName"
            value={data.LastName}
            onChange={handleChange}
          />
          <br />
          {/* <label className='form-label' htmlFor='UserName'> UserName </label> */}
          <input
            className="form-control"
            type="text"
            name="UserName"
            placeholder="UserName"
            value={data.UserName}
            onChange={handleChange}
          />
          <br />
          {/* <label className='form-label' htmlFor='Email'> Email </label> */}
          <input
            className="form-control"
            type="email"
            name="Email"
            placeholder="Email"
            value={data.Email}
            onChange={handleChange}
          />
          <br />
          {/* <label className='form-label' htmlFor='Password'> Password </label> */}
          <input
            className="form-control"
            type="password"
            name="Password"
            placeholder="Password"
            value={data.Password}
            onChange={handleChange}
          />
          <br />
          <button type="submit" className="btn btn-danger">
            SignUp
          </button>
          <br /> <br />
          <Link to="/login">Already have account ?</Link>
        </form>
      </div>
    </div>
  );
}

export default Signup;
