const Reducer = (state: any, action: any) => {
  switch (action.type) {
    case "POPULATE":
      return action.items;
    case "ADD":
      return [...state, action.item];
    case "REMOVE":
      return state.filter((item: any) => item !== action.itemToBeDeleted);
    default:
      return state;
  }
};

export default Reducer;
