// Libraries
import React from 'react';
import { withFormik, Field, Form } from 'formik';
import * as Yup from 'yup';

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
        <button className="button next">Next</button>
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

  handleSubmit(values, { setStatus, props }) {
    setStatus(values)
    props.history.push({
      pathname: '/inviteguests',
      state: { 
        event_name: values.event_name,
        dates: values.dates,
        time: values.time,
        address: values.address,
        id: 35
        //id: from login -> dashboard 
      }
    })
  }
})(CreatePotluck);

export default CreatePotluckForm;