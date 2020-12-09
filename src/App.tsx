import React from "react";
import "./App.css";
import "./theme.css";
import {
  ButtonBase as Button,
  PrimaryButton,
  SecondaryButton,
} from "./components/Button";

function App() {
  return (
    <div className="App">
      <Button> Base Button </Button>
      <PrimaryButton>Primary Button</PrimaryButton>
      <SecondaryButton>Secondary Button</SecondaryButton>
    </div>
  );
}

export default App;
