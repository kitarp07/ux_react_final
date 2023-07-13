import axios from "axios";

const baseUrl = 'http://localhost:3001/user'

const login = (credentials) => {
    return axios.post(`${baseUrl}/login`, credentials)
}

const register = (data) => {
    const formData = new FormData();
    formData.append("name", data.name)
    formData.append("contact", data.contact)
    formData.append("email", data.email)
    formData.append("password", data.password)

    return(axios.post(`${baseUrl}/register`, formData
    , {
        headers: {
            "Content-Type": "application/json"
        }

    }))
}

function getUser (id) {
    return axios.get(`${baseUrl}/${id}`)
}



function update(id, data){
    const formData = new FormData();
    formData.append("fname", data.fname)
    formData.append("lname", data.lname)
    formData.append("username", data.username)
   
    formData.append("image", data.image)
    return axios.put(`${baseUrl}/${id}`, formData)

}

function deleteAccount(id){
    return axios.delete(`${baseUrl}/${id}`)

}
export default {login, register, getUser, update, deleteAccount};