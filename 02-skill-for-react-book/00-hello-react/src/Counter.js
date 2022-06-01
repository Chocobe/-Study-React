import { Component } from "react";

class Counter extends Component {
  state = {
    number: 0,
    fixedNumber: 0,
  }

  render() {
    const { number, fixedNumber } = this.state;

    return (
      <div>
        <h1>Counter: {number}</h1>
        <h2>FixedNumber: {fixedNumber}</h2>

        <button
          onClick={() => {
            this.setState(prevState => ({
              number: prevState.number + 1,
            }));

            this.setState(
              prevState => ({
                number: prevState.number + 1,
              }),
              () => {
                console.log("this.setState() 호출");
                console.log(this.state);
              }
            )
          }}
        >
          Increase 2
        </button>

        <button
          onClick={() => {
            this.setState(prevState => ({
              number: prevState.number - 1,
            }));

            this.setState(
              prevState => ({
                number: prevState.number - 1,
              }),
              () => {
                console.log("this.setState() 호출 !!");
                console.log(this.state);
              }
            )
          }}
        >
          Decrease 2
        </button>
      </div>
    );
  }
};

export default Counter;