import axios from "axios";

const baseUrl = "http://localhost:3001/user";

const login = (credentials) => {
  return axios.post(`${baseUrl}/login`, credentials);
};

const register = (data) => {
  const formData = new FormData();
  formData.append("name", data.name);
  formData.append("contact", data.contact);
  formData.append("email", data.email);
  formData.append("password", data.password);

  return axios.post(`${baseUrl}/register`, formData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

function getUser(id) {
  return axios.get(`${baseUrl}/${id}`);
}

function getAllUser() {
  return axios.get(`${baseUrl}/`);
}

function update(id, data) {
  const formData = new FormData();

  console.log(data)
  formData.append("fullname", data.fullname);
  formData.append("contact", data.contact);
  formData.append("email", data.email);
  formData.append("password", data.password);

  return axios.put(`${baseUrl}/${id}`, formData, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

function deleteAccount(id) {
  return axios.delete(`${baseUrl}/${id}`);
}
export default {
  login,
  register,
  getUser,
  update,
  deleteAccount,
  getAllUser,
  update,
};
