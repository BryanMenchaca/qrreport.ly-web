import axios from "axios";

const host = process.env.HOST || "http://localhost:4000/api/students";
const headers = {
  headers: { Authorization: "Bearer " + localStorage.getItem("token") },
};

const registerStudent = async (studentData) => {
  const { data } = await axios.post(`${host}/createOne`, studentData, headers);
  return data;
};

const getRandomStudents = async () => {
  const { data } = await axios.get(`${host}/random/`, headers);
  return data;
};

const search = async (value) => {
  const { data } = await axios.get(`${host}/search?value=${value}`, headers);
  return data;
};

const getStudentInfo = async (noControl) => {
  const { data } = await axios.get(`${host}/getOne/${noControl}`, headers);
  return data;
};

const createDocument = async (route, documentData) => {
  const { data } = await axios.post(
    `${host}/createDocument/${route}`,
    documentData,
    headers
  );
  return data;
};

const getFolio = async (type) => {
  const { data } = await axios.get(`${host}/getFolio/${type}`, headers);
  return data;
};

const edit = async (newData) => {
  const { data } = await axios.post(`${host}/edit`, newData, headers);
  return data;
};

export default {
  getRandomStudents,
  search,
  registerStudent,
  getStudentInfo,
  createDocument,
  getFolio,
  edit,
};
