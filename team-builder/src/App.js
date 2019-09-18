import React, { useState } from "react";
import uuid from "uuid";
import Form from "./Form";

const initialTeamMembers = [
  {
    id: uuid(),
    name: "Chioma",
    email: "chioma@gmail.com",
    role: "Back-End"
  },
  {
    id: uuid(),
    name: "Evans",
    email: "evans@gmail.com",
    role: "Front-End"
  },
  {
    id: uuid(),
    name: "Oladimeji",
    email: "oladimeji@gmail.com",
    role: "Front-End"
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
  // const onDetailChange = e => {
  //   setTeamForm({...teamForm, [e.target.id]: e.target.value});
  // 
  }
  const onFormSubmit = e => {
    e.preventDefault();
    const newMember = {
      id: uuid(),
      name: teamForm.name,
      email: teamForm.email,
      role: teamForm.role
    };
    const newTeamMember = teamMembers.concat(newMember);
    setTeamMembers(newTeamMember);

    setTeamForm(initialTeamForm);
  };

  return (
    <div>
      {!teamForm.name && (
        <div>
          <h2>INPUT YOUR DETAILS AND JOIN OUR TEAM</h2>
        </div>
      )}
      <div>
        <Form
          onNameChange={onNameChange}
          onEmailChange={onEmailChange}
          onRoleChange={onRoleChange}
          // onDetailChange={onDetailChange}
          onFormSubmit={onFormSubmit}
          teamForm={teamForm}
        />
      </div>
      {teamMembers.map(el => (
        <h3 key={el.id}>
          {el.name} is a {el.role} developer, a Member of our Team
        </h3>
      ))}
    </div>
  );
};

export default App;
