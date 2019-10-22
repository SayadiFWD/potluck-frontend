// Libraries
import React, { useState  } from 'react';
import { Form, withFormik, Field } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';

const Login = () => {

	return (
    <Form>
      <div className='field'>
        <Field className='control' type='text' name='username' placeholder='Username'/>
      </div>
      <div className='field'>
        <Field className='control' type='password' name='password' placeholder='Password'/>
      </div>
      <button className='button is-link'>Log In</button>
    </Form>
  );
};

const LoginForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || '',
      password: password || ''
    }
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required('You need a username'),
    password: Yup.string().required,
  }),

  handleSubmit(values, { setStatus, resetForm }) {
    resetForm()
    axios.post('https://reqres.in/api/users/', values)
      .then(res => {setStatus(res.data)})
      .catch(err => console.log(err))
  }
})(Login)

// class Login extends React.Component {
//   render(
//     return (
//     <div>
      
//     </div>
//     );
//   );
// };

export default LoginForm;