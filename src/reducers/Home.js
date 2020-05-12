const initialState = {
  videos: [],
  login: false
};

export const Home = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        login: action.payload
      };
    default:
      return state;
  }
};
