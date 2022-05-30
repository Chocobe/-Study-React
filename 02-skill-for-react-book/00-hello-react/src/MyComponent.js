import { Component } from "react";
import PropTypes from "prop-types";

class MyComponent extends Component {
  static defaultProps = {
    name: "(STATIC)_DEFAULT_NAME",
  }

  static propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
  }

  render() {
    const {
      name, children, favoriteNumber,
    } = this.props;

    return (
      <div>
        Hello, 저는 {name} 입니다. <br />
        children 값은 {children} 입니다. <br />
        좋아하는 숫자는 {favoriteNumber} 입니다.
      </div>
    );
  }
}

export default MyComponent;