import React, { useEffect } from "react";
import { connect, useDispatch } from 'react-redux'
import { showModal, hideModal } from '../../actions/modalAction'
import { Button } from '@material-ui/core';
import { createSelector } from "reselect";
import { useSelector } from "react-redux";
import { makeSelectUsers, makeSelectModal } from "../../assets/selectors";

const stateSelector = createSelector(makeSelectModal, (modalIsVisible) => ({
  modalIsVisible,
}));

const actionDispatcher = (dispatch) => ({
  showModal: (modalIsVisible) => dispatch(showModal(modalIsVisible))
})

const HeaderSection = () => {
  const {modalIsVisible} = useSelector(stateSelector);
  const { showModal } = actionDispatcher(useDispatch());
  const {users} = useSelector(state => state.allUsers)
  const usersLength = users.length

  const openModal = () =>{
    showModal(true)
  }


  return (
    <>
      <div className="app-header">
        <h1>User Manager ({usersLength})</h1>
        <Button variant="contained" color="primary" onClick={openModal} >
          Agregar
        </Button>
      </div>
    </>
  );
};

export default HeaderSection;
