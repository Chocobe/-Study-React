# 리액트를 다루는 기술

``React`` 에 대해 좀 더 자세히 알기위한 스터디 입니다.



<br /><hr /><br />



# 01. React Lifecycle

``React`` 의 ``Lifecycle`` 은 총 9가지가 있습니다.

1. ``constructor()``
    * ``Class Component`` 의 ``생성자`` 입니다.
    * 컴포넌트를 처음 생성할 때 호출합니다.
    * 호출 생명주기: ``마운트 생명주기``

2. ``getDerivedStateFromProps(nextProps, prevState)``
    * 부모 컴포넌트로 부터 받은 ``Props`` 를 자신의 ``State`` 에 넣습니다.
    * 인수가 헷갈릴 수 있습니다.
      * ``nextProps``: 새로 받는 Props
      * ``prevState``: 이전 State
    * 호출 생명주기: ``마운트 생명주기``, ``업데이트 생명주기``

3. ``render()``
    * 컴포넌트를 화면에 그립니다.
    * 호출 생명주기: ``마운트 생명주기``, ``업데이트 생명주기``, ``forceUpdate()`` 호출 시

4. ``componentDidMount()``
    * 컴포넌트가 ``마운트 완료`` 된 시점에 호출합니다.
    * 호출 생명주기: ``마운트 생명주기``

5. ``shouldComponentUpdate(nextProps, nextState)``
    * ``boolean`` 을 반환하는 메서드로, ``false`` 를 반환하는 경우에는 ``업데이트 종료`` 가 됩니다.
    * ``true`` 반환: 업데이트 실행
    * ``false`` 반환: 업데이트 종료
    * 호출 생명주기: ``업데이트 생명주기``

6. ``getSnapshotBeforeUpdate(prevProps, prevState)``
    * ``render()`` 메서드의 결과물이 브라우저에 실제로 반영되기 진적에 호출합니다.
    * 호출 생명주기: ``업데이트 생명주기``

7. ``componentDidUpdate()``
    * 컴포넌트의 업데이트가 완료된 직 후 호출합니다.
    * 호출 생명주기: ``업데이트 생명주기``

8. ``componentWillUnmount()``
    * 컴포넌트를 ``DOM`` 에서 제거하기 직전에 호출합니다.
    * 호출 생명주기: ``언마운트 생명주기``

9. ``componentDidCatch(error, info)``
    * 자식 컴포넌트의 ``렌더링 도중`` 에러가 발생하면 호출됩니다.
    * 자신의 ``렌더링 도중`` 발생하는 에러에는 호출되지 않습니다.



<br /><hr /><br />



# 01-01. Mount Lifecycle

1. ``constructor()``
2. ``getDerivedStateFromProps()``
3. ``render()``
4. ``componentDidMount()``



<br /><hr /><br />



# 01-02. Update Lifecycle

1. ``getDerivedStateFromProps()``
2. ``shouldComponentUpdate(nextProps, nextState)``
3. ``render()``
  * ``forceUpdate()`` 호출 시, 시작점
4. ``getSnapshotBeforeUpdate(prevProps, prevState, snapshot)``
5. ``componentDidUpdate()``



<br /><hr /><br />



# 01-03. Unmount Lifecycle

1. ``componentWillUnmount()``



<br /><hr /><br />



# 01-04. 자식컴포넌트의 ``render()`` 에서 에러 발생 시

1. ``componentDidCatch(error, info)``



<br /><hr /><br />



# 02. 컴포넌트 최적화 하기

컴포넌트의 불필요한 ``re-rendering`` 을 막으므로 웹 페이지를 최적화 할 수 있습니다.

먼저 컴포넌트가 ``re-rendering`` 되는 조건을 살펴보면 다음과 같습니다.

* 컴포넌트 자신의 ``state`` 가 바뀔 때,
* 부모로 부터 받은 ``props`` 가 바뀔 때,
* 부모 컴포넌트가 ``re-rendering`` 될 때,
* ``forceUpdate()`` 가 호출될 경우,

<br />

우리가 최적화를 위해 작업할 항목은 다음과 같습니다.

* 컴포넌트의 ``Memoization`` 적용하기 
    * ``React.memo(컴포넌트)``
* 부모 컴포넌트에서 ``props`` 로 내려주는 ``handler`` 최적화 하기
    * ``useCallback(handler)``
    * ``handler`` 내부에서 사용하는 ``state SETTER`` 를 ``함수형`` 으로 변경하기
    * 또는 ``useReducer`` 로 변경하기

<br />

위의 최적화 과정에서 ``state SETTER`` 로 바꾸는 방법을 사용할 경우, 인지해야 할 것이 있습니다.

``useCallback`` 을 적용한 함수 내부에서 참조하는 ``state 의존성`` 을 제거하는 것 입니다.

해당 ``state`` 를 그대로 의존하고 있다면, 결국 ``state`` 변경시 마다 ``useCallback`` 도 새로 생성하게 되기 때문입니다.

이러한 이유로, ``State 의존성`` 을 ``state SETTER`` 로 변경하는 것 입니다.



<br /><hr /><br />



# 03. ``immer`` 라이브러리를 사용하여, ``State 불변성`` 유지하기

React 컴포넌트는 자신의 ``state`` 가 변경되면 ``re-rendering`` 합니다.

이러한 동작은 ``state`` 의 ``전/후`` 를 비교하여, 서로 다를 경우에만 ``re-rendering`` 하는 방식 입니다.

중요한 점은 ``state`` 의 ``참조값`` 만을 비교하기 때문에, ``state`` 의 내부값만 변경되는 경우는 ``re-rendering`` 되지 않습니다.

즉, ``state`` 의 일부분만 변경하게 되면, 화면에 반영되지 않습니다.

<br />

이러한 원리로 인해 ``state`` 를 변경하려면, ``state`` 를 ``깊은복사`` 한 후, 값을 변경하고 ``setState()`` 로 넘겨주게 됩니다.

<br />

깊이가 깊은 ``Object`` 를 ``state`` 로 사용한다면, ``깊은복사`` 를 하기에 많은 작업이 필요합니다.

그래서 ``lodash.copyDeep()`` 으로 복사한 후, 값을 변경하여 ``setState()`` 로 넘겨주면 좀 더 쉽게 만들 수 있습니다.

<br />

이번에 정리할 ``immer`` 라이브러리는 ``lodash.copyDeep()`` 보다 더 간결하게 ``불변성`` 을 유지할 수 있게 해줍니다.

``immer`` 는 ``state 불변성`` 을 위한 라이브러리 입니다.

<br />

사용 예시는 다음과 같습니다.

