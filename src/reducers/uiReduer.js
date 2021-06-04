import { ActionTypes } from "../assets/constants";
const initialState = {
  msg: null,
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.UI_SET_ERROR:
      return { ...state, msg: action.payload };
    case ActionTypes.UI_REMOVE_ERROR:
      return { ...state, msg: null };
    default:
      return state;
  }
};

export default uiReducer;