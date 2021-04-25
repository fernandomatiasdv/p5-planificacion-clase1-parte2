import axios from "axios";

const REACT_APP_API_BASE_URL = "https://rickandmortyapi.com/api";

const API = axios.create({
  baseURL: REACT_APP_API_BASE_URL,
  headers: {
    common: {
      "Content-Type": "application/json",
    },
  },
});

export default API;
