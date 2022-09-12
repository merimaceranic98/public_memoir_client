import { MEMOIRS_ACTIONS } from "../constants/memoirs-constants";
import MemoirApi from "../../../api/memoir-api";

export const getAllMemoirs = () => {
  return async (dispatch) => {
    try {
      const res = await MemoirApi.getAllMemoirs();
      const memoirs = (res.data && res.data) || [];
      dispatch(handleGetAllMemoirs(memoirs));
      return memoirs;
    } catch (err) {
      //TO DO: Error handling will be implemen
    }
  };
};

export const handleGetAllMemoirs = (data) => ({
  type: MEMOIRS_ACTIONS.HANDLE_GET_ALL_MEMOIRS,
  data,
});
