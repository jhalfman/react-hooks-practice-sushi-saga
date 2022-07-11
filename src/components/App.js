import React from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

//HELLO FROM LAPtop

//HELLO from desktop


function App() {
  return (
    <div className="app">
      <SushiContainer />
      <Table />
    </div>
  );
}

export default App;
