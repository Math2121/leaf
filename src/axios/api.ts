import axios from "axios";

export default axios.create({
    baseURL: 'https://leafeditora.com.br',
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
    }
}) 