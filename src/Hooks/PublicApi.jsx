import axios from "axios";


const url = axios.create({
    baseURL:"http://localhost:5000"
})

const PublicApi=()=>{
    return url;
}

export default PublicApi;