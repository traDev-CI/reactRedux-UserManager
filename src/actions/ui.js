import { ActionTypes } from "../assets/constants";
export const setError = (errMsg) =>({
    type: ActionTypes.UI_SET_ERROR,
    payload: errMsg
})

export const removeError = () =>({
    type: ActionTypes.UI_REMOVE_ERROR,
})