```javascript
import { useState, useCallback } from "react";
import produce from "immer";

const MyApp = () => {
  const [data, setData] = useState({
    arr: [
      {
        name: "이름 1",
        value: 111,
      },
      {
        name: "이름 2",
        value: 222,
      },
    ],
    something: {
      someId: 123,
      someValue: "Hello immer",
    },
    job: "programmer",
    lib: [
      "react",
      "immer",
    ],
  });

  const [form, setForm] = useState({
    name: "",
    value: 0,
  });

  const onChange = useCallback(e => {
    const { name, value } = e.target;

    setForm(
      // 깊은복사된 form 객체에 변경된 값이 반영된 결과 객체가 반환 됩니다.
      // draft 는 form 객체를 깊은복사한 객체 입니다.
      // draft 를 통해 직접 property 값을 변경 합니다.
      // 함수형 업데이트 함수가 반환 됩니다.
      // 반환값: (form) => {}
      produce(draft => {
        draft[name] = value;
      })
    );
  });

  const onSubmit = useCallback(e => {
    e.preventDefault();

    const { name, value } = form;
    const info = { name, value };

    setData(
      // 마찬가지로, drawft.arr 의 배열에 push 를 사용하여, 직접 값을 추가 합니다.
      produce(draft => {
        draft.push(info);
      })
    );
  });

  return (
    <>...</>
  );
};

export default MyApp;
```


<br /><hr /><br />



# 04. Redux 기초

``React`` 는 ``Context API`` 를 사용하여 상태관리를 할 수 있습니다.

``Context API`` 는 작은 단위의 전역 상태관리에 사용할 때는 유용하지만, 큰 단위가 되면 사용성과 유지보수에 어려움이 있습니다.

<br />

그래서 ``React`` 의 전역 상태관리에는 ``Redux`` 라는 라이브러리를 사용합니다.

``Redux`` 의 구조를 살펴보면 다음과 같습니다.

* ``Action``
* ``reducer()``
* ``Store``
* ``dispatch``
* ``subscribe()``



<br /><hr /><br />



# 04-01. Redux - ``Action`` (액션)

``Action`` 객체는 전역 상태를 어떻게 변경할 것인지에 대한 정보를 담는 객체 입니다.

``Action`` 객체의 특징으로는 ``type: string`` Property 를 필수로 가지고 있어야 한다는 점 입니다.

이유는 ``Action`` 객체를 실제로 사용하게 될 함수가 ``reducer()`` 인데, ``reducer()`` 내부에서 동작을 분기하는 기준이 ``type`` Property 이기 때문입니다.

<br />

간단히 사용할 때는 ``Action`` 객체를 직접 만들어 사용하지만, 객체 생성의 실수나 유지보수를 위해서 ``함수`` 로 만들어 사용합니다.

```javascript
// Todo 추가를 위한 Action 생성 함수
const addTodo = data => ({
  type: "ADD_TODO",
  data,
});

// input 값을 변경하는 Action 생성 함수
const changeInput = value => ({
  type: "CHANGE_INPUT",
  value,
});
```



<br /><hr /><br />



# 04-02. Redux - ``reducer()`` (리듀서)

``reducer()`` 함수는 전역 상태값을 변경시키는 함수 입니다.

전달받은 ``Action`` 의 ``type`` 에 따라 상태값을 변경 시킵니다.

```javascript
const myReducer = (state, action) => {
  const { type } = action;

  switch (type) {
    case "ADD_TODO": {
      // ... 전역 state 에 Todo 를 추가하는 동작
      return {/* ... */};
    }

    case "CHANGE_INPUT": {
      // input 값을 변경하는 동작
      return {/* ... */};
    }

    default: {
      return state;
    }
  }
};
```


<br /><hr /><br />



# 04-03. Redux - ``Store`` (스토어)

전역 상태관리를 위한 ``Redux`` 의 본체입니다.

``Store`` 는 ``전역 상태값`` 과 ``reducer()`` 함수를 가지고 있습니다.

그리고 몇가지 ``내장 함수`` 를 제공 합니다.


<br /><hr /><br />



# 04-04. Redux - ``dispatch()`` (디스패치)

``dispatch()`` 는 ``Store`` 에서 제공하는 내장함수 입니다.

전역 상태값을 변경하기 위해 우리가 실제로 호출할 함수가 바로 ``dispatch()`` 입니다.

``dispatch(action)`` 형식으로 ``Action`` 객체를 넘겨주면, ``dispatch()`` 함수는 ``reducer()`` 를 호출하며 전역 상태값이 변경됩니다.



<br /><hr /><br />



# 04-05. Redux - ``subscribe()`` (구독)

``subscribe()`` 도 ``Store`` 의 내장함수 입니다.

``subscribe(listener)`` 형식으로 ``callback 함수`` 를 넘겨주면, ``Store`` 의 전역 상태값이 업데이트 될 때마다 ``listener()`` callback 을 호출해 줍니다.

```javascript
// Store 의 전역 상태값이 업데이트 될 때마다 호출될 callback 함수
const listener = () => {
  console.log("전역 상태값이 업데이트 되었습니다.");
};

// subscribe() 호출 시, unsubscribe() 함수를 반환 받습니다.
const unsubscribe = store.subscribe(listener);

// 이후, 구독 해제를 할 경우, unsubscribe() 로 할 수 있습니다.
unsubscribe();
```



# 04-06. Redux - Store 만들기

``Redux`` 로 만드는 ``Store`` 는 프로젝트당 ``오직 1개`` 만 만들 수 있습니다.

아래에 정리한 ``Store`` 만드는 방법은 ``redux@4.1.2`` 까지 해당하며, ``redux@4.2.x`` 이상 버전에서는 사용방법이 달라졌습니다.

그러므로 아래의 예시를 사용하기 위해서는 ``redux`` 버전을 낮추어야 합니다.

```bash
$ yarn add redux@4.1.2

# 또는

$ npm i redux@4.1.2
```


<br /><br />


``redux@4.1.2`` 버전의 ``Store`` 만들기 위한 작업 순서는 다음과 같습니다.

1. ``Action`` 타입(이름) 정하기
2. ``Action`` 객체 생성 함수 만들기 (Factory Function)
3. ``Store State 초기값`` 만들기
4. ``reducer()`` 함수 만들기
5. ``Store`` 객체 생성하기
6. ``render()`` 함수 만들기
7. ``subscribe()`` 로 구독하기
8. 액션 발생시키기

<br />

이제 각 단계를 통해 ``Store`` 를 만들어 보겠습니다.



<br /><hr /><br />



# 04-06-01. ``Action`` 타입 정하기

``Action`` 타입이란, ``Store 변화`` 를 시키기 위한 동작을 의미 합니다.

``redux`` 는 ``Action`` 을 통해서 수행할 동작을 분기처리 하게 됩니다.

분기처리의 기준점은 ``Action`` 객체의 ``type`` 속성이며, ``Action 타입`` 이란, ``type`` 이름을 정하는 단계가 됩니다.

일반적으로 ``Action 타입`` 은 ``대문자`` 로 사용하며, 다음과 같이 작성합니다.

