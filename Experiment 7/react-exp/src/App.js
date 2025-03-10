import React from "react";
import UserCard from "./components/UserCard";
import "./App.css";

function App() {
  const users = [
    { name: "John Doe", email: "john.doe@example.com" },
    { name: "Alice Johnson", email: "alice.johnson@example.com" },
    { name: "Charlie Brown", email: "charlie.brown@example.com" },
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
