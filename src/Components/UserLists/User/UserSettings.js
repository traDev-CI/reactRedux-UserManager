import React from "react";
import { Tooltip, IconButton } from "@material-ui/core";
import { Delete, Close, Done } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import {deletedUserId} from '../../../actions/users'
import {editStatusIdStatus} from '../../../actions/users'
const UserSettings = ({ one }) => {
  const dispatch = useDispatch();
  const {users} = useSelector(state => state.allUsers)


  const deletedUser = (id) =>{
    dispatch(deletedUserId(id))
  }
  const editStatus = (id, statusU) => {
    const statusEdited = users.map((user) => {
      if(user.id === id){
        if(statusU == "enable"){
          return {...user, status: "disabled"}
        }else{
          return {...user, status: "enable"}
        }
      }else{
        return user
      }
    })
    dispatch(editStatusIdStatus(id, statusEdited))
  }
  return (
    <>
      {one.status == "enable" ? (
        <Tooltip title="desactivar">
          <IconButton onClick={(id, status) => editStatus(one.id, one.status) }>
            <Close></Close>
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="activar">
          <IconButton onClick={(id, status) => editStatus(one.id, one.status) }> 
            <Done></Done>
          </IconButton>
        </Tooltip>
      )}
      <Tooltip title="eliminar">
        <IconButton onClick={(id) => deletedUser(one.id)}>
          <Delete></Delete>
        </IconButton>
      </Tooltip>
    </>
  );
};

export default UserSettings;
