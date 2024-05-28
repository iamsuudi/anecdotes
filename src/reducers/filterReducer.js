const filterReducer = (state = "", action) => {
  console.log('state filter: ', state)
  console.log('action filter', action)
  switch (action.type) {
    case "SET_FILTER":
      return action.payLoad;
    default:
      return state;
  }
};

export function filterBy(content) {
  return { type: "SET_FILTER", payLoad: content };
}

export default filterReducer;
