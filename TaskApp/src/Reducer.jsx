export function reducer(state, action) {
  switch (action.type) {
    case "inc1":
      return state + action.payload;
    case "dec1":
      return state - 1;
    default:
      return state;
  }
}
