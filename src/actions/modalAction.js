import { ActionModalTypes } from "../assets/constants";

export const showModal = (isOpen) => {
  return {
    type: ActionModalTypes.MODAL_OPEN,
    payload: isOpen,
  };
};

export const hideModal = () => {
  return {
    type: ActionModalTypes.MODAL_CLOSE,
  };
};
