import React from "react";

const App = () => {
  const message = "This is my first variable rendered in JSX!";
  return (
    <div>
      <h1>Hello World</h1>
      <h2>{message}</h2>
    </div>
  )
}

export default App;
