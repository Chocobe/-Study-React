import { createStore } from "redux";

const actionTypeMapper = {
  TOGGLE: "TOGGLE",
  INCREASE: "INCREASE",
  DECREASE: "DECREASE",
};

const actionGeneratorMapper = {
  [actionTypeMapper.TOGGLE]: () => ({
    type: actionTypeMapper.TOGGLE,
  }),

  [actionTypeMapper.INCREASE]: (difference = 1) => ({
    type: actionTypeMapper.INCREASE,
    difference,
  }),

  [actionTypeMapper.DECREASE]: (difference = 1) => ({
    type: actionTypeMapper.DECREASE,
    difference,
  }),
};

const initialState = {
  toggle: false,
  counter: 0,
};

const reducer = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case actionTypeMapper.TOGGLE: {
      return {
        ...state,
        toggle: !state.toggle,
      };
    }

    case actionTypeMapper.INCREASE: {
      return {
        ...state,
        counter: state.counter + action.difference,
      };
    }

    case actionTypeMapper.DECREASE: {
      return {
        ...state,
        counter: state.counter - action.difference,
      };
    }

    default: {
      return state;
    }
  }
};

/**
 * @type { import("redux").Store<{
 *  toggle: boolean;
 *  counter: number;
 * }> }
 */
const store = createStore(reducer);

const $toggle = document.querySelector(".toggleWrapper-toggle");
const $counter = document.querySelector(".counterWrapper-inner-counter");
const $increase = document.querySelector(".counterWrapper-actions-increase");
const $decrease = document.querySelector(".counterWrapper-actions-decrease");

const render = () => {
  const state = store.getState();

  state.toggle
    ? $toggle.classList.add("active")
    : $toggle.classList.remove("active");

  $counter.innerText = state.counter;
};

const unsubscribe = store.subscribe(render);

$toggle.addEventListener("click", () => {
  store.dispatch(actionGeneratorMapper[
    actionTypeMapper.TOGGLE
  ]());
});

$increase.addEventListener("click", () => {
  store.dispatch(actionGeneratorMapper[
    actionTypeMapper.INCREASE
  ](3));
});

$decrease.addEventListener("click", () => {
  store.dispatch(actionGeneratorMapper[
    actionTypeMapper.DECREASE
  ](3));
});