import React from 'react';
import { Form, Field, FieldArray, withFormik } from 'formik';
import axios from 'axios';

const CreateFoodList = ({ values }) => {
	return (
    <Form>
      <FieldArray
        name="food"
        render={arrayHelpers => (
          <div className='form-inner'>
            {values.food && values.food.length > 0 ? (
              values.food.map((food_item, index) => (
                <div key={index}>
                  <Field 
                    className='control invite-input'
                    name={`food.${index}`}
                    placeholder='Food item'
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
                Add a food item
              </button>
            )}
            <div>
              <button type="submit" className="button next">Add food</button>     
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