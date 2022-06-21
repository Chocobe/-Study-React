import { createStore } from "redux";

const actionTypeMapper = {
  TOGGLE: "TOGGLE",
  INCREASE_COUNTER: "INCREASE_COUNTER",
  DECREASE_COUNTER: "DECREASE_COUNTER",
};

const actionGeneratorMapper = {
  [actionTypeMapper.TOGGLE]: () => ({
    type: actionTypeMapper.TOGGLE,
  }),

  [actionTypeMapper.INCREASE_COUNTER]: diff => ({
    type: actionTypeMapper.INCREASE_COUNTER,
    diff,
  }),

  [actionTypeMapper.DECREASE_COUNTER]: diff => ({
    type: actionTypeMapper.DECREASE_COUNTER,
    diff,
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
      }
    }

    case actionTypeMapper.INCREASE_COUNTER: {
      const { counter } = state;
      const { diff } = action;

      return {
        ...state,
        counter: counter + diff,
      };
    }

    case actionTypeMapper.DECREASE_COUNTER: {
      const { counter } = state;
      const { diff } = action;

      return {
        ...state,
        counter: counter - diff,
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

const $toggle = document.querySelector(".toggle");
const $counter = document.querySelector(".counter");
const $btnIncrease = document.querySelector(".increase");
const $btnDecrease = document.querySelector(".decrease");

const render = () => {
  const state = store.getState();
  const { toggle, counter } = state;

  toggle
    ? $toggle.classList.add("toggle__active")
    : $toggle.classList.remove("toggle__active");

  $counter.innerText = counter;
};

store.subscribe(render);

$toggle.addEventListener("click", () => {
  store.dispatch(
    actionGeneratorMapper[
      actionTypeMapper.TOGGLE
    ]()
  );
});

$btnIncrease.addEventListener("click", () => {
  store.dispatch(
    actionGeneratorMapper[
      actionTypeMapper.INCREASE_COUNTER
    ](3)
  );
});

$btnDecrease.addEventListener("click", () => {
  store.dispatch(
    actionGeneratorMapper[
      actionTypeMapper.DECREASE_COUNTER
    ](3)
  );
});