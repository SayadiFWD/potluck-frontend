import React from 'react';
import { Form, Field, FieldArray, withFormik } from 'formik';
import axios from "axios";
// import * as Yup from 'yup';
import { TextField } from 'formik-material-ui';
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutline from '@material-ui/icons/RemoveCircleOutline';

const InviteGuest = ({ values, status }) => {
  console.log('status at the end of guestlist', status)
	return (
    <Form>
      <FieldArray
        name="guests"
        type="email"
        render={arrayHelpers => (
          <div>
            {values.guests && values.guests.length > 0 ? (
              values.guests.map((guest, index) => (
                <div key={index}>
                  <Field 
                    name={`guests.${index}`}
                    component={TextField}
                  />
                  <RemoveCircleOutline onClick={() => arrayHelpers.remove(index)}/>
                  <AddCircleOutline onClick={() => arrayHelpers.insert(index, "")}/>
                </div>
              ))
            ) : (
              <button type="button" onClick={() => arrayHelpers.push("")}>
                Add an email address
              </button>
            )}
            <div>
              <button type="submit" className="button is-link">Submit</button>     
            </div>
          </div>
        )}
      />
    </Form>
  );
};

const InviteGuestForm = withFormik({
  mapPropsToValues({ guests }) {
    return {
      guests: guests || '',
    }
  },

  handleSubmit(values, { setStatus, props }) {
    setStatus({
      guests: values.guests,
      foodItem: props.location.state.food, 
      eventName: props.location.state.eventName,
      date: props.location.state.date,
      time: props.location.state.time,
      address: props.location.state.address
    })
    props.history.push({
      pathname: '/'
    })
  }
})(InviteGuest);

export default InviteGuestForm;
