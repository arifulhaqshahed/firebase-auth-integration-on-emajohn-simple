import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="login-form">
      <div>
        <h2>Create Account</h2>
        <form onSubmit="">
          <input type="email" name="email" id="" placeholder="Your email" />
          <br />
          <br />
          <input
            type="password"
            name="password"
            id=""
            placeholder="Your password"
          />
          <br />
          <br />
          <input
            type="password"
            name="password"
            id=""
            placeholder="Re-enter your password"
          />
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
        <p>
          Already have an Account ? <Link to="/login">Login</Link>{" "}
        </p>
        <div>---------OR---------</div>
        <br />
        <button style={{ marginRight: "10px" }} className="btn-regular">
          Sign in with Google
        </button>
        <button className="btn-regular">Sign in with Facebook</button>
      </div>
    </div>
  );
};

export default Register;
