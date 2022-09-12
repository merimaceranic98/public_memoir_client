import { MEMOIRS_ACTIONS } from "../constants/memoirs-constants";

const memoirsInitialState = {
  memoirs: [],
};

export const memoirs = (state = memoirsInitialState, payload) => {
  switch (payload.type) {
    case MEMOIRS_ACTIONS.HANDLE_GET_ALL_MEMOIRS:
      return { ...state, memoirs: payload.data };
    default:
      return state;
  }
};