```javascript
const TOGGLE_SWITCH = "TOGGLE_SWITCH";
const INCREASE_COUNTER = "INCREASE_COUNTER";
const DECREASE_COUNTER = "DECREASE_COUNTER";
```



<br /><hr /><br />



# 04-06-02.``Action`` 객체 생성 함수 만들기 (Factory Function)

``Action`` 객체를 만들 때, 직접 만들어도 무방합니다.

하지만, ``Store`` 를 여러곳에서 팀원들과 함께 사용하게 되면, 잘못된 형태나 실수들이 발생할 수 있습니다.

이러한 이슈를 미연에 방지하기 위해, ``Action`` 객체를 생성하는 ``Factory Function`` 으로 정의하여 사용합니다.

```javascript
const toggleSwitch = () => ({
  type: TOGGLE_SWITCH,
});

const increaseCounter = difference => ({
  type: INCREASE_COUNTER,
  difference,
});

const decreaseCounter = difference => ({
  type: DECREASE_COUNTER,
  difference,
});
```


<br /><hr /><br />



# 04-06-03. ``Store State 초기값`` 만들기

``Store`` 의 초기 상태값은 ``undefined`` 입니다.

그래서 초기값을 설정해주기 위한 과정입니다.

```javascript
const initialState = {
  toggle: false,
  counter: 0,
};
```



<br /><hr /><br />



# 04-06-04. ``reducer()`` 함수 만들기

``reducer()`` 함수는 ``Store State`` 를 실제로 변화시키는 동작을 합니다.

그래서 우리가 ``Store State`` 상태를 어떻게 바꿀 것인지 정의하는 함수가 ``reducer()`` 입니다.

<br />

``reducer()`` 함수는 ``2개`` 의 params 를 받게 되며 다음과 같습니다.

```typescript
const reducer = (
  state: Store상태값 = initialState, // state 초기값 지정
  action: {
    type: string;
    ...그 외 전달할 Properties
  }
) => {
  switch (action.type) {
    case Action타입: {
      // do something;

      return {
        // 갱신할 State 값들
      };
    }

    default: {
      return state;
    }
  }
};
```


<br /><hr /><br />



# 04-06-05. ``Store`` 객체 생성하기

드디어 ``Store`` 객체를 생성하기 위한 준비가 되었습니다.

``Store`` 객체는 ``createStore()`` 함수를 사용하여 만들 수 있습니다.

> ``createStore()`` 함수는 ``redux@4.1.2`` 까지만 지원하며, ``redux@4.2.x`` 이상 버전에서는 사용할 수 없습니다.
> ``redux@4.2.x`` 이상 => ``configureStore()`` 를 사용

<br />

```javascript
import { createStore } from "redux";

/**
 * @type { import("redux").Store<{
 *  toggle: boolean;
 *  counter: number;
 * }> }
 */
const store = createStore(reducer);
```



<br /><hr /><br />



# 04-06-06. ``render()`` 함수 만들기

이번에 만들 ``render()`` 함수는, ``React 컴포넌트`` 의 ``render()`` 함수와는 다른 역할의 함수입니다.

``Store State`` 가 변경될 때마다 호출될 ``callback`` 이며, ``Store State`` 변경값을 ``HTML Tag`` 에 반영시키는 역할을 하게 됩니다.

즉, ``React 컴포넌트`` 의 ``render()`` 함수와 전혀 다른 함수라는 것을 인지해야 합니다.

```javascript
const divToggle = document.querySelector("#toggle");
const divCounter = document.querySelector("#counter");

const render = () => {
  const state = store.getStore();

  // divToggle 요소에 state.toggle 값 반영하기
  state.toggle
    ? divToggle.classList.add("active")
    : divToggle.classList.remove("active");

  // divCounter 요소에 state.counter 값 반영하기
  divCounter.innerText = state.counter;
};
```



<br /><hr /><br />



# 04-06-07. ``subscribe()`` 로 구독하기

``Store state`` 의 값이 바뀔 때 마다 위에서 작성한 ``render()`` 함수가 호출되었으면 좋겠습니다.

그래서 ``store`` 객체의 ``subscribe(callback)`` 를 통해서 ``render()`` 함수를 지정해 주어야 합니다.

```javascript
// render() 함수가 호출되도록, Store 구독하기
const unsubscribe = store.subscribe(render);

// 구독 취소가 필요하다면, unsubscribe() 호출하기
unsubscribe();
```



<br /><hr /><br />



# 04-06-08. 액션 발생시키기

위 단계로 ``Store`` 를 생성하였습니다.

마지막으로 ``Store`` 의 값을 바꾸기 위해 액션을 발생시켜 보겠습니다.

<br />

``createStore()`` 로 생성한 ``store`` 는 내장함수를 제공합니다.

내장함수 중, ``dispatch()`` 함수를 통해서 ``State`` 를 변경시킬 수 있습니다.

``dispatch(action)`` 으로 호출하게 되면, 우리가 작성했던 ``reducer`` 에서 ``action`` 을 받아서 ``Store State`` 를 변경해 줍니다.

그리고 ``subscribe(callback)`` 으로 구독했다면, ``Store State`` 가 변경된 직 후, ``callback()`` 도 호출됩니다.

```javascript
store.dispatch(increaseCounter());
```



<br /><hr /><br />



# 04-06-09. ``Redux`` 로 ``Store`` 구현 전체 예시

지금까지 살펴본 ``Redux`` 를 간단한 ``Vanilla JS`` 로 사용해 보면 다음과 같습니다.

```html
<!DOCTYPE html>
  <body>
    <div id="toggle"></div>
    
    <div>
      <h1>
        카운터값: <span id="counter">loading...</span>
      </h1>

      <button id="increase">Increase</button>
      <button id="decrease">Decrease</button>
    </div>
  </body>
</html>
```

<br />

