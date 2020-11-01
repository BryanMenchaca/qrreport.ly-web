const initialState = {
  noControl: "",
  studentData: {
    reportes: [],
    citatorios: [],
    suspensiones: [],
  },
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_STUDENT_ID":
      return {
        ...state,
        noControl: payload,
      };
    default:
      return state;
  }
};

export { reducer, initialState };
