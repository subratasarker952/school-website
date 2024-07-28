import axios from "axios";

const axiosSecure = axios.create({
    baseUrl: 'http://localhost:3000',
    headers: {
        Authorization: `Bearer ${localStorage.getItem('accessToken')}`
    }
})
const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;