```javascript
import { createStore } from "redux";

const $toggle = document.querySelector("#toggle");
const $counter = document.querySelector("#counter");
const $increase = document.querySelector("#increase");
const $decrease = document.querySelector("#decrease");

// 1. Action Type 만들기
const TOGGLE_SWITCH = "TOGGLE_SWITCH";
const INCREASE_COUNTER = "INCREASE_COUNTER";
const DECREASE_COUNTER = "DECREASE_COUNTER";

// 2. Action 객체 생성 함수 만들기 (Factory Function)
const toggleSwitch = () => ({
  type: TOGGLE_SWITCH,
});
const increateCounter = difference => ({
  type: INCREASE_COUNTER,
  difference,
});
const decreaseCounter = difference => ({
  type: DECREASE_COUNTER,
  difference,
});

// 3. State 초기값 만들기
const initialState = {
  toggle: false,
  counter: 0,
};

// 4. reducer() 함수 만들기
const reducer = (
  state = initialState,
  action
) => {
  const { type } = action;

  switch (type) {
    case TOGGLE_SWITCH: {
      return {
        ...state,
        toggle: !state.toggle,
      };
    }

    case INCREASE_COUNTER: {
      const { counter } = state;
      const { difference } = action;

      return {
        ...state,
        counter: counter + difference,
      };
    }

    case DECREASE_COUNTER: {
      const { counter } = state;
      const { difference } = action;

      return {
        ...state,
        counter: counter - difference,
      };
    }

    default: {
      return state;
    }
  }
};

// 5. Store 객체 만들기
/**
 * @type { import("redux").Store<{
 *  toggle: boolean;
 *  counter: number;
 * }> }
 */
const store = createStore(reducer);

// 6. render() 함수 만들기
const render = () => {
  const state = store.getState();

  // $toggle 요소에 state.toggle 값 반영하기
  state.toggle
    ? $toggle.classList.add("active")
    : $toggle.classList.remove("active");

  // $counter 요소에 state.counter 값 반영하기
  $counter.innerText = state.counter;
};

// 7. subscribe() 로 구독하기
// react-redux 사용 시 (React 프로젝트에서 redux 사용 시), 내부에서 처리해 줍니다.
const unsubscribe = store.subscribe(render);

// 8. 액션 발생시키기
// 8-1. state.toggle 값 변경하기
store.dispatch(toggleSwitch()); // toggle 변경 후, render() 에 의해 HTML에 반영 완료

// 8-2. state.counter 값 7증가 시키기
store.dispatch(increaseCounter(7)); // counter 변경 후, render() 에 의해 HTML에 반영 완료

// 8-3. state.counter 값 3감소 시키기
store.dispatch(decreaseCounter(3)); // counter 변경 후, render() 에 의해 HTML에 반영 완료

// 9. 구독해제
unsubscribe(); // state 변경 시, 더이상 render() 함수가 호출되지 않습니다.
```



<br /><hr /><br />



# 04-07. ``Redux`` 사용 규칙

마지막으로 ``Redux`` 사용 시, 유의사항 3가지를 정리하면 다음과 같습니다.

1. 프로젝트 전체에서 ``Store`` 는 ``단 1개`` 만 사용해야 합니다.
    * 복수의 ``State`` 를 사용할 수도 있지만, 상태관리가 복잡해지므로, ``단일 Store`` 를 권장 합니다.
2. ``Redux State`` 는 ``읽기 전용`` 상태를 유지해야 합니다.
    * ``Redux State`` 를 변경할 때, ``store.dispatch()`` 가 아닌 직접 변경을 해서는 안됩니다.
3. ``reducer()`` 함수는 ``Pure Function (퓨어 함수)`` 로 만들어야 합니다.
    * ``reducer()`` 함수는 함수 외부값에 의존해서는 안됩니다.
    * ``reducer()`` 함수가 인자로 전달받는 ``state`` 를 직접 변경해서는 안됩니다.
    * ``reducer()`` 함수가 ``state`` 를 변경할 때는, ``새로운 객체를 반환`` 하면 됩니다.
    * ``state`` 의 구조가 복잡하거나 ``depth (깊이)`` 가 깊다면, ``dimmer 라이브러리`` 가 좋은 선택지가 됩니다.



<br /><hr /><br />



# 05. React & Redux 

``React`` 에서 ``Redux`` 를 사용한다면, ``react-redux`` 를 추가로 사용하게 됩니다.

``react-redux`` 는 ``Store`` 의 ``subscribe()`` 와 ``unsubscribe()`` 를 내부에서 처리해 줍니다.

또한, 컴포넌트에서 ``state`` 와 ``dispatch`` 를 좀 더 편하게 ``props`` 로 넘겨줄 수 있도록 해 줍니다.



<br /><hr /><br />



# 05-01. reducer() 만들기

이전에 살펴보았던 ``createStore()`` 를 사용하여 ``Store`` 객체를 생성합니다.

``React`` 에서 ``Redux`` 를 사용할 경우에도 ``Vanilla JS`` 에서 ``Redux`` 를 사용하는 것과 동일한 작업을 합니다.

<br />

1. ``Action Type`` 만들기
2. ``Action Object Factory Method`` 만들기
3. ``initialState`` 만들기
4. ``reducer`` 만들기
5. ``createStore()`` 로 ``Store`` 객체 생성하기

<br />

위 과정을 작성하면 다음과 같이 만들 수 있습니다.

```javascript
// ./src/store/todoList.js

// 1. Action Type 만들기
const CONTENT = "todoList/CONTENT";
const INSERT = "todoList/INSERT";
const REMOVE = "todoList/REMOVE";
const TOGGLE = "todoList/TOGGLE";

// 2. Action Object Factory Method 만들기
const content = content => ({
  type: CONTENT,
  content,
});

let id = 2;
const insert = content => ({
  type: INSERT,
  todo: {
    id: id++,
    content,
    toggle: false,
  },
});

const remove = id => ({
  type: REMOVE,
  id,
});

const toggle = id => ({
  type: TOGGLE,
  id,
});

// 3. initialState 만들기
const initialState = {
  content: "",
  todoList: [
    {
      id: 0,
      content: "할 일 0",
      toggle: true,
    },
    {
      id: 1,
      content: "할 일 1",
      toggle: false,
    },
  ],
};

// 4. reducer() 만들기
const reducer = (state, action) => {
  switch (action.type) {
    case CONTENT: {
      return {
        ...state,
        content: action.content,
      };
    }

    case INSERT: {
      return {
        ...state,
        todoList: [action.todo, ...state.todoList],
      };
    }

    case REMOVE: {
      return {
        ...state,
        todoList: {
          ...state,
          todoList: state.todoList.filter(todo => {
            return todo.id !== action.id;
          }),
        },
      };
    }

    case TOGGLE: {
      return {
        ...state,
        todoList: state.todoList.map(todo => {
          return todo.id !== action.id
            ? todo
            : { ...todo, toggle: !todo.toggle };
        }),
      };
    }
    
    default: {
      return state;
    }
  }
};
```



<br /><hr /><br />



# 05-02. 복수의 Store 만들기

위에서 작성했던 ``Action Type`` 에는 ``namespace/타입명`` 형식으로 만들었습니다.

``Store`` 를 의미 단위로 나누어 만들기 위한 방법입니다.

이를 위해 ``redux`` 는 ``combineReducers()`` 함수를 제공 합니다.

```javascript
combineReducers(
  reducer01,
  reducer02,
);
```

<br />

``combineReducers()`` 는 ``params`` 로 넘겨주었던 ``reducer`` 함수들을 통합한, ``reducer() 하나`` 를 반환해 줍니다.

이렇게 반환받은 ``reducer()`` 함수를 ``createStore()`` 의 ``params`` 로 넘겨주면, 의미단위로 분리한 형태의 ``Store`` 를 생성할 수 있게 됩니다.

