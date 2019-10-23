// Libraries
import React from "react";
import { useSelector } from "react-redux";
import { Form, withFormik, Field } from "formik";
import axios from "axios";
import * as Yup from "yup";

const Login = ({ errors, touched, values, status }) => {
  // const user = useSelector(state => state.currentUser);
  // console.log(user)
  return (
    <Form className="sl-form tabs is-centered is-large box">
      <div className="field is-large">
        <Field
          className="control is-large"
          type="text"
          name="username"
          placeholder="Username"
        />
        {touched.username && errors.username && (
          <p className="error">{errors.username}</p>
        )}
      </div>
      <div className="field">
        <Field
          className="control"
          type="password"
          name="password"
          placeholder="Password"
        />
        {touched.password && errors.password && (
          <p className="error">{errors.password}</p>
        )}
      </div>
      <button className="button is-link">Log In</button>
    </Form>
  );
};

const LoginForm = withFormik({
  
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || ""
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required("You need a username"),
    password: Yup.string().required
  }),

  handleSubmit(values, { setStatus, resetForm, props }, history) {
    resetForm();
    axios
      .post("https://reqres.in/api/users/", values)
      .then(res => {
        setStatus(res.data);
        props.history.push("/dashboard"); //or should be users/:id/dashboard?
      })
      .catch(err => console.log(err));
  }
})(Login);

export default LoginForm;
