# React 스터디 저장소 입니다.

* 강의: [한입 크기로 잘라 먹는 리액트(React.js) : 기초부터 실전까지](https://www.inflearn.com/course/%ED%95%9C%EC%9E%85-%EB%A6%AC%EC%95%A1%ED%8A%B8)

* 강의 출처: 인프런 - 이정환 강사님



<br /><hr /><br />



# 01. ReactJs 기초

## 01-01. React 를 사용하는 이유

1. Component 기반으로 개발할 수 있습니다.
     * Component 기반이 아니라면, 서로 다른 페이지에 사용한 동일한 요소들, ``<header />``, ``<footer />`` 등을 각 페이지마다 동일한 코드를 작성해 주어야 합니다.
     * Component 기반으로 만들게 되면, 이러한 동일한 요소들을 개별 Component 로 만들고, 필요에 따라 조립하는 방식으로 사용할 수 있게 됩니다.

2. ``명령형 프로그래밍`` 이 아닌, ``선언형 프로그래밍`` 으로 개발할 수 있습니다.
     * ``JQuery`` 처럼 명령형 프로그램으로 개발하게 되면, 코드를 파악하기 어려워 집니다. 그래서 ``React`` 를 사용하여, ``선언형 프로그래밍`` 으로 개발을 하여, 코드의 의미전달을 좀 더 좋게 만들 수 있습니다.

3. ``React`` 는 ``Virtual DOM`` 을 사용하기 때문에, ``Rendering`` 과정을 효율적으로 할 수 있습니다.
     * ``DOM`` 을 변경하게 되면, 변경되는 요소 1개당 1번의 ``Rendering 전체`` 과정을 거치지만, ``Virtual DOM`` 을 사용하면, 변경되는 요소들을 ``Virtual DOM`` 에서만 적용해 본 후, 실제 ``DOM`` 과 달라지는 점을 ``일괄 Rendering`` 하기 때문에 성능을 향상시켜 줍니다.



<br /><hr /><br />



## 01-02. React 프로젝트 생성하기

* React 의 ``Bolier Plate`` 명령어는 다음과 같습니다.

```bash
npx create-react-app 프로젝트명
```

<br />

React 에서는 ``js`` 파일에 작성한 함수가 ``HTML`` 요소를 반환하도록 Component 를 개발 합니다.

만약 ``document`` 객체를 사용하여 요소들을 개발한다면, 매우 장황한 코드를 작성하게 됩니다.

```javascript
// js 만을 사용한 Component 개발 예시

function renderHeader() {
  const $h1 = document.createElement("h1");
  $h1.innerHTML = "안녕하세요. 헤더 컴포넌트 입니다.";

  const $header = document.createElement("header");
  $header.append($h1);

  return $header;
}
```

<br />

이러한 작성법을 좀 더 쉽게 만들 수 있는 방법으로 ``JSX (Javascript XML)`` 을 사용하는 것입니다.

``JSX`` 파일은 ``.jsx`` 확장자를 가지며, ``Babel`` 에서 ``transpile`` 해줍니다.

만약, ``.js`` 파일 내부에서도 ``JSX`` 문법을 사용할 수 있도록 해주는 ``Babel Plugin`` 을 설치되어 있다면 ``.js`` 파일에서도 ``JSX`` 문법을 사용할 수 있습니다.

    * Babel Plugin: ``@babel/plugin-transform-react-jsx``

```javascript
// .js 에서 JSX 문법 사용 예시

function renderHeader() {
  const title = "안녕하세요. 헤더 컴포넌트 입니다.";

  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
}
```



## 01-03. JSX

``JSX`` 문법은 ``Javascript`` 와 ``HTML`` 을 혼합한 형식을 가집니다.

그래서 ``JSX`` 의 추가적인 문법이 있습니다.

### 01-03-01. Close Tag 필수

``<img>`` 나 ``<br>`` 같은 Tag 는 ``HTMl`` 에서 사용할 때, 굳이 ``</img>`` 나 ``</br>`` 같은 ``Close Tag`` 를 사용하지 않아도 되었습니다.

``JSX`` 에서는 ``Close Tag`` 는 필수로 작성해야 하며, Tag 의 ``body`` 를 사용하지 않는다면, ``Self Closing Tag`` 를 사용할 수 있습니다.

* ``<img />``
* ``<br />``


<br /><br />


### 01-03-02. 컴포넌트는 ``단일 부모`` 로 만들기

컴포넌트를 만들 때는 ``단일 부모`` 의 형태로 만들어야 합니다.

```javascript
const MyHeader = () => {
  // <header> 를 단일 부모로 만든 MyHeader 컴포넌트
  return (
    <header>
      <h1>Hello</h1>

      <p>World</p>
    </header>
  );
};
```


<br /><br />


### 01-03-03. ``단일 부모`` 없이 컴포넌트 만들기

순수 ``JSX`` 문법에서 컴포넌트는 ``단일 부모`` 에 묶인 형태로 만들어야 합니다.

만약, ``단일 부모`` 로 묶지 않고 만들고 싶다면, ``React.Fragment`` 를 사용하면 가능 합니다.

```javascript
import { Fragment } from "react";

const MyHeader = () => {
  return (
    <Fragment>
      <h1>Hello</h1>

      <p>World</p>
    </Fragment>
  )
}
```

<br />

추가로 ``<Fragment>`` 를 사용하지 않고도 ``단일 부모`` 없이 컴포넌트를 만들 수 있는데, 이 때에는 빈 태그 (``<> ... </>``) 를 사용해도 동일하게 만들 수 있습니다.

```javascript
const MyHeader = () => {
  return (
    <>
      <h1>Hello</h1>

      <p>World</p>
    </>
  );
};
```

<br />

``<Fragment>`` 를 사용하여 만든 컴포넌트를 사용하게 되면, 해당 컴포넌트의 Root 요소 없이 DOM 에 사용된 것을 알 수 있습니다.

<img src="./readmeAssets/Frame%201.png" width="700px" /><br />


<br /><br />


### 01-03-04. Tag 의 Class 는 ``className`` 으로 작성

``HTML Tag`` 에는 ``class`` 속성을 사용할 수 있습니다.

``JSX`` 로 컴포넌트를 만들 때에도 ``Tag`` 에 ``class`` 를 사용하게 되는데, 이때에는 ``className`` 으로 사용합니다.

<br />

``class`` 는 ``Javascript`` 의 예약어이기 때문에 이를 피하기 위해, ``className`` 으로 사용합니다.

```javascript
const MyHeader = () => {
  return (
    <header className="myHeader">
      <h1 className="myHeader-title">
        Hello
      </h1>

      <p className="myHeader-content">
        World
      </p>
    </header>
  );
};
```


<br /><br />


### 01-03-05. inline style 사용하기

``inline style`` 은 다음과 같이 사용할 수 있습니다.

```javascript
const MyHeader = () => {
  const stsyle = {
    App: {
      backgroundColor: "#ff1493",
    },
    title: {
      color: "#ff1493",
      fontWeight: "900",
    },
    content: {
      color: "#f0f400",
    },
  };

  return (
    <div style={style.App}>
      <h1 style={style.title}>
        Hello
      </h1>

      <p style={style.content}>
        World
      </p>
    </div>
  );
};
```


<br /><br />


### 01-03-06. JSX 는 ``string``, ``number`` 만 출력가능

``JSX`` 를 사용하여 ``DOM`` 에 값을 나타낼 때는 ``string`` 이나 ``number`` 만 ``Rendering`` 됩니다.

``Array`` 나 ``Object`` 를 ``Rendering`` 하려고 해도, ``DOM`` 에는 출력되지 않습니다.

```javascript
// 정상 Rendering
const MyHeader = () => {
  const msg = "Hello World";
  const myNumber = 333;

  return (
    <header>
      <p>{msg}</p>
      <p>{myNumber}</p>
    </header>
  );
};
```

<br />

```javascript
// Rendering 실패
const MyHeader = () => {
  const arr = [1, 2, 3];
  const obj = { id: 1 };

  return (
    <div>
      <p>{arr}</p>
      <p>{obj}</p>
    </div>
  );
};
```



<br /><hr /><br />



## 01-04. State (상태)

``React`` 에서 ``State (상태)`` 를 만들기 위해서 ``useState()`` 를 사용 합니다.

``useState()`` 는 배열을 반환하는데, 다음과 같은 용도를 가집니다.

* ``useState()[0]``: ``State (상태)`` 값
* ``useState()[1]``: ``State (상태)`` 값을 변경하기 위한 ``SETTER`` 함수

<br />

그리고 ``useState(기본값)`` 처럼 인자로 ``초기값`` 을 넘겨줄 수 있습니다.

```javascript
import {
  useState,
} from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const onIncrease = () => setCount(count + 1);
  const onDecrease = () => setCount(count - 1);

  return (
    <div>
      <p>카운터값: {counter}</p>

      <button onClick={onIncrease}>1 증가</button>
      <button onClick={onDecrease}>1 감소</button>
    </div>
  );
};
```

<br />

``State (상태)`` 를 만들 때, ``const count = 0`` 이 아닌, ``useState(0)`` 을 사용한 이유는 ``re-rendering`` 을 위해서 입니다.

``useState(0)`` 로 만든 ``State (상태)`` 가 변경되면, 해당 컴포넌트는 변경된 ``State (상태)`` 를 반영하여 다시 ``return`` 하게 됩니다.

결과적으로, 컴포넌트가 새로 ``return`` 한 요소가 ``re-rendering`` 되면서, 사용자의 화면에도 ``State (상태)`` 가 바뀌어 나타나게 됩니다.



<br /><hr /><br />



## ``useState()`` 의 ``State (상태)`` 변경 시, 2번씩 ``re-rendering`` 되는 이유

``React`` 의 ``StrickMode`` 에서는 ``development`` 환경일 때, ``re-rendering`` 을 ``2번씩`` 합니다.

이유는 컴포넌트의 개발을 ``순수 함수`` 로 만들도록 유도하는 것으로서, ``re-rendering`` 이 ``2번`` 되어도, 기대값에는 영향을 주지 않는것을 확인하기 위함 입니다.

```javascript
// ./src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // StrictMode 로 동작 합니다.
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

```



<br /><hr /><br />