```javascript
import { createStore } from "redux";

import todoListReducer from "./todoListReducer";
import counterReducer from "./counterReducer";

const rootReducer = combineReducers(
  todoListReducer,
  counterReducer,
);

const store = createStore(rootReducer);

export default store;
```



<br /><hr /><br />



# 05-03. Chrome 의 Redux DevTools 사용하기

``Redux`` 를 사용하게 되면, Store 의 상태를 확인해야 할 경우들이 발생합니다.

이를 위해, ``Chrome`` 의 확장 프로그램을 사용합니다.

> ``Redux DevTools`` 검색 및 설치

<br />

확장 프로그램을 설치 했다면, 프로젝트에도 해당 설정을 해 주어야 합니다.

설치할 라이브러리는 다음과 같습니다.

```bash
yarn add redux-devtools-extension
```

<br />

설치가 완료 되었다면, ``createStore()`` 의 ``2번째 Params`` 에 다음과 같이 설정해 줍니다.

```javascript
// ./src/index.js

import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./store";

const store = createStore(
  rootReducer,
  composeWithDevTools()
);
```

<br />

이제 Chrome 의 개발자 도구에서 ``Redux`` 탭을 사용할 수 있게 되었습니다.



<br /><hr /><br />



# 05-04. 프로젝트에 ``Store`` 연결하기

위에서 만들었던 ``Store`` 객체를 프로젝트에 연결해 보겠습니다.

``react-redux`` 에서 제공하는 ``<Provider />`` 컴포넌트를 사용하게 됩니다.

```javascript
// App.js

import rootReducer from "./store";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";

const store = createStore(
  rootReducer,
  composeWithDevTools()
);

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        My App
      </div>
    </Provider>
  );
};
```

<br />

이제 프로젝트 전역에서 ``Store`` 를 사용할 수 있게 되었습니다.



<br /><hr /><br />



# 05-05. 컨테이너 컴포넌트와 프레젠테이셔널 컴포넌트

``Store`` 를 생성하였다면, 원하는 컴포넌트에서 ``Store`` 를 직접 사용할 수 있게 됩니다.

여기서 ``Redux`` 를 사용하는 컴포넌트와 아닌 컴포넌트로 분리하여 생각할 수 있습니다.

그래서 ``Redux`` 를 사용할 때는 다음과 같이 2가지 컴포넌트로 분리하는 패턴을 사용합니다.

* ``컨테이너 컴포넌트``: ``Redux`` 를 직접 사용하는 컴포넌트
* ``프레젠테이셔널 컴포넌트``: ``Redux`` 를 사용하지 않는 컴포넌트

<br />

``<TodoList />`` 라는 컴포넌트를 만들고 ``Redux`` 를 사용하는 경우를 생각해 보겠습니다.

기존에 만들었던 ``<TodoList />`` 컴포넌트에 ``Redux`` 를 바로 사용하지 않습니다.

대신 ``<TodoListContainer />`` 컴포넌트를 만들고, 여기서 ``Redux`` 를 사용합니다.

그리고 ``<TodoList />`` 에 ``Props`` 로 넘겨줍니다.



<br /><hr /><br />



# 05-06. 컨테이너 컴포넌트 만들기

``Redux`` 를 실제로 사용하는 ``컨테이너 컴포넌트`` 를 만들어 보겠습니다.

이 때 사용할 라이브러리가 ``react-redux`` 입니다.

``react-redux`` 는 Store 의 ``subscribe()``, ``unsubscribe()``, ``state``, ``dispatch`` 를 컴포넌트의 ``Props`` 로 넘겨주는 기능을 해 줍니다.

<br />

``Store`` 의 모든 ``state`` 와 ``dispatch`` 를 사용하는 것 이 아닌, 필요한 부분만을 추출하여 사용하게 됩니다.

추출한 ``state`` 와 ``dispatch`` 는 ``react-redux`` 에서 제공하는 ``connect()`` 함수로 ``컨테이너 컴포넌트`` 에 연결해 줍니다.

<br />

* ``mapStateToProps``: 사용할 ``state`` 를 묶어 반환할 함수 입니다.
* ``mapDispatchToProps``: 사용할 ``dispatch`` 를 묵어 반환할 함수 입니다.

<br />

```javascript
// ./src/containers/todoList.js

import TodoList from "../components/TodoList";

import { connect } from "react-redux";

// Action Object Factory Method
import { remove, toggle } from "../store/todoListStore";

// TodoListContainer 컴포넌트
const TodoListContainer = ({
  // connect() 에 의해, state 와 dispatch 를 Props 로 받게 됩니다.
  todoList,
  remove,
  toggle,
}) => {
  return (
    <TodoList
      todoList={todoList}
      onRemove={remove}
      onToggle={toggle}
    />
  );
};

// 사용할 state 를 추출하는 함수 - <TodoListContainer /> 에 넘겨줄 state 를 정의합니다.
const mapStateToProps = state => ({
  // todoList: state.모듈명.state명
  todoList: state.todoList.todoList,
});

// 사용할 dispatch 를 추출하는 함수 - <TodoListContainer /> 에 넘겨줄 dispatch 를 정의합니다.
const mapDispatchToProps = dispatch => ({
  remove: id => dispatch(remove(id)),
  toggle: id => dispatch(toggle(id)),
});

// connect() 로 <TodoListContainer /> 에 연결하기
const makeContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default makeContainer(TodoListContainer);
```

<br />

``connect()`` 로 연결하는 부분을 다음과 같이 짧게 사용할 수 있습니다.

```javascript
// const makeContainer = connect(
//   mapStateToProps,
//   mapDispatchToProps,
// );

// export makeContainer(TodoListContainer);

export default connect(
  mapStateToProps,
  makDispatchToProps,
)(TodoListContainer);
```

<br />

``connect()`` 의 ``2번째 Params`` 를 다음과 같이 작성하면, ``mapDispatchToProps`` 를 생략할 수 있습니다.

```javascript
import { remove, toggle } from "../store/todoList";

export default connect(
  mapStateToProps,
  {
    // Action Object Factory Method 를 넘겨줍니다.
    remove,
    toggle,
  },
)(TodoListContainer);
```

<br />

``mapStateToProps`` 까지 ``connect()`` 에서 정의한다면, 다음과 같이 만들 수 있습니다.

```javascript
import { remove, toggle } from "../store/todoList";

export default connect(
  state => ({
    todoList: state.todoList,
  }),
  {
    remove,
    toggle,
  },
)(TodoListContainer);
```



<br /><hr /><br />



# 06. redux-actions 라이브러리로 가독성 높이기

``Redux`` 로 ``Store`` 를 만들때, ``reducer(state, action)`` 함수에 ``state`` 를 변경시키는 로직을 작성합니다.

그리고 ``Store`` 를 사용할 ``컨테이너 컴포넌트`` 에서는 ``mapDispatchToProps`` 를 만들기 위해, ``Action Object Factory Method`` 를 작성합니다.

