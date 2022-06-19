import { createStore } from "redux";

const divToggle = document.querySelector(".toggle");
const counter = document.querySelector("h1");
const btnIncrease = document.querySelector("#increase");
const btnDecrease = document.querySelector("#decrease");

// 1. Action 이름 정하기
const TOGGLE_SWITCH = "TOGGLE_SWITCH";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

// 2. Action 객체 생성 함수 만들기
const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = difference => ({ type: INCREASE, difference });
const decrease = () => ({ type: DECREASE });

// 3. Stores 초기값 설정하기
const initialState = {
  toggle: false,
  counter: 0,
};

// 4. reducer() 함수 만들기
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_SWITCH: {
      return {
        ...state,
        toggle: !state.toggle,
      };
    }

    case INCREASE: {
      return {
        ...state,
        counter: state.counter + action.difference,
      };
    }

    case DECREASE: {
      return {
        ...state,
        counter: state.counter - 1,
      };
    }

    default: {
      return state;
    }
  }
};

// 5. Store 객체 생성하기
/** @type { import("redux").Store<initialState> } */
const store = createStore(reducer);

// 6. render() 함수 만들기
// React 컴포넌트의 render() 함수와는 다른 역할을 합니다.
// Store 의 State 가 변경될 때마다 호출되며,
// 이미 rendering 된 HTML 에 State 를 적용시켜주는 역할을 합니다.
const render = () => {
  const state = store.getState();

  // Store 의 toggle 값에 따라 divToggle 요소에 반영
  state.toggle
    ? divToggle.classList.add("active")
    : divToggle.classList.remove("active");

  // Store 의 counter 값에 따라 counter 요소에 반영
  counter.innerText = state.counter;
};

render();

// 7. subscribe() 함수로 구독하기
// subscribe() 는 unsubscribe() 함수를 반환해 줍니다.
// 참고: ``react-redux`` 라이브러리 사용 시,
//    redux state 조회시에 자동으로 subscribe() 해줍니다.
const unsubscribe = store.subscribe(render);

// unsubscribe() 호출 시, 구독해제 됩니다.
// unsubscribe();

// 8. ``dispatch()`` 를 사용하여, 액션 발생 시키기
divToggle.addEventListener("click", () => {
  store.dispatch(toggleSwitch());
});
btnIncrease.addEventListener("click", () => {
  store.dispatch(increase(1));
});
btnDecrease.addEventListener("click", () => {
  store.dispatch(decrease());
});