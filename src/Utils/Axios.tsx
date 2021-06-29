import axios from "axios";
const configuredAxios = axios.create({
  baseURL: process.env.REACT_APP_SNAPI_HEROKU_BACKEND_URL
});
configuredAxios.defaults.headers.post["Content-Type"] = "application/json";
configuredAxios.defaults.withCredentials = true;

export default configuredAxios;