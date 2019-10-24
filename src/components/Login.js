// Libraries
import React from "react";
import { Form, withFormik, Field } from "formik";
import { connect } from "react-redux";
import * as Yup from "yup";

// actions
import * as actions from "states/users/usersActions";


const Login = ({ errors, touched, values, status, ...props }) => {
	return (
		<Form className='sl-form'>
			<div className='field is-large'>
				<Field
					className='control is-large'
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
					className='control'
					type='password'
					name='password'
					placeholder='Password'
				/>
				{touched.password && errors.password && (
					<p className='error'>{errors.password}</p>
				)}
			</div>
			<button type='submit' className='button is-link'>Log In</button>
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

	handleSubmit(values, { setStatus, resetForm, props }) {
		resetForm();
		console.log(values)
    props.login(values, props.history)
		// axios
		// 	.post("https://reqres.in/api/users/", values)
		// 	.then(res => {
		// 		setStatus(res.data);
		// 		console.log(res);
		// 		props.history.push("/dashboard");
		// 	})
		// 	.catch(err => console.log(err));
	}
})(Login);

const mapStateToProps = state => {
	return {
		currentUser: state.userReducers
	};
};

const mapDispatchToProps = dispatch => {
	return {
		login: (values, history) => dispatch(actions.login(values, history))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(LoginForm);
