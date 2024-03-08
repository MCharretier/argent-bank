import axios from 'axios'

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Content-Type': 'application/json'
    }
})

export const login = async ({ email, password }) => {
    try {
        const response = await instance.post('/login', {
            email: email,
            password: password
        })
        return response.data
    } catch (error) {
        return error.response.data
    }
}
