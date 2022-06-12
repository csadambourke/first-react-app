import React from "react";
import { useState } from "react"
import "./styles.css";

const App = () => {
  const contacts = [
    { name: "Jenny Han", email: "jenny.han@notreal.com", age: 25},
    { name: "Jason Long", email: "jason.long@notreal.com", age: 45},
    { name: "Peter Pan", email: "peter.pan@notreal.com", age: 100}
  ];

  return (
    <>
      {contacts.map(contact => (
        <ContactCard
          avatar="https://via.placeholder.com/150"
          name={contact.name}
          email={contact.email}
          age={contact.age}
        />
      ))}
    </>
  );
};

const ContactCard = props => {
  const [showAge, setShowAge] = useState(false);
  const [contacts, setContacts] = useState([]);

  return (
    <div className="contact-card">
      <img src="https://via.placeholder.com/150" alt="profile" />
      <div className="user-details">
        <p>Name: {props.name}</p>
        <p>Email: {props.email}</p>
        {showAge === true ? <p>Age: {props.age}</p> : null}
        <button onClick={() => setShowAge(!showAge)}>
          Toggle Age
        </button>
      </div>
    </div>
  );
};

export default App;
