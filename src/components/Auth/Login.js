import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { useUserAuth } from "../../context/userAuthContext";
import "./style.scss";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="login-container">
      <h2>Log In</h2>
      {error && <div>Hata</div>}
      <form onSubmit={handleSubmit}>
        <div className="user-box">
          <input
            className="email"
            type="text"
            autoComplete="off"
            placeholder="Enter email..."
            name="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Email</label>
        </div>
        <div className="user-box">
          <input
            className="password"
            type="password"
            autoComplete="off"
            placeholder="Enter password..."
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Password</label>
        </div>
        <button className="btn-login" disabled={!email || !password}>
          Log In
        </button>
      </form>
      <div className="road-sign">
      Don't have an account? <span><Link to="/signup">Sign up</Link></span>
      </div>
    </div>
  );
};

export default Login;


/*
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useUserAuth } from "../../context/userAuthContext";
import "./style.scss";
import * as yup from "yup";
import { useFormik } from 'formik';

let loginSchema = yup.object().shape({
  email: yup.string().email().required('Email is required !'),
  password: yup
    .string()
    .required('Password is required !')
    .min(6, "Password is too short, should be 8 chars minimum.")
    .max(14, "Password is too long, should be 14 chars maximum.")
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
  });

const Login = () => {
  const { logIn } = useUserAuth();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema:loginSchema,  
    onSubmit: values => {
      logIn(values.email, values.password);
      navigate("/");
    },
  });

  return (
    <div className="login-container">
      <h2>Log In</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="user-box">
          <input
            className="email"
            type="text"
            autoComplete="off"
            placeholder="Enter email..."
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          { formik.touched.email &&formik.errors.email ? <p className="formik-eror">{formik.errors.email }</p>:null}
          <label>Email</label>
        </div>
        <div className="user-box">
          <input
            type="password"
            autoComplete="off"
            placeholder="Enter password..."
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <label>Password</label>
          {formik.touched.password && formik.errors.password ? <p className="formik-eror">{formik.errors.password }</p>:null}
        </div>
        <button  type="submit" className="btn-login">
          Log In
        </button>
      </form>
      <div className="road-sign">
        Don't have an account?{" "}
        <span>
          <Link to="/signup">Sign up</Link>
        </span>
      </div>
    </div>
  );
};

export default Login;
*/
