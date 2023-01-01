const InitialState1 = {
  name: "reducer2",
  value: "App3 - reducer2"
};

const reducer2 = (state = InitialState1, action) => {
  switch (action.type) {
    case "REDUCER_TYPE1":
      return {
        ...state,
        value: "App3 - reducer2 - type1 - updated"
      };
    case "REDUCER_TYPE2":
      return {
        ...state,
        value: "App3 - reducer2 - type2 - updated"
      };
    default:
      return state;
  }
};

export { reducer2 };
