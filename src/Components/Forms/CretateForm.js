import React from "react";
import { Button, TextField } from "@material-ui/core";
import { Alert } from '@material-ui/lab';
import Radio from "@material-ui/core/Radio";
import { createNewUser, startCreationUser } from "../../actions/users";
import { hideModal } from "../../actions/modalAction"
import { setError, removeError } from "../../actions/ui";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import { useForm } from "../../Hooks/useForm";
import validator from "validator";
import { useDispatch, useSelector } from "react-redux";



const CretateForm = (props) => {
  const { closeModal } = props;
  const {msg} = useSelector(state => state.uiReducer)
  const dispatch = useDispatch();
  const [formValues, handleInputChange, reset] = useForm({
    id: null,
    name: "",
    lastName: "",
    email: "",
    srcImg: "",
    status: "disabled",
  });

  const createUserHandle = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      dispatch(startCreationUser(formValues));
      dispatch(hideModal())
    } else {
      dispatch(setError("You need to full the form"));
    }
  };

  const isFormValid = () => {
    if (formValues.name.trim().length === 0) {
      dispatch(setError("Name is require"));
      return false;
    } else if (formValues.lastName.trim().length === 0) {
      dispatch(setError("Last Name is require"));
      return false;
    } else if (formValues.srcImg.trim().length === 0) {
      dispatch(setError("Img source is require"));
      return false;
    } else if (!validator.isEmail(formValues.email)) {
      dispatch(setError("Email is not valid"));
      return false;
    }
    dispatch(removeError());
    return true;
  };

  return (
    <>
      <form onSubmit={createUserHandle}>
        { msg && <Alert severity="error">{msg}</Alert> }
        <TextField
          className="user-modal-input"
          variant="outlined"
          label="First name"
          name="name"
          value={formValues.name}
          onChange={handleInputChange}
        ></TextField>
        <TextField
          className="user-modal-input"
          variant="outlined"
          label="Last name"
          name="lastName"
          value={formValues.lastName}
          onChange={handleInputChange}
        ></TextField>
        <TextField
          className="user-modal-input"
          variant="outlined"
          label="Email"
          name="email"
          value={formValues.email}
          onChange={handleInputChange}
        ></TextField>
        <TextField
          className="user-modal-input"
          variant="outlined"
          label="Url image"
          name="srcImg"
          value={formValues.srcImg}
          onChange={handleInputChange}
        ></TextField>
        <FormControl>
          <FormLabel>Status</FormLabel>
          <RadioGroup
            name="status"
            value={formValues.status}
            onChange={handleInputChange}
          >
            <FormControlLabel
              value="enable"
              control={<Radio />}
              label="Active"
            />
            <FormControlLabel
              value="disabled"
              control={<Radio />}
              label="Disable"
            />
          </RadioGroup>
        </FormControl>
        <Button variant="contained" color="primary" size="large" type="submit">
          Create
        </Button>
      </form>
    </>
  );
};

export default CretateForm;
