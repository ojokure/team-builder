import React, { useState } from "react";
import uuid from "uuid";
import App from "./App";

function Form(props) {
  const { onNameChnage, onEmailChange, onRoleChange } = props;

  return (
    <form>
      <div>
        <label htmlFor="name"> Name </label>
        <input onChange={onNameChnage} id="nameInput" type="text" />
      </div>
      <div>
        <label htmlFor="emailInput">Email</label>
        <input onChange={onEmailChange} id="emailInput" type="text" />
      </div>
      <div>
        <label htmlFor="roleInput">Role</label>
        <input onChange={onRoleChange} id="roleInput" type="text" />
      </div>
      <div>
        <button
        // onClick={onFormSubmit}
        // disabled={isDisabled()}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
export default Form;
