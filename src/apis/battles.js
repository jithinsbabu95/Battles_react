import axios from 'axios';

export default axios.create({
    baseURL:'http://139.59.18.69:8080/api/battles'
    // baseURL:'http://localhost:8080/api/battles'
})