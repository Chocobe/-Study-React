import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 0,
      fixedNumber: 0,
    };
  }

  render() {
    const { number, fixedNumber } = this.state;

    return (
      <div>
        <h1>Counter 컴포넌트: {number}</h1>
        <h2>FixedNumber: {fixedNumber}</h2>
        <button onClick={() => this.setState({ number: number + 1 })}>
          Increase
        </button>
        <button onClick={() => this.setState({ number: number - 1 })}>
          Decrease
        </button>
      </div>
    );
  }
};

export default Counter;