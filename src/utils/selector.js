export const selector = (namespace) => (fn) => (state, props) =>
  fn(state[namespace], props);
