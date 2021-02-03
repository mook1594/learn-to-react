import "./App.css";
import React, { Component, useState } from "react";
import ScrollBox from "./chapter5/ScrollBox";
import IterationSample from "./chapter6/IterationSample";
import LifeCycleSample from "./chapter7/LifeCycleSample";
import { render } from "@testing-library/react";
// import ErrorBoundary from "./chapter7/ErrorBoundary";
import Counter from "./chapter8/Counter";
import Info from "./chapter8/Info";
import CounterReducer from "./chapter8/CounterReducer";
import InfoReducer from "./chapter8/InfoReducer";
import Average from "./chapter8/Average";
import AverageRef from "./chapter8/AverageRef";
import SassComponent from "./chapter9/SassComponent";
import TodoTemplate from "./chapter10/TodoTemplate";
import TodoInsert from "./chapter10/TodoInsert";
import TodoList from "./chapter10/TodoList";
import TodoMain from "./chapter10/TodoMain";

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

// class App extends Component {
//   state = {
//     color: "#000000",
//   };

//   handleClick = () => {
//     this.setState({
//       color: getRandomColor(),
//     });
//   };

//   render() {
//     return (
//       <div>
//         <button onClick={this.handleClick}>랜덤 색상</button>
//         <ErrorBoundary>
//           <LifeCycleSample color={this.state.color}></LifeCycleSample>
//         </ErrorBoundary>
//       </div>
//     );
//   }
// }

class App extends Component {
  render() {
    return (
      <div>
        <TodoMain></TodoMain>
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
// const App = () => {
//   const [visible, setVisible] = useState(false);
//   return (
//     <div>
//       <button
//         onClick={() => {
//           setVisible(!visible);
//         }}
//       >
//         {visible ? "숨기기" : "보이기"}
//       </button>
//       <hr />
//       {visible && <Info />}
//     </div>
//   );
// };
export default App;
