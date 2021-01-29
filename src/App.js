import "./App.css";
import React, { Component } from "react";
import ScrollBox from "./chapter5/ScrollBox";
import IterationSample from "./chapter6/IterationSample";
import { render } from "@testing-library/react";

class App extends Component {
  render() {
    return (
      <div>
        <IterationSample></IterationSample>
        {/* 
        <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
          <button onClick={() => this.scrollBox.scrollToBottom()}>
            맨밑으로
          </button> 
        */}
      </div>
    );
  }
}
export default App;
