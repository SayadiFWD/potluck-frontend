// Action Types
import * as types from "states/owner/ownerTypes";

const iDMatch = ()=>{
  return{
    type: types.COMPARE_IDS,
    payload: true,
  };
}

const iDMismatch = () => {
  return{
    type: types.COMPARE_IDS,
    payload: false,
  };
}

export const compareIDs = id => dispatch => {
  localStorage.getItem('id') === id 
  ? dispatch(iDMatch()) 
  : dispatch(iDMismatch())
}

