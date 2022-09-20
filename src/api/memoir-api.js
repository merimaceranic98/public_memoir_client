import axios from "axios";

class MemoirApi {
  static getAllMemoirs() {
    return axios({
      method: "GET",
      url: "/memoirs",
    });
  }
  static addNewMemoir = (data) => {
    return axios({
      method: "POST",
      url: "/memoirs",
      data,
    });
  };
  static getMemoirById = (memoirId) => {
    return axios({
      method: "GET",
      url: `/memoirs/${memoirId}`,
    });
  };
}

export default MemoirApi;
