import { ActionModalTypes } from "../assets/constants";

const defaultState = {
  isOpen: false,
};

export default function modalReducer(state = defaultState, action) {
  switch (action.type) {
    case ActionModalTypes.MODAL_OPEN:
      return { isOpen: action.payload };
    case ActionModalTypes.MODAL_CLOSE:
      return { isOpen: action.payload };
    default:
      return state;
  }
}
