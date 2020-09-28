const initialState = {
  loading: true,
  studentData: {},
  fichaMedica: {},
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_LOADING":
      return {
        ...state,
        loading: false,
        ...payload,
      };
    default:
      return state;
  }
};

export { reducer, initialState };
