import axios from 'axios';

const baseAPI = '/api';

const Axios=axios.create({
    baseURL: baseAPI
})

export default Axios;