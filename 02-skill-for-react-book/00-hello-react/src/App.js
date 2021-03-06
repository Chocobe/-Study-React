import { Component } from "react";

import ErrorBoundary from "./ErrorBoundary";
// import LifeCycleSample from "./LifeCycleSample";
// import LifeCycle00 from "./LifeCycle/LifeCycle00";
import LifeCycle01 from "./LifeCycle/LifeCycle01";

const getRandomColor = () => {
  return `#${Math.floor(Math.random() * 0xffffff).toString(16)}`;
};

class App extends Component {
  state = {
    color: "#000000",
  };

  handleClick = () => {
    this.setState({
      color: getRandomColor(),
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>

        <ErrorBoundary>
          {/* <LifeCycleSample color={this.state.color} /> */}
          {/* <LifeCycle00 color={this.state.color} /> */}
          <LifeCycle01 color={this.state.color} />
        </ErrorBoundary>
      </div>
    );
  }
};

export default App;