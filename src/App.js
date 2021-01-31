import "./App.css";
import React, { Component } from "react";
import ScrollBox from "./chapter5/ScrollBox";
import IterationSample from "./chapter6/IterationSample";
import LifeCycleSample from "./chapter7/LifeCycleSample";
import { render } from "@testing-library/react";
import ErrorBoundary from "./chapter7/ErrorBoundary";

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = {
    color: "#000000",
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <ErrorBoundary>
          <LifeCycleSample color={this.state.color}></LifeCycleSample>
        </ErrorBoundary>
      </div>
    );
  }
}

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <LifeCycleSample></LifeCycleSample>
//         {/*
//         <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
//           <button onClick={() => this.scrollBox.scrollToBottom()}>
//             맨밑으로
//           </button>
//         */}
//       </div>
//     );
//   }
// }
export default App;
