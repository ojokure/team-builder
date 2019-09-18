import React, { useState } from "react";
import uuid from "uuid";
import App from "./App";

function Form(props) {
  const {
    onNameChange,
    onEmailChange,
    onRoleChange,
    // onDetailChange,
    onFormSubmit,
    teamForm
  } = props;


  const isDisabled = () => {
    return (
      !props.teamForm.name || !props.teamForm.email || !props.teamForm.role
    );
  };

  return (
    <form>
      <div>
        <label htmlFor="nameInput"> Name </label>
        <input
          value={props.teamForm.name}
          onChange={onNameChange}
          id="nameInput"
          type="text"
        />
      </div>
      <div>
        <label htmlFor="emailInput"> Email </label>
        <input
          value={props.teamForm.email}
          onChange={onEmailChange}
          id="emailInput"
          type="text"
        />
      </div>
      <div>
        <label htmlFor="roleInput"> Role </label>
        <input
          value={props.teamForm.role}
          onChange={onRoleChange}
          id="roleInput"
          type="text"
        />
      </div>
      <div>
        <button onClick={onFormSubmit} disabled={isDisabled()}>
          Submit
        </button>
      </div>
    </form>
  );
}
export default Form;
