import React from "react";
import { createSelector } from "reselect";
import { makeSelectUsers } from "../../assets/selectors";
import { useSelector } from "react-redux";
import User from "./User/User";


const stateSelector = createSelector(makeSelectUsers, (users) => ({
  users,
}));

const UserLists = () => {
  const {users} = useSelector(stateSelector);

  return (
    <>
      {users.map((user, index) => (
        <User one={user} key={index} />
      ))}
    </>
  );
};

export default UserLists;
