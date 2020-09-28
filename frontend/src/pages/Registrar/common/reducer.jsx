const initialState = {
  step: 1,
  studentData: {
    noControl: "",
    nombre: "",
    apellidoP: "",
    apellidoM: "",
    semestre: "",
    grupo: "",
    especialidad: "",
    generacion: "",
    curp: "",
    nss: "",
  },
  ficha_medica: {
    padecimientos: "Ninguna indicación.",
    notas_medicas: "Ninguna indicación.",
    alergias_reacciones: "Ninguna indicación.",
    medicamentos: "Ninguna indicación.",
    grupo_sanguineo: "Sin asignar.",
    estatura: "Sin asignar.",
    peso: "Sin asignar.",
    contacto_emergencia: {
      parentesco: "Sin asignar.",
      nombre: "Sin asignar.",
      telefono: "Sin asignar.",
      etiqueta: "Sin asignar.",
    },
  },
};

const reducer = (state = initialState, action) => {
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
      return { ...initialState };
    default:
      return state;
  }
};

export { reducer, initialState };

const updateState = (state, field, newData) => {
  return {
    ...state,
    step: state.step + 1,
    [field]: { ...newData },
  };
};
