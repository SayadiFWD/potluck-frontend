import React, { useState, useEffect } from 'react';
import { Form, Field, FieldArray, withFormik } from 'formik';
import { connect } from "react-redux";

// actions
import * as actions from "states/events/eventsActions";


const InviteGuest = ({ values, createEvent, ...props}) => {
  const[clicked, setClicked] = useState(false)
  const[invisible, setInvisible] = useState("")

  const eventLink = () => {
    setClicked(true)
    setInvisible("invisible")
  }
  useEffect(()=>{props.history.push({state: createEvent})},[])
  
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
                        <i className="far fa-plus-square" ></i></div>
                      <div onClick={() => arrayHelpers.remove(index)}>
                        <i className="far fa-minus-square" ></i>
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
                  <span className='email-link'>{Object.keys(props.createEvent).length > 6 ? `https://potluck-frontend.feast.now.sh/events/${props.createEvent.id}`: ''}</span>
                </div>
              ) : null } 
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
    props.updateFormEvent(values)
    props.submitFormEvent({...values, ...props.location.state}, localStorage.getItem('id'))
    props.history.push('/foodform')
  }
})(InviteGuest);

const mapStateToProps = state => {
	return {
		createEvent: state.createEvent
	};
};

const mapDispatchToProps = dispatch => {
	return {
    updateFormEvent: values => dispatch(actions.updateFormEvent(values)),
    submitFormEvent: (values, id) =>dispatch(actions.submitFormEvent(values, id))
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(InviteGuestForm);


