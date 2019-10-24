// Libraries
import React from 'react';
import { withFormik, Field, Form } from 'formik';
// import * as Yup from 'yup';

const CreatePotluck = () => {
	return (
    <Form>
      <div className="field is-large">
        <Field 
          className='control'
          name='eventName' 
          type='text' 
          placeholder='Event Name'
        />
      </div>
      <div className="field is-large">
        <Field 
          className='control'
          name='date' 
          type='text' 
          placeholder='Date'
        />
      </div>
      <div className="field is-large">
        <Field 
          className='control'
          name='time' 
          type='text' 
          placeholder='Time'
        />
      </div>
      <div className="field is-large">
        <Field 
          className='control'
          name='address' 
          type='text' 
          placeholder='Address'
        />
      </div>
      <button className="button is-link">Next</button>
    </Form>
  );
};

const CreatePotluckForm = withFormik({
  mapPropsToValues({ eventName, date, time, address }) {
    return {
      eventName: eventName || '',
      date: date || '',
      time: time || '',
      address: address || '',
    }
  },

  handleSubmit(values, { setStatus, props }) {
    setStatus(values)
    props.history.push({
      pathname: '/foodform',
      state: { 
        eventName: values.eventName,
        date: values.date,
        time: values.time,
        address: values.address
      }
    })
  }
})(CreatePotluck);

export default CreatePotluckForm;