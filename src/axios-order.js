import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://react-burger-builder-e3091.firebaseio.com/"
});

export default axiosInstance;
