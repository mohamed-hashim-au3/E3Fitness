const initialState = {
  videos: []
};

export const Home = (state = initialState, action) => {
  switch (action.type) {
    case "FIRS_REDUCER":
      return state;
    default:
      return state;
  }
};
