import Axios from "axios";

const axiosInstance = Axios.create({
    baseURL: "https://dummyjson.com",
});

export default axiosInstance;