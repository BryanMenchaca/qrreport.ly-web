import axios from "axios";

const host = process.env.HOST || "http://localhost:4000/api/groups";
const headers = {
  headers: { Authorization: "Bearer " + localStorage.getItem("token") },
};

const getAllGroups = async () => {
  const { data } = await axios.get(`${host}/getAll`, headers);
  return data;
};

const getInfoAndStudentsGroup = async ({ grupo, generacion }) => {
  const { data } = await axios.get(
    `${host}/getInfoAndStudentsGroup?grupo=${grupo}&generacion=${generacion}`,
    headers
  );
  return data;
};

const createDocument = async (documentData) => {
  const { data } = await axios.post(
    `${host}/createDocument`,
    documentData,
    headers
  );
  return data;
};

const exp = { getAllGroups, getInfoAndStudentsGroup, createDocument };

export default exp;
