import axios from "axios";

export default axios.create({
  baseURL: "http://100.27.4.52:8080",
  headers: {
    "Content-type": "application/json"
  }
});