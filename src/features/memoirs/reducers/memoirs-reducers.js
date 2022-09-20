import { MEMOIRS_ACTIONS } from "../constants/memoirs-constants";

const memoirsInitialState = {
  memoirs: [],
  memoir: {},
};

export const memoirs = (state = memoirsInitialState, payload) => {
  switch (payload.type) {
    case MEMOIRS_ACTIONS.HANDLE_GET_ALL_MEMOIRS:
      return { ...state, memoirs: payload.data };
    case MEMOIRS_ACTIONS.HANDLE_MEMOIR_BY_ID:
      return { ...state, memoir: payload.data };
    case MEMOIRS_ACTIONS.HANDLE_DELETE_MEMOIR_BY_ID:
      return { ...state, memoirs: payload.data };
    default:
      return state;
  }
};
