import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers";
import * as yup from "yup";
import api from "../../services/auth";
import logo from "../../assets/logo.png";

const Index = () => {
  const [loading, setLoading] = useState(false);
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Ingrese un email válido.")
      .required("Email es un campo requerido."),
    password: yup.string().required("Contraseña es un campo requreido."),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    setLoading(true);
    api
      .login(data)
      .then((res) => {
        if (res.error) {
          alert(res.message);
          setLoading(false);
        } else {
          localStorage.setItem("token", res);
          window.location.href = "/dashboard";
          setLoading(false);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="text-center">
        <img src={logo} alt="qrreport" className="my-5" width="180px" />
      </div>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <input
            type="email"
            name="email"
            className="form-control custom-form-control"
            placeholder="Correo electrónico"
            ref={register}
            required
          />
          <small className="text-danger">{errors.email?.message}</small>
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            className="form-control custom-form-control"
            placeholder="Contraseña"
            ref={register}
            required
          />
          <small className="text-danger">{errors.password?.message}</small>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary btn-block">
            {!loading ? (
              "Iniciar"
            ) : (
              <div
                className="spinner-border spinner-border-sm text-light"
                role="status"
              >
                <span className="sr-only">Iniciando...</span>
              </div>
            )}
          </button>
        </div>
      </form>
      <div className="text-center">
        <small className="text-muted">
          &copy; 2020 - QR-REPORT <br /> Made with &hearts; to you.
        </small>
      </div>
    </div>
  );
};

export default Index;
