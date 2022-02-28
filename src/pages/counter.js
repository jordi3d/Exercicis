const INCREMENT = "INCREMENT";
export function increment(amount) {
  return { type: INCREMENT, amount };
}
const RESET = "RESET";
export function reset() {
  return { type: RESET };
}
export function counter(state, action) {
  let tmp = state + action.amount;
  switch (action.type) {
    case RESET:
      return 0;
    case INCREMENT:
      if (tmp >= 0 && tmp <= 10) return tmp;
    //return state;
    default:
      return state;
  }
}
