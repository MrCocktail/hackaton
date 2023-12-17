import axios from "axios";

const Axios = axios.create({
    baseURL: "http://localhost:8000"
    // baseURL: process.env.REACT_APP_API_BASE_URL
})

export default Axios