import axios from 'axios'

var axiosInstance = axios.create({
    baseURL:'http://192.168.15.140:3232/api/',
});

export default axiosInstance
    