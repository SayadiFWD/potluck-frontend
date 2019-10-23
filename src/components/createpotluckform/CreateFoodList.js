import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, FieldArray, withFormik } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
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
              values.food.map((foodItem, index) => (
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

const CreateFoodListForm = withFormik({
  mapPropsToValues({ food }) {
    return {
      food: food || '',
    }
  },

  handleSubmit(values, { setStatus, props }) {
    console.log('props.location.state.eventName', props.location.state.eventName)
    // console.log('values', values)
    setStatus(values)
    props.history.push({
      pathname: '/inviteguests',
      state: { 
        foodItem: values.food, 
        eventName: props.location.state.eventName,
        date: props.location.state.date,
        time: props.location.state.time,
        address: props.location.state.address
      }
    })
  }
})(CreateFoodList);

export default CreateFoodListForm;