작성할 것들이 많기 때문에 가독성에 조금은 부담이 됩니다.

``redux-actions`` 라이브러리를 사용하면, ``Action Object Factory Method`` 와 ``reducer(state, action)`` 를 좀 더 가독성 좋게 만들 수 있습니다.

<br />

``redux-actions`` 에서 제공하는 기능 중, 아래의 기능들을 사용할 것입니다.

* ``createAction("Action_타입", Action_객체_생성_함수)``: ``Action Object Factory Method`` 를 좀 더 가독성 좋게 만들 수 있습니다.
* ``handleActions({ [ACTION_타입]: (state, action) => State_결과 })``: ``reducer(state, action)`` 을 좀 더 가독성 좋게 만들 수 있습니다.



<br />



# 06-01. ``createAction()`` 으로 ``Action Object Factory Method`` 만들기

아래의 코드는 기존의 ``Action Object Factory Method`` 입니다.

```javascript
// Action 타입 정의
const CHANGE_INPUT = "todos/CHANGE_INPUT";
const TOGGLE = "todos/TOGGLE";
const INSERT = "todos/INSERT";
const REMOVE = "todos/REMOVE";

// Action Object Factory Method
export const changeInput = input => ({
  type: CHANGE_INPUT,
  input,
});

export const toggle = id => ({
  type: TOGGLE,
  id,
});

let id = 3;
export const insert => text => ({
  type: INSERT,
  id: id++,
  text,
  done: false,
});

export const remove = id => ({
  type: REMOVE,
  id,
});
```

<br />

위 코드를 ``createAction()`` 으로 작성하면 다음과 같습니다.

```javascript
// Action 정의
const CHANGE_INPUT = "todos/CHANGE_INPUT";
const TOGGLE = "todos/TOGGLE";
const INSERT = "todos/INSERT";
const REMOVE = "todos/REMOVE";

// Action Object Factory Method
export const changeInput = createAction(CHANGE_INPUT, text => text);

export const toggle = createAction(TOGGLE, id => id);

let id = 3;
export const insert = createAction(INSERT, text => ({
  id: id++,
  text,
  done: false,
}));

export const remove = createAction(REMOVE, id => id);
```

<br />

``createAction()`` 을 사용한 결과, 코드량도 줄어들고 비교적 간단하게 읽어집니다.

기존에는 ``reducer(state, action)`` 으로 넘겨주는 객체의 ``type`` 을 ``[Key]: value`` 형태로 넘겨주었는데, ``createAction()`` 의 ``첫전째 params`` 에 ``타입 문자열`` 만 넘겨주고 있습니다.

그리고, ``두번째 params`` 에는 ``action`` 객체를 반환하는 ``callback`` 함수는 넘겨주는데, ``type`` 을 제외한 ``Payload`` 를 반환하는 ``callback`` 을 넘겨줍니다.

즉, ``createAction()`` 의 ``두번째 params`` 에 넘겨주는 ``callback`` 은 실제 사용할 데이터만을 반환하는 형식이 됩니다.

* ``createAction()`` 의 ``두번째 params`` 함수가 반환하는 데이터는, ``reducer(state, action)`` 함수의 ``action.payload`` 형태로 접근할 수 있습니다.




<br /><hr /><br />



# 06-02 handleActions() 로 reducer() 만들기

이번에는 ``handleActions()`` 로 ``reducer()`` 를 좀 더 가독성 좋게 만들어 보겠습니다.

아래의 코드는 기존의 ``reducer()`` 함수 입니다.

```javascript
import { createAction, handleActions } from "redux-actions";

// Action 타입
const CHANGE_INPUT = "todos/CHANGE_INPUT";
const TOGGLE = "todos/TOGGLE";
const INSERT = "todos/INSERT";
const REMOVE = "todos/REMOVE";

// Action Object Factory Method
export const changeInput = createAction(CHANGE_INPUT, input => input);

export const toggle = createAction(TOGGLE, id => id);

let id = 2;
export const insert = createAction(INSERT, text => ({
  id: id++,
  text,
  done: false,
}));

export const remove = createAction(REMOVE, id => id);

// state 초기값
const initialState = {
  input: "",
  todos: [
    {
      id: 1,
      text: "redux-actions 라이브러리 정리하기",
      done: false,
    },
  ],
};

const todos = handleActions({
  [CHANGE_INPUT]: (state, action) => ({
    ...state,
    input: action.payload,
  }),

  [TOGGLE]: (state, action) => ({
    ...state,
    todos: state.todos.map(todo => {
      return todo.id !== action.payload
        ? todo
        : { ...todo, done: !todo.done };
    }),
  }),

  [INSERT]: (state, action) => ({
    ...state,
    todos: state.todos.concat(action.payload),
  }),

  [REMOVE]: (state, action) => ({
    ...state,
    todos: state.todos.filter(todo => todo.id !== action.payload),
  }),
}, initialState);
```

<br />

``handleActions()`` 에 ``params`` 로 넘겨준 객체를 살펴보면, 다음과 같은 형식으로 만들어 졌습니다.

```javascript
const params = {
  ["Action타입"]: (state, action) => {
    // state 변경 로직
  },
};
```

<br />

``state 변경 로직`` 에서도 다른부분이 있는데, ``createAction()`` 함수의 반환 객체를 읽는 방법이, ``action.payload`` 라는 점 입니다.

``createAction()`` 의 ``두번째 params`` 로 생성하는 ``Action Object`` 의 참조값이 ``handleActions()`` 에서는 ``action.payload`` 로 제공됩니다.

그러므로, ``createAction()`` 의 ``두번째 params`` 에서 ``id`` 값만을 반환하면, ``handleActions()`` 에서는 ``action.payload`` 가 ``id`` 값이 됩니다.



<br /><hr /><br />



# 06-03 ``handleActions()`` 에 구조분해 문법을 사용하여, 가독성 높이기

``createAction()`` 에서 생성한 ``action`` 객체는 ``handleActions()`` 에서는 ``action.payload`` 에 담겨 있습니다.

아래의 코드는 ``action.payload`` 를 구조분해 하여, 좀 더 명시적인 ``params 명`` 으로 나타내 줍니다.

<br />

