import { createStore } from "redux";

const $toggle = document.querySelector(".toggle");
const $counterInfoValue = document.querySelector(".counter-info-value");
const $increaseButton = document.querySelector(".counter-button__increase");
const $decreaseButton = document.querySelector(".counter-button__decrease");

// 1. Action Type 정하기
const TOGGLE = "TOGGLE";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

// 2. Action Factory 만들기
const generateToggleAction = () => ({
  type: TOGGLE,
})

const generateIncrease = diff => ({
  type: INCREASE,
  diff,
});

const generateDecrease = diff => ({
  type: DECREASE,
  diff,
});

// 3. 초기값 정의하기
const initialState = {
  toggle: false,
  value: 0,
};

// 4. reducer() 함수 만들기
const reducer = (
  state = initialState,
  action
) => {
  const { type } = action;

  switch (type) {
    case TOGGLE: {
      return {
        ...state,
        toggle: !state.toggle,
      };
    }

    case INCREASE: {
      const { diff } = action;

      return {
        ...state,
        value: state.value + diff,
      };
    }

    case DECREASE: {
      const { diff } = action;

      return {
        ...state,
        value: state.value - diff,
      };
    }

    default: {
      return state;
    }
  }
};

// 5. Store 만들기
const store = createStore(reducer);

// 6. render() 함수 만들기
const render = () => {
  const state = store.getState();

  state.toggle
    ? $toggle.classList.add("toggle__active")
    : $toggle.classList.remove("toggle__active");

  $counterInfoValue.innerText = state.value;
};

// 7. 구독하기
const unsubscribe = store.subscribe(render);

// 8. 액션 발생시키기
$toggle.addEventListener("click", () => {
  store.dispatch(generateToggleAction());
});
$increaseButton.addEventListener("click", () => {
  store.dispatch(generateIncrease(3));
});
$decreaseButton.addEventListener("click", () => {
  store.dispatch(generateDecrease(3));
});