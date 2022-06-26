// action 타입
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

// action 객체 생성 함수
export const increase = () => ({
  type: INCREASE,
});
export const decrease = () => ({
  type: DECREASE,
});

// state 초기값 만들기
const initialState = {
  number: 0,
};

// reducer() 만들기
const counter = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE: {
      return {
        number: state.number + 1,
      };
    }

    case DECREASE: {
      return {
        number: state.number - 1,
      };
    }

    default: {
      return state;
    }
  }
};

export default counter;