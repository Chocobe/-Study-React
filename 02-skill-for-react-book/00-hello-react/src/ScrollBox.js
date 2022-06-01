import { Component } from "react";

class ScrollBox extends Component {
  scrollToBottom = () => {
    const { clientHeight, scrollHeight } = this.box;

    this.box.scrollTo({
      top: scrollHeight - clientHeight,
      behavior: "smooth",
    });
  };
  
  render() {
    const style = {
      border: "1px solid black",
      width: 300,
      height: 300,
      overflow: "auto",
      position: "relaative",
    };

    const innerStyle = {
      width: "100%",
      height: 650,
      background: "linear-gradient(white, black)"
    };

    return (
      <div
        style={style}
        ref={ref => this.box = ref}
      >
        <div style={innerStyle} />
      </div>
    );
  }
};

export default ScrollBox;