import React, { useState } from 'react';
import { Form, Field, FieldArray, withFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const InviteGuest = ({ values }) => {
  const[clicked, setClicked] = useState(false)
  const[invisible, setInvisible] = useState("")

  const eventLink = () => {
    setClicked(true)
    setInvisible("invisible")
  }

	return (
    <div>
      <h1 className='title is-3'>Add the emails of people you would like to invite.</h1>
      <Form>
        <FieldArray
          className='inviteform'
          name="guests"
          render={arrayHelpers => (
            <div className='form-inner' >
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
              {values.guests.length > 1 ? <button className={`button ${invisible}`}  onClick={eventLink}>Generate event link to email</button> : null}
              {clicked ? (
                <div className='event-link'>
                  <span>Copy this link and email it to your guests:</span>
                  <span className='email-link'>EVENT ID</span>
                </div>
              ) : null } {/* NEED TO GET LINK TO EVENT ID WHICH WE GET FROM SUBMITTING AN EVENT */}
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
    // const users_id = props.history.location.state.id
    // const eventData = {...props.history.location.state, guests: values.guests, users_id: users_id}
    // console.log('users_id', users_id)
    // console.log('eventData', eventData)
    // axios
    //   .post("https://potluck-backend.herokuapp.com/api/events", eventData) //! 400 error
    //   .then(res => {
    //     console.log('res', res)
    //     props.history.push({
    //       pathname: '/foodform',
    //       state: {
    //         guests: values.guests // passes guests array to last part of form to generate link
    //       }
    //     })
    //   })
    //   .catch(error => {
    //     console.log('nope')
    //     console.error(error);
    //   });
  }
})(InviteGuest);

export default InviteGuestForm;