import axios from 'axios'
import { TOKEN_NAME } from '../constants'
// const baseURL = 'http://3.6.235.42:3000/api'
const baseURL = "https://api.beta.damble.io/api"

// no auth token required
export const getAPI = async (url) => {
    try {
        const response = await axios.get(`${baseURL}/${url}`, {
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                Accept: "application/json",
            }
        })
        return response
    } catch (error) {
        console.log("error=>", error)
    }

}

export const getAPIAuth = async (url) => {
    const token = localStorage.getItem(TOKEN_NAME)
    try {
        const response = await axios.get(`${baseURL}/${url}`, {
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                Accept: "application/json",
                Authorization: `Bearer ${token}`,
            }
        })
        return response
    } catch (error) {
        console.log("error=>", error)
    }
}

// no auth token required
export const postAPI = async (url, params) => {
    try {
        const response = await axios.post(`${baseURL}/${url}`, params, {
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                Accept: "application/json",
            }
        })
        return response
    } catch (error) {
        console.log("error=>", error)
    }
}

export const postAPIAuth = async (url, params) => {
    const token = localStorage.getItem(TOKEN_NAME)
    try {
        const response = await axios.post(`${baseURL}/${url}`, params, {
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                Accept: "application/json",
                Authorization: `Bearer ${token}`,
            }
        })
        return response
    } catch (error) {
        console.log("error=>", error)
    }
}