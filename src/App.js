import React from "react";
import NavBar from "./Components/navbar";
import Counters from "./Components/counters";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container">
          <Counters />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
