import { useReducer } from "react";

const reducer = (state, action) => {
  const { name, value } = action;

  return {
    ...state,
    [name]: value,
  };
};

const useInputs = initialForm => {
  const [state, dispatch] = useReducer(reducer, initialForm);

  const onChange = ({ target }) => dispatch(target);

  return [state, onChange];
};

export default useInputs;