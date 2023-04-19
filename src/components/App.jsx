import React from "react";
import LoginFunction from "./loginform";

let isLoggedin = true;

// function ConditionalRendering() {
// if (isLoggedin === true) {
//   return <h1>Hello</h1>;
// } else {
//   return <LoginFunction />;
// }
// }

// Making use of Ternary Operators down below code block >>>>>>

function App() {
  return (
    <div className="container">
      {isLoggedin ? <h1>Hello</h1> : <LoginFunction />}
    </div>
  );
}

export default App;
