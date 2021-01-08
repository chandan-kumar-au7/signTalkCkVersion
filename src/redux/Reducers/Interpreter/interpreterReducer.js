import { LOG_IN } from "../../ActionTypes/Interpreter/interpreterActionTypes"
const initialState = {
  interpreter: "",
};

export const interpreterReducer = (state = initialState, Action) => {
  const { type, payload } = Action;
  switch (type) {
    case LOG_IN:
      return { ...state, interpreter: payload };

    default:
      return state;
  }
};
