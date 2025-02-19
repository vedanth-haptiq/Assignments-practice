import React from "react";
import Counter from "./components/counter";
import "./App.css";
import { HEADLINE } from "./constant/constantString";

function App() {
  return (
    <div>
      <h1>{HEADLINE}</h1>
      <Counter />
    </div>
  );
}

export default App;
