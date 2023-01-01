const InitialState1 = {
  name: "reducer1",
  value: "App3 - reducer1"
};

const reducer1 = (state = InitialState1, action) => {
  switch (action.type) {
    case "REDUCER_TYPE1":
      return {
        ...state,
        value: "App3 - reducer1 - type1 - updated"
      };
    case "REDUCER_TYPE2":
      return {
        ...state,
        value: "App3 - reducer1 - type2 - updated"
      };
    default:
      return state;
  }
};

export { reducer1 };
