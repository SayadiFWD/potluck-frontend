// Libraries
import React from 'react';
import { withFormik, Field, Form } from 'formik';
import { connect } from "react-redux";

// actions
import * as actions from "states/events/eventsActions";


const CreatePotluck = () => {

	return (
    
    <div className='container'>
      <h1 className='title is-3'>Let's get some basic information first.</h1>
      <Form className='potluckform'>
        <div className="field is-large">
          <Field 
            className='control'
            name='event_name' 
            type='text' 
            placeholder='Give your event a name'
          />
        </div>
        <div className="field is-large">
          <Field 
            className='control'
            name='dates' 
            type='text' 
            placeholder='What date will the event be?'
          />
        </div>
        <div className="field is-large">
          <Field 
            className='control'
            name='time' 
            type='text' 
            placeholder='What time?'
          />
        </div>
        <div className="field is-large">
          <Field 
            className='control'
            name='address' 
            type='text' 
            placeholder='Where?'
          />
        </div>
        <button type='submit' className="button next">Next</button>
      </Form>
    </div>
  );
};

const CreatePotluckForm = withFormik({
  mapPropsToValues({ event_name, dates, time, address }) {
    return {
      event_name: event_name || '',
      dates: dates || '',
      time: time || '',
      address: address || '',
    }
  },

  handleSubmit(values, { props }) {
    
    props.updateFormEvent(values)
    console.log(props.createEvent)
    props.history.push('/inviteguests')
    
  }
})(CreatePotluck);

const mapStateToProps = state => {
	return {
		createEvent: state.createEvent
	};
};

const mapDispatchToProps = dispatch => {
	return {
    updateFormEvent: values => dispatch(actions.updateFormEvent(values))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CreatePotluckForm);