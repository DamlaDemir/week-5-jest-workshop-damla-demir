import axios from "axios";
import { isResponseOk } from "../helpers/util";

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

export default class PostProvider {
  async getAllPosts() {
    try {
      let data = [];
      const response = await axios.get(BASE_URL);

      if (isResponseOk(response)) {
        data = response.data;
      }

      return data;
    } catch (err) {
      throw new Error("Error on get posts!");
    }
  }
}
