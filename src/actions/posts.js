export const ADD_LIKE = "ADD_LIKE";

export function addLike(id) {
  return {
    type: ADD_LIKE,
    payload: id
  };
}