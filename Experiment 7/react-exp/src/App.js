import React from "react";
import UserCard from "./components/UserCard";
import "./App.css";

function App() {
  const users = [
    { name: "Vikarn Jha", email: "vikarnjha91gmail.com" },
    { name: "Anupam Kumar", email: "360anupamkrgmail.com" },
  ];

  return (
    <div className="App">
      <h1>React Component-Based UI</h1>
      {users.map((user, index) => (
        <UserCard key={index} name={user.name} email={user.email} />
      ))}
    </div>
  );
}

export default App;
