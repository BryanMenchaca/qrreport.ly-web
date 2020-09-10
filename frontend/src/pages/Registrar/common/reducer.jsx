export default (state, action) => {
  const { step } = state;
  const { type, payload } = action;

  switch (type) {
    case "NEXT_STEP":
      if (step === 1) return updateState(state, "studentData", payload);
      else if (step === 2) return updateState(state, "ficha_medica", payload);
      else if (step === 3) return updateState(state, "photo", payload);
      else return state;
    case "PREV_STEP":
      return { ...state, step: step - 1 };
    case "SUCCESS":
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
