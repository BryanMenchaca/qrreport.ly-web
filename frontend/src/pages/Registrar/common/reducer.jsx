import { registerStudentData } from "../../../services/API";

export default (state, action) => {
  const { step } = state;
  const { type, payload } = action;

  switch (type) {
    case "NEXT_STEP":
      if (step === 1) return updateState(state, "studentData", payload);
      else if (step === 2) return updateState(state, "ficha_medica", payload);
      else return state;
    case "PREV_STEP":
      return { ...state, step: step - 1 };
    case "REGISTER":
      console.log(state);
      registerStudentData(state);
      return state;
    default:
      return state;
  }
};

const updateState = (state, field, newData) => {
  return {
    ...state,
    step: state.step + 1,
    [field]: { ...newData },
  };
};
