import { toggle } from "./toggle";

export const reducer = (state = { SHOW_POPUP: false }, action) => {
  switch (action.type) {
    case toggle:
      return { ...state, SHOW_POPUP: !state.SHOW_POPUP };
    default:
      return state;
  }
};
