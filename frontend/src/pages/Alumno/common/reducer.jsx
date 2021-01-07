const initialState = {
  loading: true,
  noControl: "",
  studentData: {},
  fichaMedica: {},
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_STUDENT_DATA":
      return {
        ...state,
        loading: false,
        noControl: payload.studentData.noControl,
        studentData: payload.studentData,
        fichaMedica: payload.fichaMedica,
      };
    default:
      return state;
  }
};

export { reducer, initialState };
