import { ADD_LIKE } from "../actions/posts";
import { api } from "../utils/api";

export default function(state = api.getPosts(), action) {
  switch (action.type) {
    case ADD_LIKE:
      return api.addLike(action.payload);
    default:
      return state;
  }
}
