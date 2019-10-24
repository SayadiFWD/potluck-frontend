// libraries
import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux'

export const useDispatchThunk = (actions) =>{
  let dispatch = useDispatch();
  return bindActionCreators(actions, dispatch);
}






