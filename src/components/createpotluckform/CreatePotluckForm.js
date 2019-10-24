// Libraries
import React from 'react';
import { withFormik, Field, Form } from 'formik';


const CreatePotluck = () => {
	return (
    <Form>
      <div className="field is-large">
        <Field 
          className='control'
          name='event_name' 
          type='text' 
          placeholder='Event Name'
        />
      </div>
      <div className="field is-large">
        <Field 
          className='control'
          name='dates' 
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