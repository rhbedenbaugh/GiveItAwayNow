import React from "react";
import './App.css';
import StuffList from "./Stuff/StuffList";
import StuffSingle from "./Stuff/StuffSingle";
import StuffForm from "./Stuff/StuffForm";

function App() {
  return(
    <div className="App">
      <div className="row">
        <div className="col s12">Menu</div>
      </div>
      <div className="row">
        <div className="col s3">StuffList</div>
        <div className="col s9">StuffSingle</div>
      </div>
      <div className="row">
        <div className="col s12">StuffForm</div>
      </div>
    </div>
  );
}

export default function App() {
  return <h1>Hello World</h1>;
}