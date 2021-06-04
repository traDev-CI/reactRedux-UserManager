import React, {useEffect} from "react";
import HeaderSection from "./Components/headerSection/HeaderSection";
import ModalUsers from "./Components/Modal/ModalUsers";
import UserLists from "./Components/UserLists/UserLists";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "reselect";
import { makeSelectUsers } from "./assets/selectors";
import { getUsers } from "./actions/users";
import api from "./api/user";
import "./App.css";


function App() {
  const dispatch = useDispatch();
  const {users} = useSelector(state => state.allUsers)
  

  const fecthUsers = async () => {
    const res = await api.get("/users").catch((err) => {
      console.error(err);
    });
    dispatch(getUsers(res.data))
 
  };

  useEffect(() => {
    fecthUsers()
  },[])

  return (
    <>
      <HeaderSection />
      <UserLists />
      <ModalUsers />
    </>
  );
}

export default App;