```javascript
import { createAction, handleActions } from "redux-actions";

// Action 타입
const CHANGE_INPUT = "todos/CHANGE_INPUT";
const TOGGLE = "todos/TOGGLE";
const INSERT = "todos/INSERT";
const REMOVE = "todos/REMOVE";

// Action Object Factory Method
export const changeInput = createAction(CHANGE_INPUT, input => input);

export const toggle = createAction(TOGGLE, id => id);

let id = 2;
export const insert = createAction(INSERT, text => ({
  id: id++,
  text,
  done: false,
}));

export const remove = createAction(REMOVE, id => id);

// state 초기값
const initialState = {
  input: "",
  todos: [
    {
      id: 1,
      text: "redux-actions 라이브러리 정리하기",
      done: false,
    },
  ],
};

// reducer()
const todos = handleActions({
  [CHANGE_INPUT]: (state, { payload: input }) => ({
    ...state,
    input,
  }),

  [TOGGLE]: (state, { payload: id }) => ({
    ...state,
    todos: state.todos.map(todo => {
      return todo.id !== id
        ? todo
        : { ...todo, done: !todo.done };
    }),
  }),

  [INSERT]: (state, { payload: todo }) => ({
    ...state,
    todos: state.todos.concat(todo),
  }),

  [REMOVE]: (state, { payload: id }) => ({
    ...state,
    todos: state.todos.filter(todo => todo.id !== id),
  }),
});
```

<br />

``action`` 이라는 추상적인 ``params 명`` 을 구체적으로 표현하여, 가독성을 높일 수 있게 되었습니다.



<br /><hr /><br />



# 06-04. immer 라이브러리로 handleActions() 만들기

``State`` 의 깊이가 깊을수록 ``reducer()`` 를 구현하기 어렵습니다.

``Redux`` 의 ``State`` 는 ``불변성`` 을 유지해야 하기 때문에, 계층이 깊은 ``State`` 는 설계시 주의해야하는 부분이 됩니다.

하지만, ``State`` 를 활용하거나 파악할 때는, ``State`` 를 깊은 구조로 만드는 것이 좀 더 유리할 수 있습니다.

이러한 경우에 ``immer`` 라이브러리를 활요하면, ``State`` 의 ``불변성`` 을 유지하는데 편해집니다.

```javascript
import { createAction, handleAction } from "redux-actions";
import produce from "immer";

// Action 타입
const CHANGE_INPUT = "todos/CHANGE_INPUT";
const TOGGLE = "todos/TOGGLE";
const INSERT = "todos/INSERT";
const REMOVE = "todos/REMOVE";

// Action Object Factory Method
export const changeInput = createAction(CHANGE_INPUT, input => input);

export const toggle = createAction(TOGGLE, id => id);

let id = 2;
export const insert = createAction(INSERT, text => ({
  id: id++,
  text,
  done: false,
}));

export const remove = createAction(REMOVE, id => id);

// state 초기값
const initialState = {
  input: "",
  todos: [
    {
      id: 1,
      text: "redux-actions 라이브러리 정리하기",
      done: false,
    },
  ],
};

// reducer()
const todos = handleAction({
  [CHANGE_INPUT]: (state, { payload: input }) =>
    produce(state, draft => {
      draft.input = input;
    }),

  [TOGGLE]: (state, { payload: id }) =>
    produce(state, draft => {
      const todo = draft.todos.find(todo => todo.id === id);
      todo.done = !todo.done;
    }),

  [INSERT]: (state, { payload: todo }) =>
    produce(state, draft => {
      draft.todos.push(todo);
    }),

  [REMOVE]: (state, { payload: id }) =>
    produce(state, draft => {
      const index = draft.todos.findIndex(todo => todo.id === id);
      draft.todos.splice(index, 1);
    }),
});
```

<br />

``immer`` 를 사용하여 좀 더 복잡해 보이지만, ``state`` 의 계층구조가 더 깊어도 지금의 코드량과 비슷하게 만들게 됩니다.

``state`` 의 계층이 깊을 때 ``immer`` 라이브러리의 효과를 더 크게 볼 수 있습니다.



<br /><hr /><br />



# 07. react-redux 의 useSelector() 와 useDispatch() 로 Store 사용하기

``react-redux`` 는 ``Store`` 사용을 위해 두가지 방법을 제공 합니다.

* ``connect()`` 로 ``Store`` 사용하기
* ``Hooks`` 로 ``Store`` 사용하기

<br />

이번에는 ``Hooks`` 로 ``Store`` 를 사용하는 방법에 대해 정리해 보겠습니다.



<br /><hr /><br />



# 07-01. ``useSelector()``

``Store`` 의 ``State`` 를 사용하기 위한 ``Hooks`` 는 ``useSelector()`` 입니다.

``컨테이너 컴포넌트`` 내부에서 ``useSelector()`` 를 사용하여, 직접 ``State`` 를 사용하게 됩니다.

```javascript
// CounterContainer.js

import React from "react";
import { useSelector } from "react-redux";
import Counter from "../components/Counter";

const CounterContainer = () => {
  const number = useSelector(state => state.counter.number);

  return (
    <Counter
      number={number}
    />
  );
};

// Hooks 는 Memoization 을 직접 해주어야 합니다.
export default React.memo(CounterContainer);
```


<br /><hr /><br />



# 07-02. ``useDispatch()``

``Store`` 의 ``State`` 를 변경하기 위해, ``Hooks`` 를 사용하여 ``dispatch()`` 를 호출해 보겠습니다.

``react-redux`` 에서 제공하는 ``useDispatch()`` 를 사용하면, ``Sotre`` 의 ``dispatch()`` 함수를 반환해 줍니다.

``dispatch(/* Action Object Factory Method */)`` 형식으로 호출하면, 해당 ``Action`` 이 실행 됩니다.

```javascript
// CounterContainer.js

import React, {
  useCallback,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import Counter from "../components/Counter";
import { increase, decrease } from "../modules/Counter";

const Counter = () => {
  const number = useSelector(state => state.counter.number);

  const onIncrease = useCallback(() => {
    dispatch(increase());
  }, [dispatch]);

  const onDecrease = useCallback(() => {
    dispatch(decrease());
  }, [dispatch]);

  return (
    <Counter
      number={number}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
    />
  );
};
```



<br /><hr /><br />



# 08. Code Splite

``CRA`` 로 만든 프로젝트는 ``webpack`` 을 빌더로 사용합니다.

빌드한 파일은 실제 브라우저에서 다운로드하여 사용하게 되는데, 이때 용량이 크다면 페이지 로딩이 길어지고 트레픽 또한 커지게 됩니다.

그래서 ``webpack`` 으로 빌드를 하게되면 주석 제거나 공백 최소화와 같은 용량을 줄여주는 작업을 해줍니다.

``webpack`` 의 기본 설정에는 라이브러리와 실제 개발코드를 분리하여 빌드해 줍니다.

이렇게 분리하여 빌드한 결과 파일들을 ``Split Chunks`` 라고 합니다.

<br />

``CRA`` 로 생성한 프로젝트의 기본 ``webpack`` 설정에는 라이브러리와 개발코드 두개의 ``Chunk`` 파일로만 분리해 줍니다.

이 상태에서는 어떤 페이지에 접근 하더라도, 프로젝트 전체 코드를 다운로드 받아야 하므로, 로딩과 트레픽에 문제가 됩니다.

