import { Fragment } from "react";

const MyHeader = () => {
  return (
    // <header>
    //   <h1>Hello World</h1>

    //   <p>단일 부모로 만든 컴포넌트 입니다.</p>
    // </header>

    <Fragment>
      <h1>Hello World</h1>

      <p>React.Fragment 를 사용한 컴포넌트 입니다.</p>
    </Fragment>
  )
};

export default MyHeader;