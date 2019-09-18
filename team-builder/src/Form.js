import React, { useState } from 'react';
import uuid from 'uuid';
import App from './App'



function Form (props){
 const {onNameChnage, onEmailChange, onRoleChange, onFormSubmit, teamForm}= props




    return(
       <form>
         <label  htmlFor='name'> Name </label>
         <input 
         value={name}
         onChange={onNameChnage}
         id='nameInput'
         type='text' 
         />        

       <label htmlFor='emailInput'>Email</label>
      <input
        value={email}
        onChange={onEmailChange}
        id='emailInput'
        type='text'
      />
      
      <label htmlFor='roleInput'>Role</label>
      <input
        value={role}
        onChange={onRoleChange}
        id='roleInput'
        type='text'
      />
       
       <button 
        // onClick={onFormSubmit}
        // disabled={isDisabled()}
        >  
        Submit 
        </button>

       </form>




    )
}