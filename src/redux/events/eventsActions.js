// // Action Types
// import * as types from "./actionTypes";

// // Helpers
import { UseAxiosWithAuth } from "../../helpers/auth";

const APIURL = "https://potluck-backend.herokuapp.com/";

export const CreateEvent = id => dispatch => {
	UseAxiosWithAuth()
		.post(APIURL + `/api/events/${id}`)
		.then(res => {
      dispatch(action(res.data))
    })
		.catch(err => {
      console.log(err)
    });
};

export const EditEvent = id => dispatch => {
  UseAxiosWithAuth()
  .put(APIURL + `/api/events/${id}`)
  .then(res=>{
    dispatch(action(res.data))
  })
  .catch(err=>{
    console.log(err)
  })
}

export const DeleteEvent = id => dispatch => {
  UseAxiosWithAuth()
  .delete(APIURL + `/api/events/${id}`)
  .then(res=>{
    dispatch(action(res.data))
  })
  .catch(err=>{
    console.log(err)
  })
}
