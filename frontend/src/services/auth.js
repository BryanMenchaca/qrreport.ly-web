import axios from "axios";

const host = process.env.HOST || "http://localhost:4000/api";

const login = async (credentials) => {
  const { data } = await axios.post(
    `${host}/accounts/admin/login`,
    credentials
  );

  return data;
};

const logout = () => {
  localStorage.removeItem("token");
  window.location.href = "/login";
};

const exp = { login, logout };

export default exp;
