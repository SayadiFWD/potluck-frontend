import React from 'react';
import { Form, Field, FieldArray, withFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { TextField } from 'formik-material-ui';
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutline from '@material-ui/icons/RemoveCircleOutline';

const InviteGuest = ({ values }) => {
	return (
    <Form>
      <FieldArray
        name="guests"
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
                Add a guest's email
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

  handleSubmit(values, { props }) {
    const eventData = {...props.history.location.state, guests: values.guests, users_id: 90, id: 789} //! hard coded for now
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