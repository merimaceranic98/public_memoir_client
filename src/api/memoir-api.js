import axios from "axios";

class MemoirApi {
  static getAllMemoirs() {
    return axios({
      method: "GET",
      url: "/memoirs",
    });
  }
}

export default MemoirApi;
