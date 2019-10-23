// Libraries
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Form, withFormik, Field } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';

const SignUp = ({ errors, touched }) => {
	return (
      <Form className='sl-form'>
        <div className='field'>
          <Field className='control' type='text' name='username' placeholder='Username' />
          {touched.username && errors.username && (
          <p className="error">{errors.username}</p>
        )}
        </div>
        <div className='field'>
          <Field className='control' type='email' name='email' placeholder='Email'/>
          {touched.email && errors.email && (
          <p className="error">{errors.email}</p>
        )}
        </div>
        <div className='field'>
          <Field className='control' type='password' name='password' placeholder='Password'/>
          {touched.password && errors.password && (
          <p className="error">{errors.password}</p>
        )}
        </div>
        <NavLink to='/login'><button className='button is-link'>Sign Up</button></NavLink>
      </Form>
  );
};

const SignUpForm = withFormik({
  mapPropsToValues({ username, email, password }) {
    return {
      username: username || '',
      email: email || '',
      password: password || '',
    }
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required('You need a username'),
    email: Yup.string().email().required('Please enter your email'),
    password: Yup.string().required,
  }),

  handleSubmit(values) {
    axios.post('https://potluck-backend.herokuapp.com/api/auth/register', values)
      .then(res => {
        console.log(res)
      })
      .catch(err => console.log(err))
  }
})(SignUp)



export default SignUpForm;