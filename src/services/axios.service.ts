import axios from "axios";

import baseURL from "../configs/urls";

export const axiosService = axios.create({
    baseURL
});