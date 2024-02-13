import axios from "axios";


const PublicApi = axios.create({
    baseURL:"http://localhost:5000"
})

export default PublicApi;