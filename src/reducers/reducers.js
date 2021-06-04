import { ActionTypes } from "../assets/constants";

const defaultState = {
  users: [],
};

const allUsers = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.GET_USERS:
      return { ...state, users: [...action.payload] };
    case ActionTypes.DELETED_USERS:
      return {
        ...state,
        users: state.users.filter(user => user.id !== action.payload)
      }
    case ActionTypes.UPDATED_STATUS:
      return {
          ...state,
          ...action.payload
      }
    case ActionTypes.CREATE_USER:
      return {...state, users:[ ...action.payload]}  
    default:
      return state;
  }
};

export default allUsers;
