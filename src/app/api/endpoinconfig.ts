import axios, { AxiosResponse } from "axios";

axios.defaults.baseURL = '';
const responsedata = (response:AxiosResponse)=>response.data;