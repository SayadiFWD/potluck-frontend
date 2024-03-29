// Libraries
import React from "react";
import { Form, withFormik, Field } from "formik";
import { connect } from "react-redux";
// import axios from 'axios';
import * as Yup from "yup";

// actions
import * as actions from "states/users/usersActions";

const SignUp = ({ errors, touched, ...props }) => {
	return (
		<Form className='sl-form'>
			<div className='field'>
				<Field
					className='control input'
					type='text'
					name='username'
					placeholder='Username'
				/>
				{touched.username && errors.username && (
					<p className='error'>{errors.username}</p>
				)}
			</div>
			<div className='field'>
				<Field
					className='control input'
					type='email'
					name='email'
					placeholder='Email'
				/>
				{touched.email && errors.email && (
					<p className='error'>{errors.email}</p>
				)}
			</div>
			<div className='field'>
				<Field
					className='control input'
					type='password'
					name='password'
					placeholder='Password'
				/>
				{touched.password && errors.password && (
					<p className='error'>{errors.password}</p>
				)}
			</div>
				<button type='submit' className='button is-link'>
					Sign Up
				</button>
		</Form>
	);
};

const SignUpForm = withFormik({
	mapPropsToValues({ username, email, password }) {
		return {
			username: username || "",
			email: email || "",
			password: password || ""
		};
	},

	validationSchema: Yup.object().shape({
		username: Yup.string().required("You need a username"),
		email: Yup.string()
			.email()
			.required("Please enter your email"),
		password: Yup.string().required
	}),

	handleSubmit(values, { props }) {
		console.log(props)
		props.register(values, props.history);
	}
})(SignUp);

const mapStateToProps = state => {
	return {
		currentUser: state.userReducers
	};
};

const mapDispatchToProps = dispatch => {
	return {
		register: (values, history) => dispatch(actions.register(values, history))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SignUpForm);
