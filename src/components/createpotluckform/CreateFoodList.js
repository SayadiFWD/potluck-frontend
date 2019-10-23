// Libraries
import React, { useState } from 'react';
import { withFormik, Field, Form } from 'formik';
import * as Yup from 'yup';


const CreateFoodList = (props) => {
  console.log('props from foodlist', props)
	return (
    <Form>
      <div className="field is-large">
        <Field 
          className='control'
          name='foodItem' 
          type='text' 
          placeholder='Enter food item'
        />
      </div>
      <i class="fas fa-plus-circle"></i>
      <button className="button is-link">Next</button>
    </Form>
  );
};

const CreateFoodListForm = withFormik({
  mapPropsToValues({ foodItem }) {
    return {
      foodItem: foodItem || '',
    }
  },

  handleSubmit(values, { setStatus, props }) {
    setStatus(values)
    props.history.push({
      pathname: '/foodform',
      state: { 
        foodItem: values.foodItem,
        //plus state from before - how do we access this??
      }
    })
  }
})(CreateFoodList);

export default CreateFoodListForm;