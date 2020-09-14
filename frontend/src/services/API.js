import axios from "axios";

const host = process.env.HOST || "http://localhost:4000/api";
//const headers = { headers: {"auth-token": localStorage.usertoken} }

const registerStudentData = (studentData) => {
  const response = axios.post(
    `${host}/students/registerStudentData`,
    studentData
  );
  console.log(response);
};

export { registerStudentData };
