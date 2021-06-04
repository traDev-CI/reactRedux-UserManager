import { createSelector } from "reselect";
const userListsState = (state) => state.allUsers;
const isOpenM = (state) => state.modalCreate;
const emptyFormM = (state) => state.inputChangeForm;
const createUserU = (state) => state.createUser

export const makeSelectUsers = createSelector(
  userListsState,
  (allUsers) => allUsers.users
);

export const makeSelectModal = createSelector(
  isOpenM,
  (modalCreate) => modalCreate.isOpen
);

export const makeCreationUser = createSelector(
  createUserU,
  (createUser) => createUser.user
)