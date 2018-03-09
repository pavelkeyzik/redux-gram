export const ADD_LIKE = "ADD_LIKE";

/**
 * @param {number} id Post id  
 */
export function addLike(id) {
  return {
    type: ADD_LIKE,
    payload: id
  };
}