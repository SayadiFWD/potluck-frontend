// Action Types
import * as types from "states/users/usersTypes";

// // Helpers
import { UseAxiosWithAuth } from "../../helpers/auth";

const APIURL = 'https://potluck-backend.herokuapp.com/';

export const success = () => {
  return {
    type: types.SUCCESS
  }
}

export const CreateUsers = id => dispatch => { 
  UseAxiosWithAuth()
  .put(APIURL + `/api/users/${id}`)
  .then(res=>{
    dispatch(success(res.data))
  })
  .catch(err=>{
    console.log(err)
  })
}

export const EditUser = id => dispatch => {
  UseAxiosWithAuth()
  .put(APIURL + `/api/users/${id}`)
  .then(res=>{
    dispatch(success(res.data))
  })
  .catch(err=>{
    console.log(err)
  })
}

export const DeleteUser = id => dispatch => {
  UseAxiosWithAuth()
  .delete(APIURL + `/api/users/${id}`)
  .then(res=>{
    dispatch(success(res.data))
  })
  .catch(err=>{
    console.log(err)
  })
}

export const GetUserEvents = id => dispatch => {
  UseAxiosWithAuth()
  .get(APIURL + `/api/users/${id}`)
  .then(res=>{
    dispatch(success(res.data))
  })
  .catch(err=>{
    console.log(err)
  })
}