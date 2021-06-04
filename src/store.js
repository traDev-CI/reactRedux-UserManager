import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import allUsers from "./reducers/reducers";
import modalCreate from "./reducers/modalReducer";
import createNewUser from './reducers/createNewUserReducer'
import uiReducer from './reducers/uiReduer';
import deleteUser from './reducers/deleteUserReducer';
import thunk from 'redux-thunk'

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const reducers = combineReducers({ 
  allUsers, modalCreate, createNewUser, uiReducer, deleteUser });

export default createStore(
  reducers,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);
