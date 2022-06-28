const CONTENT = "todoForm/CONTENT";

export const content = content => ({
  type: CONTENT,
  content,
});

const initialState = {
  content: "초기값",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CONTENT: {
      return {
        ...state,
        content: action.content,
      };
    }
    
    default: {
      return state;
    }
  }
};

export default reducer;