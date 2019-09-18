import React, { useState } from "react";
import uuid from "uuid";
import Form from "./Form";

const initialTeamMembers = [
  {
    id: uuid(),
    name: "Chioma",
    email: "chioma@gmail.com",
    role: "UX Engineer"
  },
  {
    id: uuid(),
    name: "Evans",
    email: "evans@gmail.com",
    role: "Front-End Developer"
  },
  {
    id: uuid(),
    name: "Oladimeji",
    email: "oladimeji@gmail.com",
    role: "Front-End Developer"
  }
];

const initialTeamForm = {
  name: "",
  email: "",
  role: ""
};

const App = () => {
  const [teamMembers, setTeamMembers] = useState(initialTeamMembers);
  const [teamForm, setTeamForm] = useState(initialTeamForm);

  const onNameChange = e => {
    setTeamForm({ ...teamForm, name: e.target.value });
  };
  const onEmailChange = e => {
    setTeamForm({ ...teamForm, email: e.target.value });
  };
  const onRoleChange = e => {
    setTeamForm({ ...teamForm, role: e.target.value });
  };
  const onFormSubmit = e => {
    e.preventDefault();
    setTeamMembers([...teamMembers, teamMembers.concat(e.target.value)]);
    setTeamForm(initialTeamForm)
  };

  return (
    <div>
      {!teamForm.name && <div>INPUT YOUR DETAILS AND JOIN OUR TEAM</div>}
      <div>
      <Form
        onNameChange={onNameChange}
        onEmailChange={onEmailChange}
        onRoleChange={onRoleChange}
        onFormSubmit={onFormSubmit}
        teamForm={teamForm}
      />
      </div>
      {teamMembers.map(el => (
        <h5 key={el.id}>{el.name} is a Member of our Team.</h5>
      ))}
    </div>
  );
};

export default App;
