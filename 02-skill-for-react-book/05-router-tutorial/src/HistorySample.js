import React, {
  Component
} from "react";

import {
  useNavigate,
} from "react-router-dom";

// react-router-dom v6 을 사용할 경우, 
// Router 관련 props 를 넘겨주지 않는다.
// 그러므로, 하단의 functional class 로 Wrapper 해서
// useNavigate() 를 history props 로 넘겨준다.
class HistorySampleClass extends Component {
  // 뒤로가기
  handleGoBack = () => {
    this.props.history.goBack();
  };

  // 홈으로 이동
  handleGoHome = () => {
    this.props.history.push("/");
  };

  componentDidMount() {
    console.log(this.props.history);
    console.log(this.props.history.block);
    
    // 이것을 설정하고 나면,
    // 페이지에 변화가 생기려고 할 때마다
    // 정말 나갈것인지 질문함
    this.unblock = this.props.history.block("정말 떠나실 건가요?");
  };

  componentWillUnmount() {
    // 컴포넌트가 언마운트되면 질문을 멈춤
    if (this.unblock) {
      this.unblock();
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.handleGoBack}>뒤로</button>
        <button onClick={this.handleGoHome}>홈으로</button>
      </div>
    );
  };
}

// history 객체를 넘겨주기 위해,
// functional component 로 Wrapper 한다.
// 여기서 useNavigate() 반환객체를 history 로 넘겨준다.
const HistorySample = props => {
  return (
    <HistorySampleClass
      {...props}
      history={useNavigate()}
    />
  );
};

export default HistorySample;