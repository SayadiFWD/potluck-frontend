import React, { useState, useEffect } from "react";
import { Form, Field, withFormik } from "formik";
import { connect } from "react-redux";

// actions
import * as actions from "states/events/eventsActions";


const CreateFoodList = ({ values, status, ...props }) => {
	const [foodList, setFoodList] = useState([]);
	useEffect(() => {
		if (status) {
			setFoodList([...foodList, status]);
		}
	}, [status, foodList]);
	return (
		<div>
			<Form>
				<Field
					className='control invite-input'
					name='food'
					placeholder='Food item'
				/>
				<button type='submit' className='plus-minus-buttons'>
						<i className='far fa-plus-square'></i>
				</button>
			</Form>
			<button
				onClick={() => {
					props.history.push("/dashboard");
				}}>
				Done!
			</button>
		</div>
	);
};

const CreateFoodListForm = withFormik({
	mapPropsToValues({ food }) {
		return {
			food: food || ""
		};
	},

	handleSubmit(values, { resetForm, props, setStatus }) {
		setStatus(values);
		const eventID = props.createEvent.id;
		const foodData = { ...values, events_id: eventID, completed: false };
		props.submitFormFood(foodData);
		resetForm();
	}
})(CreateFoodList);

const mapStateToProps = state => {
	return {
		createEvent: state.createEvent
	};
};

const mapDispatchToProps = dispatch => {
	return {
		submitFormFood: values => dispatch(actions.submitFormFood(values))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CreateFoodListForm);