이를 해결하기 위해서는 접근한 페이지에 해당하는 코드만 다운로드 받을 수 있도록 코드를 ``분리`` 해야 합니다.

<br />

이렇게 코드를 분리하기 위해, ``Lazy Loading`` (=== ``비동기 로딩``) 방법 이 있습니다.



<br /><hr /><br />



# 08-01. 컴포넌트 State 를 사용한 Lazy Loading

함수 내부에서도 프로젝트 구성 파일을 ``import`` 할 수 있습니다.

이 때의 ``import`` 는 함수 호출 형태로 사용하게 됩니다.

```javascript
const loadComponent = () => {
  return import("@components/MyComponent");
};
```

<br />

위와 같이 ``import()`` 함수를 사용하여 ``비동기 로딩`` 을 할 수 있습니다.

즉, ``import()`` 를 호출한 시점에 해당 컴포넌트를 로딩하게 됩니다.

<br />

아래의 코드는 ``React`` 의 유틸을 사용하지 않고, 단순 ``State`` 를 사용하여 ``Lazy Loading`` 을 구현한 예시 입니다.

```javascript
// ./src/components/MyComponents.js

import React from "react";

const MyComponent = () => {
  return (
    <div className="MyComponent">
      My Component 입니다.
    </div>
  );
};

export default MyComponent;
```

<br />

```javascript
// ./src/App.js
// (Class Component 로 구현)

import React, { Component } from "react";

class App extends Component {
  state = {
    MyComponent: null,
  };

  onClick = async () => {
    const MyComponent = await import("./components/MyComponent");
    this.setState({
      MyComponent: MyComponent.default,
    });
  };

  render() {
    const { MyComponent } = this.state;
    
    return (
      <div className="App">
        <h1>Lazy Loading 예시 코드</h1>
        <button onClick={this.onClick}>
          Load
        </button>

        {MyComponent && <MyComponent />}
      </div>
    );
  };
}

export default App;
```



# 08-02. ``React.lazy`` 와 ``Suspense`` 를 사용한 ``Lazy Loading``

위에서 구현한 ``Lazy Loading`` 은 컴포넌트의 ``State`` 를 사용합니다.

그리고 ``render()`` 함수에서 사용할 때에도, ``{ MyComponent && <MyComponent />}`` 형식으로 ``Nullish`` 검사도 해야 합니다.

<br />

``React.lazy`` 는 이러한 작업을 최소화 시켜줍니다.

```javascript
import React from "react";

const MyComponent = React.lazy(() => import("./components/MyComponent"));
```

<br />

``React.lazy`` 로 불러오는 컴포넌트는, ``React`` 에서 제공하는 ``<Suspense />`` 를 부모 컴포넌트로 가져야 합니다.

```javascript
import {
  lazy,
  Suspense,
} from "react";

const MyComponent = lazy(() => import("./components/MyComponent"));

const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <MyComponent />
      </Suspense>
    </div>
  );
};
```

<br />

``<Suspense />`` 의 ``fallback`` Props 는 ``Lazy Loading`` 의 로딩중에 보여줄 컴포넌트를 받습니다.

``lazy()`` 에서 로딩중일 동안 보여주게 되며, ``필수 Props`` 입니다.

<br />

지금까지 살펴본 ``React.lazy`` 와 ``<Suspense />`` 를 사용한 예시코드는 다음과 같습니다.

* 버튼을 클릭하면 ``<MyComponent />`` 를 로딩합니다.

<br />

```javascript
// ./src/components/MyComponent.js

import React from "react";

const MyComponent = () => {
  return (
    <div className="MyComponent">
      My Component 입니다.
    </div>
  );
};

export default MyComponent;
```

<br />

```javascript
// ./src/App.js

import React, {
  lazy,
  Suspense,
  useState,
} from "react";

const MyComponent = lazy(() => import("./components/MyComponent"));

const App = () => {
  const [visible, setVisible] = useState(false);

  const onClick = () => setVisible(true);

  return (
    <div className="App">
      <button onClick={onClick}>
        Load
      </button>

      {visible && <MyComponent />}
    </div>
  );
};

export default App;
```



<br /><hr /><br />



# 08-02. ``@loadable/component`` 라이브러리

``React.lazy`` 와 ``<Suspense />`` 는 ``CSR (Client Side Rendering)`` 만 지원해 줍니다.

만약 ``SSR (Server Side Rendering)`` 에서 사용하고자 한다면, ``서드 파티 라이브러리`` 를 사용해야 하며, ``React`` 에서 권장하는 라이브러리로는 ``@loadable/component`` 가 있습니다.

<br />

```bash
$ yarn add @loadable/component
```

<br />

``@loadable/component`` 은 다음과 같은 기능이 있습니다.

* ``SSR (Server Side Rendering)`` 지원
* 미리 불러오기 (``preloading``)
* 타임아웃
* 로딩 UI 딜레이
* (그 외...)

<br />

사용방법은 ``React.lazy`` 와 매우 유사합니다.

```javascript
import loadable from "@loadable/component";

const MyComponent = loadable(() => import("./components/MyComponent"));

const App = () => {
  return (
    <div className="App">
      <MyComponent />
    </div>
  );
};

export default App;
```

<br />

차이점 중 하나는 ``<Suspense />`` 기능을 가지고 있으므로, ``render()`` 함수에서 일반 컴포넌트 처럼 사용합니다.

만약 ``fallback`` 기능을 사용하고자 한다면, ``loadable()`` 호출 시 옵션으로 넘겨줄 수 있습니다.

```javascript
import loadable from "@loadable/component";

const MyComponent = loadable(() => import("./components/MyComponent"), {
  fallback: <div>Loading ...</div>,
});
```

<br />

아래의 코드는 ``@loadable/component`` 를 사용한 예시 입니다.

동작은 다음과 같습니다.

* ``<button />`` 에 ``mouseover`` 시, ``미리 불러오기(preloading)`` 을 시작합니다.
* ``<button />`` 클릭 시, ``<MyComponent />`` 를 Rendering 합니다.
  * 클릭한 시점에서 아직 로딩이 되지 않았다면, ``fallback`` 요소를 Rendering 합니다.

<br />

```javascript
// ./src/components/MyComponent.js

import React from "react";

const MyComponent = () => {
  return (
    <div className="MyComponent">
      My Component 입니다.
    </div>
  );
};

export default MyComponent;
```

<br />

```javascript
// ./src/App.js

import React, {
  useState,
} from "react";

import loadable from "@loadable/component";

const MyComponent = loadable(() => import("./components/MyComponent"), {
  fallback: <div>Loading...</div>,
});

const App = () => {
  const [visible, setVisible] = useState(false);

  const onMouseOver = () => MyComponent.preload();

  const onClick = () => setVisible(true);

  return (
    <div className="App">
      <button onMouseOver={onMouseOver}>
        Load
      </button>

      {visible && <MyComponent />}
    </div>
  );
};

export default App;
```
