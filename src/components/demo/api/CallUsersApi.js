import axios from "axios";

const apiClient = axios.create(
    {
        baseURL: 'https://reqres.in'
    }
)

export const getUsers
    = (user) => apiClient.get(`/api/users/${user}`)