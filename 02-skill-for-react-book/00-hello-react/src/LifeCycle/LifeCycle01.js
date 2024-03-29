import { Component } from "react";

class LifeCycle01 extends Component {
  state = {
    number: 0,
    color: null,
  };

  myRef = null;

  constructor(props) {
    super(props);
    console.log("constructor");
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps");

    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }

    return null;
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");

    return nextState.number % 10 !== 4;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");

    if (prevProps.color !== this.props.color) {
      return this.myRef.style.color;
    }

    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate", prevProps, prevState);

    if (snapshot) {
      console.log(snapshot);
    }
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
  }

  render() {
    console.log("render");

    const style = {
      color: this.props.color,
    };

    return (
      <div>
        <h1 style={style} ref={ref => this.myRef = ref}>
          {this.state.number}
        </h1>

        <p>color: {this.state.color}</p>

        <button onClick={this.handleClick}>더하기 🚀</button>
      </div>
    );
  }
};

export default LifeCycle01;