import { INCREMENT, DECREMENT } from "./constants";

const initialState = {
  count: 0,
};

const counterReducer = function (state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count > 0 ? state.count - 1 : state.count,
      };
    default:
      return state;
  }
};

export default counterReducer;
