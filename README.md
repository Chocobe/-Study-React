# React 스터디 저장소 입니다.

* 강의: [한입 크기로 잘라 먹는 리액트(React.js) : 기초부터 실전까지](https://www.inflearn.com/course/%ED%95%9C%EC%9E%85-%EB%A6%AC%EC%95%A1%ED%8A%B8)

* 강의 출처: 인프런 - 이정환 강사님



<br /><hr /><br />



# 01. ReactJs 입문

# 01-01. React 를 사용하는 이유

1. Component 기반으로 개발할 수 있습니다.
     * Component 기반이 아니라면, 서로 다른 페이지에 사용한 동일한 요소들, ``<header />``, ``<footer />`` 등을 각 페이지마다 동일한 코드를 작성해 주어야 합니다.
     * Component 기반으로 만들게 되면, 이러한 동일한 요소들을 개별 Component 로 만들고, 필요에 따라 조립하는 방식으로 사용할 수 있게 됩니다.

2. ``명령형 프로그래밍`` 이 아닌, ``선언형 프로그래밍`` 으로 개발할 수 있습니다.
     * ``JQuery`` 처럼 명령형 프로그램으로 개발하게 되면, 코드를 파악하기 어려워 집니다. 그래서 ``React`` 를 사용하여, ``선언형 프로그래밍`` 으로 개발을 하여, 코드의 의미전달을 좀 더 좋게 만들 수 있습니다.

3. ``React`` 는 ``Virtual DOM`` 을 사용하기 때문에, ``Rendering`` 과정을 효율적으로 할 수 있습니다.
     * ``DOM`` 을 변경하게 되면, 변경되는 요소 1개당 1번의 ``Rendering 전체`` 과정을 거치지만, ``Virtual DOM`` 을 사용하면, 변경되는 요소들을 ``Virtual DOM`` 에서만 적용해 본 후, 실제 ``DOM`` 과 달라지는 점을 ``일괄 Rendering`` 하기 때문에 성능을 향상시켜 줍니다.



<br /><hr /><br />



# 01-02. React 프로젝트 생성하기

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



<br /><hr /><br />



# 01-03. JSX

``JSX`` 문법은 ``Javascript`` 와 ``HTML`` 을 혼합한 형식을 가집니다.

그래서 ``JSX`` 의 추가적인 문법이 있습니다.



<br /><hr /><br />



# 01-03-01. Close Tag 필수

``<img>`` 나 ``<br>`` 같은 Tag 는 ``HTMl`` 에서 사용할 때, 굳이 ``</img>`` 나 ``</br>`` 같은 ``Close Tag`` 를 사용하지 않아도 되었습니다.

``JSX`` 에서는 ``Close Tag`` 는 필수로 작성해야 하며, Tag 의 ``body`` 를 사용하지 않는다면, ``Self Closing Tag`` 를 사용할 수 있습니다.

* ``<img />``
* ``<br />``


<br /><br />


# 01-03-02. 컴포넌트는 ``단일 부모`` 로 만들기

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


# 01-03-03. ``단일 부모`` 없이 컴포넌트 만들기

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


# 01-03-04. Tag 의 Class 는 ``className`` 으로 작성

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


# 01-03-05. inline style 사용하기

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


# 01-03-06. JSX 는 ``string``, ``number`` 만 출력가능

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



# 01-04. State (상태)

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



# 🚀 ``useState()`` 의 ``State (상태)`` 변경 시, 2번씩 ``re-rendering`` 되는 이유

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


# 01-05. Props

# 01-05-01. Props 기본

``Props`` 는 ``부모 컴포넌트`` 에서 ``자식 컴포넌트`` 로 데이터를 전달하는 방법 입니다.

``부모 컴포넌트`` 는 전달할 데이터를 ``자식 컴포넌트`` 의 ``attrs`` 로 넘겨줄 수 있습니다.

```javascript
// 부모 컴포넌트

import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  return (
    <div>
      <ChildComponent a={1} b={2} c={3} />
    </div>
  );
};
```

<br />

``자식 컴포넌트`` 에서는 ``Object`` 에 담겨 있는 ``Props`` 를 받을 수 있습니다.

```javascript
// 자식 컴포넌트

const ChildComponent = props => {
  console.log(props); // { a: 1, b: 2, c: 3 } 으로 받습니다.

  return (
    <div>Child Component</div>
  );
};

export default ChildComponent;
```

<br />

``부모 컴포넌트`` 에서 ``Props`` 를 전달할 때에는 ``Props`` 객체를 만들고, ``비구조화`` 방식으로 ``자식 컴포넌트`` 에 내려주면 코드를 깔끔하게 작성할 수 있습니다.

```javascript
// 부모 컴포넌트

import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const props = {
    a: 1,
    b: 2,
    c: 3,
  };

  return (
    <div>
      <ChildComponent {...props} />
    </div>
  )
}
```

<br />

``자식 컴포넌트`` 에서 받는 ``Props`` 는 ``Object`` 이므로, ``구조분해`` 로 사용할 수 있습니다.

```javascript
// 자식 컴포넌트

const ChildComponent = ({ a, b, c }) => {
  return (
    <div>
      <span>a: {a}</span>
      <span>b: {b}</span>
      <span>c: {c}</span>
    </div>
  );
};
```


<br /><br />


# 01-05-02. Props 의 default value 설정하기 (``defaultProps``)

``자식 컴포넌트`` 에서는 ``Props`` 의 ``default value`` 를 설정할 수 있습니다.

``default value`` 를 설정하게 되면, ``부모 컴포넌트`` 에서 ``Props`` 를 받지 못하여도 정상동작을 유도할 수 있습니다. (이경우 ``default value`` 를 사용하게 됩니다)

```javascript
// 자식 컴포넌트

const ChildComponent = ({ a, b, c }) => {
  return (
    <div>
      <span>a: {a}</span>
      <span>b: {b}</span>
      <span>c: {c}</span>
    </div>
  );
};

// Props 의 default value 설정
ChildComponent.defaultProps = {
  a: 1000,
  b: 2000,
  c: 3000,
};
```



<br /><hr /><br />



# 01-06. slot 사용하기

``부모 컴포넌트`` 는 ``Props`` 로 ``컴포넌트`` 도 전달할 수 있습니다.

``Vue`` 의 ``Slot`` 과 유사한 기능이지만, ``컴포넌트 body`` 를 통해서만 전달할 수 있습니다.

즉, ``Vue`` 의 ``default slot`` 만 제공합니다.

<br />

사용방법은 다음과 같습니다.

1. ``부모 컴포넌트`` 에서 ``자시 컴포넌트`` 의 ``body`` 영역에 ``컴포넌트`` 를 넘겨줍니다.
2. ``자식 컴포넌트`` 함수의 ``Props`` 에서 ``children`` 속성으로 받을 수 있습니다.

```javascript
// 부모 컴포넌트

const ParentComponent = () => {
  return (
    <ChildComponent>
      <h1>Hello World</h1>
    </ChildComponent>
  );
};
```

<br />

```javascript
// 자식 컴포넌트

const ChildComponent = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
};
```



<br /><hr /><br />




# 🔥 ``React`` 의 ``re-rendering`` 이 되는 3가지 상황

1. 컴포넌트 자신의 ``State (상태)`` 가 바뀌면 ``re-rendering`` 됩니다.
2. 부모로 부터 받은 ``Props`` 가 바뀌면 ``re-rendering`` 됩니다.
3. 부모가 ``Props`` 를 넘겨주지 않아도, 부모가 ``re-rendering`` 되면, 자식도 ``re-rendering`` 됩니다.



<br /><hr /><br />



# 02. React 기초

# 02-01. ``<input />`` 제어하기

``<input />`` 요소는 ``입력`` 과 ``입력 Event`` 를 사용하여 제어할 수 있습니다.

제어를 위한 ``Attrs`` 는 다음과 같습니다.

* ``value``: ``<input />`` 요소에 입력한 값
* ``change`` Event: ``<input />`` 에 값을 입력했을 때 발생하는 Event 입니다.

<br />

컴포넌트를 만들 때 주의할 점은, 입력값은 ``React`` 에서 제공하는 ``useState()`` 로 생성한 값을 사용하는 것 입니다.

이유는 ``useState()`` 로 만든 값이 변할 경우에, ``React`` 가 변화를 감지하고 ``DOM`` 을 ``re-rendering`` 해주기 때문 입니다.

```javascript
import { useState } from "react";

const MyInput = () => {
  const [myValue, setMyValue] = useState("입력 초기값");

  return (
    <input
      value={myValue}
      onChange={e => setMyValue(e.target.value)}
    />
  );
};

export default MyInput;
```



<br /><hr /><br />



# 02-02. 복수의 ``입력값`` 을 깔끔하게 제어하기

회원가입을 할 때, 사용자는 여러가지 데이터를 입력합니다.

``id``, ``password``, ``name``, ``skill grade`` 를 입력한다고 가정하면, 다음과 같은 ``interface`` 를 가질 수 있습니다.

```typescript
interface User {
  id: string;
  password: string;
  name: string;
  skillGrade: number;
}
```

<br />

위의 4가지 데이터를 따로 따로 제어한다면, 입력값 개수만큼의 ``state`` 와 ``SETTER`` 를 만들어야 합니다.

```javascript
import { useState } from "react";

const UserJoin = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [skillGrade, setSkillGrade] = useState(0);

  return (
    <div>
      <div className="userJoin">
        {/* ID 입력 요소 */}
        <div className="userJoin-inputWrapper">
          <label htmlFor="id">ID</label>
          <input
            id="id"
            value={id}
            onChanage={e => setId(e.target.value)}
          />
        </div>

        {/* Password 입력 요소 */}
        <div className="userJoin-inputWrapper">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        {/* ... Name, SkillGrade 생략 */}
      </div>
    </div>
  )
}
```

<br />

이와같이 동일한 객체의 맴버를 입력받을 경우, ``useState()`` 의 대상을 ``object`` 로 만들면 한번에 처리할 수 있습니다.

```javascript
import { useState } from "react";

const UserJoin = () => {
  const [user, setUser] = useState({
    id: "",
    password: "",
    name: "",
    skillGrade: 1,
  });

  /** target 의 ``name`` 속성에만, 입력받은 ``value`` 를 반영 합니다. */
  const onChangeUserInfo = e => {
    const { target: { name, value } } = e;

    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <div>
      <div className="userJoin">
        {/* ID 입력 요소 */}
        <div className="userJoin-inputWrapper">
          <label htmlFor="id">ID</label>
          <input
            name="id"
            id="id"
            value={user.id}
            onChange={e => onChangeUserInfo(e)}
          />
        </div>

        {/* Password 입력 요소 */}
        <div className="userJoin-inputWrapper">
          <label htmlFor="password">Password</label>
          <input
            name="password"
            id="password"
            value={user.password}
            onChange={e => onChangeUserInfo(e)}
          />
        </div>

        {/* ... Name, SkillGrade 생략 */}
      </div>
    </div>
  );
};
```



<br /><hr /><br />



# 02-03. ``useRef()`` 를 사용하여 ``DOM`` 제어하기

``DOM`` 요소를 제어하기 위해서는 특정 ``DOM`` 에 접근할 수 있어야 합니다.

``Vanila JS`` 에서는 ``document.querySelector()`` 등의 메서드를 사용하여 접근할 수 있습니다.

``React`` 에서는 ``useRef`` 를 사용하여 특정 ``DOM`` 요소에 접근할 수 있습니다.

```javascript
import { useRef } from "react";

const MyInput = () => {
  const $content = useRef();

  return <input ref={$content} />;
};

export default MyInput;
```

<br />

``useRef`` 를 사용하여 생성한 객체는 ``React.MutableRefObject`` 타입을 가지게 되는데, 이 객체를 ``DOM`` 의 ``ref`` 속성에 연결하여 사용할 수 있습니다.

``<input ref={$content} />``

<br />

이제 ``useRef()`` 로 생성한 객체로, 실제 ``DOM`` 객체에 접근해 보겠습니다.

``ReactMutableRefObject`` 의 속성 중, ``current`` 속성을 통해서 실제 ``DOM`` 객체에 접근할 수 있습니다.

```javascript
import { useRef } from "react";

const MyInput = () => {
  const $content = useRef();

  // 대상 <input /> 요소의 focus() 메서드 호출
  $content.current.focus();

  return <input ref={$content} />;
};

export default MyInput;
```

<br />

``useRef()`` 의 특징을 좀 더 살펴보겠습니다.

``useRef()`` 는 사실 ``DOM`` 참조만을 위한 것이 아닌, ``순수한 Container`` 를 만듭니다.

즉, ``class 의 property`` 역할을 하게 됩니다. (=== ``class 인스턴스 변수``)



<br />

그래서 ``useRef()`` 는 자유롭게 값을 바꿀 수 있고, ``Function React Component`` 내에서 자유롭게 사용하는 변수로 활용할 수 있으며, ``자식 요소`` 접근뿐만 아니라, ``내부 State`` 로 활용할 할 수도 있습니다.

예를들면, ``setInterval()`` 을 멈추기 위한 ``intervalId`` 를 저장할 때, ``useRef()`` 에 저장해도 됩니다.

```javascript
import React, {
  useRef,
  useEffect, // 02-07 에서 살펴볼 수 있습니다.
} from "react";

const MyComponent = () => {
  const intervalId = useRef();

  // 생성(Mount) 직후, 딱 1번만 호출 됩니다.
  useEffect(() => {
    interval.current = window.setInterval(() => {
      console.log("1초씩 console.log() 실행");
    }, 1000);

    // 파괴(Unmount) 직전, 딱 1번만 호출 됩니다.
    return () => {
      window.clearInterval(intervalId.current);
    };
  }, []);
};
```



<br /><hr /><br />



# 02-04. ``Array`` 를 ``DOM`` 요소로 만들기

``Array`` 는 복수의 데이터를 가지고 있습니다.

이 데이터들을 동일한 모습으로 나타내고자 한다면, 반복문 등을 사용하여 만들 수 있습니다.

일반적으로 ``Array`` 를 ``DOM`` 요소로 만들때는, ``Array.prototype.map()`` 을 사용합니다.

아래의 코드는 ``Array.prototype.map()`` 을 사용하는 예시 코드 입니다.

```javascript
const MyList = ({ list }) => {
  return (
    <div>
      {
        list.map((item, idx) => (
          <div>
            <div>ID: {item.id}</div>
            <div>작성자: {item.author}</div>
            <div>내용: {item.content}</div>
          </div>
        ))
      }
    </div>
  );
};
```

<br />

위와 같이 ``Array`` 데이터를 ``DOM`` 으로 만들 수 있습니다.

여기서 주의할 점은, 반복문을 사용하여 ``DOM`` 을 만들때는, ``key`` 라는 ``Props`` 를 지정해 주어야 합니다.

``key`` 는 반복문으로 만드는 ``DOM`` 요소의 고유값이 되며, ``key`` 값을 지정하지 않으면 에러가 발생합니다.

<br />

``key`` 값은 반복문 내의 고유값을 주면 되므로, ``index`` 값으로 지정할 수 있습니다.

만약, ``Array`` 의 각 요소가 ``고유값`` 을 가지고 있다면, ``index`` 보다는 ``고유값`` 을 ``key`` 로 넘겨주는 것이 더 좋습니다.

```javascript
// item.idx 를 key 로 사용한 예시

const MyList = ({ item }) => {
  return (
    <div>
      {
        list.map(item => {
          return (
            {/* item 의 고유값인 id를 key로 사용 */}
            <div key={item.id}>
              <div>ID: {item.id}</div>
              <div>작성자: {item.author}</div>
              <div>내용: {item.content}</div>
            </div>
          )
        })
      }
    </div>
  );
};
```



<br /><hr /><br />



# 02-05. 형제 컴포넌트간 데이터 통신하기

``React`` 에서 데이터 전달은 ``부모 => 자식`` 방향의 단방향 통신만 가능 합니다.

그래서 ``형제 컴포넌트`` 간의 데이터 통신이 필요할 경우, ``공통 부모 컴포넌트`` 를 통해서 데이터를 전달받아야 합니다.

이러한 데이터 구조를 ``Lifting state up (데이터 끌어올리기)`` 라고 합니다.

<br />

``Lifting state up (데이터 끌어올리기)`` 의 개념은 다음과 같습니다.
* 두 형제가 통신할 데이터를 ``부모 컴포넌트`` 에서 ``정의`` 합니다.
    * 정의할 데이터는 ``useState()`` 를 통해서 ``[state, setState]`` 형태로 만듭니다.
* 데이터를 생성할 컴포넌트에 ``setState()`` 를 ``Props`` 로 넘겨줍니다.
    * ``setState`` 는 ``Event Handler`` 역할을 하게 됩니다.
* 데이터를 받을 컴포넌트에 ``state`` 를 넘겨줍니다.

<br />

위와같이 구성하게 되면, ``setState()`` 가 호출되면서 변경되는 ``state`` 가 ``형제 컴포넌트`` 의 ``Props`` 이므로, 변경된 데이터가 ``형제 컴포넌트`` 에 전달되게 됩니다.

아래 코드예시의 구조는 다음과 같습니다.

```bash
── Parent.js
      ├─ Editor.js (데이터 생성 역할)
      └─ Viewer.js (데이터 뷰어 역할)
```

<br />

```javascript
// Parent.js

import { useState } from "react";

const Parent = () => {
  const [state, setState] = useState([]);

  onCreate = ({ author, content }) => {
    const newItem = { author, content };
    setState([newItem, ...state]);
  };

  return (
    <div className="parent">
      <Editor onCreate={onCreate} />
      <Viewer state={state} />
    </div>
  );
};

export default Parent;
```

<br />

```javascript
// Editor.js

import { useState, useRef } from "react";

const Editor = ({ onCreate }) => {
  const $author = useRef();
  const $content = useRef();

  const [newItem, setNewItem] = useState({
    author: "",
    content: "",
  });

  const onInputItem = ({ target: { name, value } }) => {
    setNewItem({
      ...newItem,
      [name]: value,
    });
  };

  const onSubmit = () => {
    onCreate(newItem);
  };

  return (
    <div className="editor">
      <div className="editor-author">
        Author: 
        <input
          name="author"
          ref={$author}
          value={newItem.author}
          onInput={e => onInputItem(e)}
        />
      </div>

      <div className="editor-content">
        Content
        <input
          name="content"
          ref={$content}
          value={newItem.content}
          onInput={e => onInputItem(e)}
        />
      </div>

      <div className="submit">
        <button onClick={onSubmit}>Item 추가</button>
      </div>
    </div>
  );
};
```

<br />

```javascript
// Viewer.js

const Viewer = ({ state }) => {
  return (
    <ul>
      {
        state.map((item, idx) => {
          return (
            <li key={idx}>
              <h3>Author: {item.author}</h3>
              <p>Content: {item.content}</p>
            </li>
          );
        })
      }
    </ul>
  );
};
```

<br />

위 코드의 흐름을 정리하면 다음과 같습니다.

1. ``Parent`` 컴포넌트에서 ``[state, setState]`` 를 생성합니다.
2. 새로운 데이터 추가시 호출할 함수인 ``onCreate()`` 함수를 작성 합니다.
3. ``Editor`` 컴포넌트에 ``onCreate()`` 메서드를 ``Props (Event Listener 역할)`` 로 넘겨 줍니다.
4. ``Editor`` 는 ``제출하기`` 버튼을 클릭 할 때, 부모 컴포넌트에서 받은 ``onCreate()`` 함수를 호출 합니다.
    * 이 때, 부모 컴포넌트의 ``state`` 가 추가됩니다.
5. ``Viewer`` 컴포넌트는 ``Props`` 로 ``state`` 를 받아서 리스트로 보여주도록 합니다.
6. ``state`` 가 변경되면, ``Viewer`` 컴포넌트도 ``re-rendering`` 됩니다.



<br /><hr /><br />



# 02-06. 프로퍼티 내리꽂기 (``Prop Drilling``)

자식 컴포넌트는 부모 컴포넌트로 부터 ``Props`` 를 받을 수 있습니다.

``Prop Drilling`` 은 부모 컴포넌트에서 받은 ``Props`` 를 자기 자신은 사용하지 않지만, 자신의 ``자식 컴포넌트 (손자)`` 에 넘겨주기만 하는 ``Props`` 전달방식을 의미 합니다.

```bash
── 부모 컴포넌트
      │ : Props를 내려줍니다.
      │
      └─ 자식 컴포넌트
            │ : 전달받은 Props 를 직접 사용하지는 않습니다.
            │ : Props 를 그대로 손자 컴포넌트 에 넘겨줍니다.
            │
            └─ 손자 컴포넌트
                  : 전달받은 Props 를 직접 사용합니다.
                  : 즉, 최상위 부모 컴포넌트의 Props 를 사용하게 됩니다.
```



<br /><hr ><br />



# 02-07. React Life Cycle (생명주기)

컴포넌트는 생명주기(``Lifecycle``) 을 가집니다.

* 생성(``Mount``)
    * 컴포넌트가 처음 생성되어 ``DOM`` 에 ``Rendering`` 된 직후 시점 입니다.
* 변화(``Update``)
    * 컴포넌트의 ``Props`` 나 ``state`` 가 바뀌어 ``DOM`` 이 ``Re-rendering`` 된 직후 시점 입니다.
* 파괴(``Unmount``)
    * 컴포넌트가 파괴되기 ``직전`` 시점 입니다.

<br />

``React`` 컴포넌트를 만들 때, 이러한 ``Lifecycle`` 은 유용한 ``Side Effect`` 를 작성할 수 있게 해줍니다.



<br /><hr /><br />



# 02-07-01. ``React Hooks`` 를 사용하게 된 배경

``React Hooks`` 는 ``(2019년) 16.8버전`` 부터 사용할 수 있게 되었습니다.

그 전에는 ``Class React Component`` 방식으로 컴포넌트를 작성 하였고, ``Lifecycle`` 을 분리된 형태로 작성해야 하였습니다.

```javascript
class MyComponent extends React.Component {
  componentDidMount() {
    // 생성(Mount) 직후 시점에 호출
  }

  componentDidUpdate() {
    // 변화(Update) 직후 시점에 호출
  }

  componentWillUnmount() {
    // 파괴(Unmount) 직전 시점에 호출
  }
}
```

<br />

위와같은 ``Class React Component`` 의 문제점은, 각 ``Lifecycle`` 에 필요한 로직을 작성해야 하는 상황에서, 개발자가 실수로 어느 한가지를 놓칠 수 있다는 점 입니다.

대표적인 예시로, ``componentWillUnmount()`` 를 작성하지 않게되어, ``Memory Leak(메모리 누수)`` 현상이 있습니다.

<br />

``React Hooks`` 이전의 ``Function React Component`` 는 ``Stateless Component`` 로 불렀습니다.

이유는, ``Function React Component`` 의 특성상 ``re-rendering`` 될 때, ``함수내의 모든 코드`` 가 실행되기 때문입니다.

즉, ``Function React Class`` 의 ``함수내의 모든 코드`` 가 실행되면서, ``Scope`` 변수는 매번 초기화가 되므로, ``상태`` 를 유지하지 못하게 됩니다.

그래서 ``React Hooks`` 이전의 ``Function React Component`` 를 ``Stateless Component`` 라고 불렀습니다.

<br />

소개한 2가지 ``React Hooks`` 탄생 배경을 정리하면 다음과 같습니다.

1. ``Class React Component`` 의 ``Lifecycle`` 은 각각 독립적으로 구성되므로, 개발자의 실수 및 버그발생 소지가 됩니다.
2. ``React Hooks`` 를 사용해야지만 ``Function React Component`` 가 ``State`` 를 가질 수 있습니다.

<br />

이러한 문제점이 ``React Hooks`` 가 탄생하게된 배경이 되었습니다.



<br /><br />



# 02-07-02. ``React Component`` 를 만들수 있는 방법 2가지

현재 ``React Component`` 를 만들수 있는 방법은 총 2가지가 있습니다.

* ``Class React Component``
* ``Function React Component``

<br />

``React 16.8`` 버전에서 사용할 수 있게된 ``React Hooks`` 를 사용할 수 있게 되면서, ``Function React Component`` 방식으로 개발할 수 있게 되었습니다.

이유는 ``함수`` 자체로는 ``React Lifecycle`` 와 ``State`` 를 만들 수 없지만, ``React Hooks`` 를 사용하면 ``Class React Component`` 의 모든 ``Lifecycle`` 과 ``State`` 를 사용할 수 있게 됩니다.

<br />

아래 코드는 ``Class React Component`` 와 ``Function React Component`` 예시 코드 입니다.

```javascript
// Class React Component

class ClassComponent extends React.Component(
  constructor(props) {
    // 생성자
  }

  componentDidMount() {
    // 생성(Mount) 직후 호출 됩니다.
  }

  componentDidUpdate() {
    // 변화 (Update) 직후 호출 됩니다.
  }

  componentWillUnmount() {
    // 파괴 (Unmount) 직전 호출 됩니다.
  }
)
```

<br />

```javascript
// Function React Component

import React, {
  // Lifecycle 
  useEffect,
  useState,
} from "react";

const FunctionComponent = props => {
  // 생성 (Mount) 직후 시점에 호출 됩니다.
  useEffect(() => {
    // 2번째 인자에 ``빈 배열`` 을 넘겨준 형식
  }, []);

  // 변화 (Update) 직후 시점에 호출됩니다.
  useEffect(() => {
    // 2번째 인자를 넘겨주지 않는 형식
  });

  // 파괴 (Unmount) 직전 시점에 호출됩니다.
  useEffect(() => {
    return () => {
      // Unmount 시점에 호출되는 Callback 함수 입니다.
    };
  });

  // useState() 를 사용하면, State 를 유지할 수 있습니다.
  const [count, setCount] = useState(0);

  // 특정 State 변화 (Update) 직후에만 호출됩니다.
  useEffect(() => {
    // 2번째 인자에 ``대상 State`` 를 넘겨줍니다.
  }, [count]);
}
```



<br /><br />



# 02-07-03. ``React Hooks`` 를 사용한 ``State (상태)`` 만들기

``Function React Component`` 에 ``State (상태)`` 를 지정하려면, ``useState`` 를 사용하여 만들 수 있습니다.

```javascript
import React, {
  useState,
} from "react";

const MyComponent = _props => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={setCount(count + 1)}>카운트 증가</button>
    </div>
  );
};
```

<br />

위와 같이 ``useState()`` 를 사용하여야, ``Function React Component`` 의 ``State (상태)`` 를 유지할 수 있습니다.



<br /><br />



# 02-07-04. ``React Hooks`` 를 사용한 ``Lifecycle (생명주기)`` 만들기

``Lifecycle`` 은 ``useEffect()`` 로 모든 ``Lifecycle`` 을 만들 수 있습니다.

사용방법은 ``useEffect()`` 를 어떻게 구성하느냐에 따라서 다른 ``Lifecycle`` 이 됩니다.

``useEffect()`` 의 ``interface`` 를 살펴보면 다음과 같습니다.

```typescript
function useEffect(
  effect: EffectCallback,
  deps: DependencyList
): void;
```

<br />

각 ``Lifecycle`` 에 대한 ``Side Effect`` 를 만든 예시코드는 다음과 같습니다.

```javascript
// ``생성 (Mount)``

import React, {
  useEffect,
} from "react";

const MyComponent = _props => {
  useEffect(() => {
    // ``deps (2번째 인자)`` 에 빈 Array 를 넘겨주면, 
    // ``생성 (Mount)`` 직후 시점에 딱 1번만 호출 됩니다.
  }, []);
};
```

<br />

```javascript
// ``변화 (Update)``

import React, {
  useEffect,
} from "react";

const MyComponent = _props => {
  useEffect(() => {
    // ``deps (2번째 인자)`` 를 넘겨주지 않으면,
    // 이 컴포넌트가 ``re-rendering`` 될 때마다 호출 됩니다.
  });
};
```

<br />

```javascript
// ``파괴 (Unmount)``

import React, {
  useEffect,
} from "react";

const MyComponent = _props => {
  useEffect(() => {
    // ``effect (1번째 Callback 인자)`` 에서 ``함수 반환`` 시,
    // ``파괴 (Unmount)`` 시점에 ``반환된 함수`` 가 호출 됩니다.

    return () => {
      // ``파괴 (Unmount)`` 시점에 딱 1번만 호출 됩니다.
    };
  });
};
```

<br />

```javascript
// 특정 ``State`` 의 ``변화 (Update)``

import React, {
  useState,
  useEffect,
} from "react";

const MyComponent = _props => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    // ``deps (2번째 인자)`` 에 변화감지 대상 ``State`` 를
    // 배열로 묶어 넘겨주면,
    // 해당 ``State`` 가 ``변화 (Update)`` 될 때만 호출 됩니다.
  }, [count]);
};
```

<br />

지금까지 살펴본 ``useEffect`` 를 공식문서에서는 다음과 같이 설명 합니다.

> * ``useEffect()`` 는 ``Rendering`` 이후 호출되는 ``Function`` 입니다.
> * ``useEffect()`` 는 ``componentDidMount()``, ``componentDidUpdate()``, ``componentWillUnmount()`` 가 합쳐진 것으로 생각해도 좋습니다.
> * ``useEffect()`` 는 브라우저가 화면을 업데이트하는 것을 차단하지 않으므로, ``동기적`` 으로 실행될 필요는 없습니다.
> 만약 ``Layout`` 을 측정할 필요가 있을 경우 (``Element.getBoundingClientRect()``), ``useLayoutEffect()`` 라는 별도의 ``Hook`` 을 사용합니다.
> ``Hook`` 에서 여러가지 관심사를 처리해야 할 경우, 복수의 ``Hook`` 을 사용할 수 있습니다. (``관심사의 분리``)
> ``Hook`` 은 ``메모리`` 를 사용하기 때문에, 남용할 경우 ``성능저하`` 의 원인이 될 수 있습니다.



<br /><hr /><br />



# 02-08. React Developer Tools (React 개발자 도구)

``React Developer Tools`` 는 ``React`` 개발에 유용한 ``Chrome Extension`` 입니다.

``Extension`` 설치 방법은 다음과 같습니다.

1. ``Chrome 웹 스토어`` 검색 => 열기
2. 우측 상단의 검색창에 ``react developer tools`` 검색 => 열기
3. ``Chrome에 추가`` 버튼으로 ``Install`` 하기

<br />

``localhost`` 에서 ``React`` 개발 시, ``React Developer Tools`` 를 사용하기 위해서는 ``Chrome 확장 설정`` 에서 다음과 같은 설정을 해주어야 합니다.

1. 브라우저의 ``확장 프로그램 관리`` 열기
2. ``React Developer Tools`` 항목의 ``세부정보`` 열기
    1. ``사이트 액세스`` 를 ``모든 사이트에서`` 로 설정
    2. ``파일 URL에 대한 엑세스 허용`` 을 ``활성화`` 설정

<br />

설치한 ``React Developer Tools`` 는 ``개발자 도구 (F12)`` 에서 사용할 수 있습니다.

각 컴포넌트의 ``계층구조`` 나 ``State (상태)`` 등을 실시간으로 확인할 수 있습니다.

<br />

``React Developer Tools`` 의 기능 중 ``components`` 의 ``re-rendering`` 중인 컴포넌트를 ``강조`` 해주는 기능도 유용합니다.

해당 기능은 ``components Tab`` 의 설정을 해주어야 합니다.

1. 개발자 도구의 ``components Tab`` 을 클릭
2. 우측 상단의 ``설정 아이콘`` 클릭
3. ``General Tab`` 클릭
4. 옵션 중, ``Highlight update when components render.`` 를 ``활성화`` 설정



<br /><hr /><br />



## 02-09. useMemo() 를 사용한 연산 최적화

``useMemo()`` 는 값을 반환하는 함수에 ``Memoization 된 값`` 을 반환해 줍니다.

값을 반환하는 함수의 연산을 매번 실행하는 것이 아닌, 연산이 필요할 때만 다시 연산하게 됩니다.

즉, 불필요한 연산을 줄일 수 있어서 ``연산 최적화`` 방법으로 ``useMemo()`` 를 사용합니다.

* ``Vue`` 의 ``computed`` 와 유사한 기능을 합니다.

<br />

``useMemo()`` 의 ``interface`` 는 다음과 같습니다.

```typescript
function useMemo<T>(
  // 수행할 연산 함수
  factory: () => T,

  // 재 연산의 Trigger 가 될 대상 변수
  // deps 에 속한 값이 변경되면, factory() 연산을 다시 수행합니다.
  deps: DependencyList
);
```

<br />

그리고 ``useMemo()`` 를 사용한 결과값을 사용할 때는, 변수로 사용하게 됩니다.

이는 연산을 하는 함수지만, 최종 결과값은 ``Memoization`` 된 값을 반환하기 때문입니다.

<br />

아래의 코드는 ``useMemo()`` 사용하여, ``배열 개수`` 가 변할 때, 연산을 실행하도록 합니다.

```javascript
import React, {
  useState,
  useMemo,
} from "react";

const MyComponent = () => {
  const [data, setData] = useState([
    { id: 1, name: "초코비" },
    {id: 2, name: "Chocobe" },
  ]);

  // Memoization 을 적용할 함수
  const countString = () => {
    return `데이터 개수는 ${data.length} 개 입니다.`;
  };

  useMemo(getCountString, [data.length]);

  return (
    <div>
      {countString}
    </div>
  );
};

export default MyComponent;
```



<br /><hr /><br />



<br /><hr /><br />



# (정리해야할 메모 - 이후 강좌에서 언급 예정)

* ``Prop Drilling`` 으로 ``Props`` 을 하용하는 경우 ``Props`` 명을 바꾸게 되면, 관련된 모든 파일을 직접 수정해야하는 불편함이 있다.