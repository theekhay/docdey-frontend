import axios from "axios";

const baseDomain = process.env.VUE_APP_API_BASE_URL;
const baseURL = `${baseDomain}/api/v1/`;

const httpClient = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${localStorage.getItem("authToken")}`
  }
});

//set max timeout for API calls
httpClient.defaults.timeout = 20000;

export default httpClient;
