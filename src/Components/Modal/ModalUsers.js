import React from "react";
import { useDispatch } from 'react-redux'
import { showModal } from '../../actions/modalAction'
import { Button, Modal, TextField } from '@material-ui/core';
import { createSelector } from "reselect";
import { makeSelectModal } from "../../assets/selectors";
import CretateForm from '../Forms/CretateForm'
import { useSelector } from "react-redux";

const stateSelector = createSelector(makeSelectModal, (modalIsVisible) => ({
  modalIsVisible,
}));

const actionDispatcher = (dispatch) => ({
  showModal: (modalIsVisible) => dispatch(showModal(modalIsVisible))
})


const ModalUsers = () => {
  const {modalIsVisible} = useSelector(stateSelector);
  const { showModal } = actionDispatcher(useDispatch());
  const closeModal = () =>{
    showModal(false)
  }
  return (
    <>
      <Modal open={modalIsVisible}>
        <div className="add-user-modal">
          <h1>Agregar Usuario</h1>
          <div>
            <CretateForm closeModal={showModal} />
          </div>
          <div className="actions">
            <Button onClick={closeModal}>Cerrar</Button>
          </div>
        </div>
      </Modal>
    </>
  );
};



export default ModalUsers;
