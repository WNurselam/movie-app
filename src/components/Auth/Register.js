import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useUserAuth } from "../../context/userAuthContext";
import "./style.scss";
import * as yup from "yup";
import { useFormik } from "formik";
import { toast } from "react-toastify";


let loginSchema = yup.object().shape({
  email: yup.string().email().required("Email is required !"),
  password: yup
    .string()
    .required("Password is required !")
    .min(6, "Password is too short, should be 8 chars minimum.")
    .max(14, "Password is too long, should be 14 chars maximum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
});

const Register = () => {

  const { signUp } = useUserAuth();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      signUp(values.email, values.password); 
      navigate("/");
      toast.success("Registration completed successfully");  
    },
  });


  return (
    <div className="login-container">
      <h2>Sıgn Up</h2>
      <form onSubmit={formik.handleSubmit}>
        <div className="user-box">
          <input
            type="text"
            autoComplete="off"
            placeholder="Enter email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
           {formik.touched.email && formik.errors.email ? <p className="formik-eror">{formik.errors.email }</p>:null}
          <label>Email</label>
        </div>
        <div className="user-box">
          <input
            type="password"
            autoComplete="off"
            placeholder="Enter password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password ? <p className="formik-eror">{formik.errors.password }</p>:null}
          <label>Pasword</label>
        </div>
        <button  className="btn-login" type="submit">
          Kayıt ol
        </button>
      </form>
      <div className="road-sign">
        Alerady have an acount ?{" "}
        <span>
          <Link to="/login">Log In</Link>{" "}
        </span>{" "}
      </div>
    </div>
  );
};

export default Register;
