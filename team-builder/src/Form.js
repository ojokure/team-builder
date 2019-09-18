import React, { useState } from "react";
import uuid from "uuid";
import App from "./App";

function Form(props) {
  const { onNameChnage, onEmailChange, onRoleChange, onFormSubmit, teamForm} = props;


  const isDisabled=()=>{
      return (! props.teamForm.name || ! props.teamForm.age)
  }

  return (
    <form>
      <div>
        <label htmlFor="name"> Name </label>
        <input value={props.teamForm.name} onChange={onNameChnage} id="nameInput" type="text" />
      </div>
      <div>
        <label htmlFor="emailInput"> Email </label>
        <input value={props.teamForm.email} onChange={onEmailChange} id="emailInput" type="text" />
      </div>
      <div>
        <label htmlFor="roleInput"> Role </label>
        <input value={props.teamForm.role} onChange={onRoleChange} id="roleInput" type="text" />
      </div>
      <div>
        <button
        onClick={onFormSubmit}
        disabled={isDisabled()}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
export default Form;
