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
      //TO DO: Error handling will be implemented
    }
  };
};

export const addNewMemoir = (data) => {
  return async (dispatch) => {
    try {
      await MemoirApi.addNewMemoir(data);
      const response = await MemoirApi.getAllMemoirs();
      const memoirs = (response.data && response.data) || [];
      dispatch(handleGetAllMemoirs(memoirs));
    } catch (err) {
      //TO DO: Error handling will be implemented
    }
  };
};

export const getMemoirById = (memoirId) => {
  return async (dispatch) => {
    try {
      const res = await MemoirApi.getMemoirById(memoirId);
      const memoir = (res.data && res.data) || {};
      dispatch(handleGetMemoirById(memoir));
      return memoir;
    } catch (err) {
      //TO DO: Error handling will be implemented
    }
  };
};

export const handleGetAllMemoirs = (data) => ({
  type: MEMOIRS_ACTIONS.HANDLE_GET_ALL_MEMOIRS,
  data,
});

export const handleAddNewMemoir = (data) => ({
  type: MEMOIRS_ACTIONS.HANDLE_ADD_NEW_MEMOIR,
  data,
});

export const handleGetMemoirById = (data) => ({
  type: MEMOIRS_ACTIONS.HANDLE_MEMOIR_BY_ID,
  data,
});
