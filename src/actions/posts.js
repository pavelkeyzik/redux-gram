export const ADD_LIKE = "ADD_LIKE";
export const INIT_ITEMS = "INIT_ITEMS";

export function addLike(id) {
  return {
    type: ADD_LIKE,
    payload: id
  };
}

export function initItems(items) {
  return {
    type: INIT_ITEMS,
    payload: items
  };
}
