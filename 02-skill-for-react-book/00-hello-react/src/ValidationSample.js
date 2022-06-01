import { Component, createRef } from "react";

import "./ValidationSample.css";

class ValidationSample extends Component {
  state = {
    password: "",
    clicked: false,
    validated: false,
  };
  
  input = createRef();

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleClick = () => {
    this.setState({
      clicked: true,
      validated: this.state.password === "0000"
    });
    this.input.current.focus();
  };

  render() {
    return (
      <div>
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
          className={
            this.state.clicked
              ? this.state.validated
                ? "success"
                : "failure"
              : ""
          }
          ref={this.input}
        />
        <button
          onClick={this.handleClick}
        >
          검증하기
        </button>
      </div>
    );
  }
};

export default ValidationSample;