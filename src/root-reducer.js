import { combineReducers } from "redux";

import { memoirs } from "./features/memoirs/reducers/memoirs-reducers";

const reducer = combineReducers({
  memoirs,
});

export default reducer;
