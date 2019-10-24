import React from 'react';
import { Form, Field, FieldArray, withFormik } from 'formik';
import axios from 'axios';
import { TextField } from 'formik-material-ui';
import AddCircleOutline from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutline from '@material-ui/icons/RemoveCircleOutline';

const CreateFoodList = ({ values }) => {
	return (
    <Form>
      <FieldArray
        name="food"
        render={arrayHelpers => (
          <div>
            {values.food && values.food.length > 0 ? (
              values.food.map((food_item, index) => (
                <div key={index}>
                  <Field 
                    name={`food.${index}`}
                    component={TextField}
                  />
                  <RemoveCircleOutline onClick={() => arrayHelpers.remove(index)}/>
                  <AddCircleOutline onClick={() => arrayHelpers.insert(index, "")}/>
                </div>
              ))
            ) : (
              <button type="button" onClick={() => arrayHelpers.push("")}>
                Add a food item
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

// axios request for events_id


const CreateFoodListForm = withFormik({
  mapPropsToValues({ food }) {
    return {
      food: food || '',
    }
  },

  handleSubmit(values, { props }) {
    const foodData = {...values } //! + events_id, which gets created when event is submitted. 
    axios
      .post("https://potluck-backend.herokuapp.com/api/foods", foodData) //! add events_id to post
      .then(res => {
        console.log('res', res)
        props.history.push('/event') //! /event/${events_id} 
      })
      .catch(error => {
        console.log('nope')
        console.error(error);
      });
    props.history.push({
      pathname: '/inviteguests',
      state: { 
        food_item: values.food, 
        eventName: props.location.state.eventName,
        date: props.location.state.date,
        time: props.location.state.time,
        address: props.location.state.address
      }
    })
  }
})(CreateFoodList);

export default CreateFoodListForm;