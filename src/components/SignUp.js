// Libraries
import React, { useState  } from 'react';
import { Form, withFormik, Field } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';

const SignUp = ({ errors, touched, values, status }) => {
	return (
      <Form>
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
        <div className='field'>
          <Field className='control' type='password' name='confirmPassword' placeholder='Confirm Password'/>
          {touched.confirmPassword && errors.confirmPassword && (
          <p className="error">{errors.confirmPassword}</p>
        )}
        </div>

        <button className='button is-link'>Sign Up</button>
      </Form>
  );
};

const SignUpForm = withFormik({
  mapPropsToValues({ username, email, password, confirmPassword }) {
    return {
      username: username || '',
      email: email || '',
      password: password || '',
      confirmPassword: confirmPassword || ''
    }
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required('You need a username'),
    email: Yup.string().email().required('Please enter your email'),
    password: Yup.string().required,
    confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'Password does not match').required(),
  }),

  handleSubmit(values, { setStatus, resetForm }) {
    resetForm()
    axios.post('https://reqres.in/api/users/', values)
      .then(res => {
        setStatus(res.data)
        // props.history.push(`/login`)  
      })
      .catch(err => console.log(err))
  }
})(SignUp)

// class SignUp extends React.Component {
//   render(
//     return (
//     <div>
      
//     </div>
//     );
//   );
// };

export default SignUpForm;