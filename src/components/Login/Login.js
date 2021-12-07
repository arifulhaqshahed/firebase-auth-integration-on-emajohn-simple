import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import "./Login.css";

const Login = () => {
  const { googleSignIn } = useAuth();
  return (
    <div className="login-form">
      <div>
        <h2>Please Login</h2>
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
          <input type="submit" value="Submit" />
        </form>
        <p>
          New to ema-john ? <Link to="/register">Create Account</Link>{" "}
        </p>
        <div>---------OR---------</div>
        <br />
        <button
          onClick={googleSignIn}
          style={{ marginRight: "10px" }}
          className="btn-regular"
        >
          Sign in with Google
        </button>
        <button className="btn-regular">Sign in with Facebook</button>
      </div>
    </div>
  );
};

export default Login;
