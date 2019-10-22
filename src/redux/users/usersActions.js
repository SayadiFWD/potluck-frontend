// // Action Types
// import * as types from "./userTypes";

// // Helpers
import { UseAxiosWithAuth } from "../../helpers/auth";

const APIURL = 'https://potluck-backend.herokuapp.com/';

export const CreateUsers = id => dispatch => { 
  UseAxiosWithAuth()
  .put(APIURL + `/api/users/${id}`)
  .then(res=>{
    dispatch(action(res.data))
  })
  .catch(err=>{
    console.log(err)
  })
}

export const EditUser = id => dispatch => {
  UseAxiosWithAuth()
  .put(APIURL + `/api/users/${id}`)
  .then(res=>{
    dispatch(action(res.data))
  })
  .catch(err=>{
    console.log(err)
  })
}

export const DeleteUser = id => dispatch => {
  UseAxiosWithAuth()
  .delete(APIURL + `/api/users/${id}`)
  .then(res=>{
    dispatch(action(res.data))
  })
  .catch(err=>{
    console.log(err)
  })
}