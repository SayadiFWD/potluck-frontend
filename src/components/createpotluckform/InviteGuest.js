import React from 'react';
import { Form, Field, FieldArray, withFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const InviteGuest = ({ values }) => {
	return (
    <div>
      <h1 className='title is-3'>Add the emails of people you would like to invite.</h1>
      <Form>
        <FieldArray
          className='inviteform'
          name="guests"
          render={arrayHelpers => (
            <div className='invite-form-inner' >
              {values.guests && values.guests.length > 0 ? (
                values.guests.map((guest, index) => (
                  <div key={index}>
                    <Field 
                      className='control invite-input'
                      name={`guests.${index}`}
                      placeholder='Email'
                    />
                    <div className='plus-minus-buttons'>
                      <div onClick={() => arrayHelpers.insert(index, "")}>
                        <i class="far fa-plus-square" ></i></div>
                      <div onClick={() => arrayHelpers.remove(index)}>
                        <i class="far fa-minus-square" ></i>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <button type="button" className='button add' onClick={() => arrayHelpers.push("")}>
                  Add a guest's email
                </button>
              )}
              <div>
                <button type="submit" className="button next">Submit</button>     
              </div>
            </div>
          )}
        />
      </Form>
    </div>
  );
};

const InviteGuestForm = withFormik({
  mapPropsToValues({ guests }) {
    return {
      guests: guests || '',
    }
  },

  handleSubmit(values, { props }) {
    const users_id = props.history.location.state.id
    const eventData = {...props.history.location.state, guests: values.guests, users_id: users_id}
    console.log('users_id', users_id)
    console.log('eventData', eventData)
    axios
      .post("https://potluck-backend.herokuapp.com/api/events", eventData) //! 400 error
      .then(res => {
        console.log('res', res)
        props.history.push('/foodform')
      })
      .catch(error => {
        console.log('nope')
        console.error(error);
      });
  }
})(InviteGuest);

export default InviteGuestForm;