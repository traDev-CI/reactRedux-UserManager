import { ActionTypes } from "../assets/constants";
import api from "../api/user";

export const getUsers = (users) => ({
  type: ActionTypes.GET_USERS,
  payload: users,
});

export const createNewUser = (user) => {
  return (dispatch) => {
    dispatch(createUser(user));
  };
};

export const startCreationUser = (user) => {
  return async (dispatch) => {
    await api
      .post("/users", user)
      .then(() => {
        dispatch(createUser(user));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const deletedUserId = (id) => {
  return async (dispatch) => {
    await api
      .delete(`/users/${id}`)
      .then(() => {
        dispatch(deleteUser(id));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const editStatusIdStatus = (id, statusEdited) => {
  return async (dispatch) => {
    await api
      .put(`/users/${id}`, statusEdited)
      .then(() => {
        dispatch(editStatus(statusEdited));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const createUser = (user) => ({
  type: ActionTypes.CREATE_USER,
  payload: { user },
});

export const deleteUser = (id) => ({
  type: ActionTypes.DELETED_USERS,
  payload: { id },
});

export const editStatus = (users) => ({
  type: ActionTypes.UPDATED_STATUS,
  payload: { users },
});
