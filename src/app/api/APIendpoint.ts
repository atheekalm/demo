import axios, { AxiosError, AxiosResponse } from "axios";



const sleep = () => new Promise(resolve => setTimeout(resolve, 500));

axios.defaults.baseURL = "https://localhost:5001/";
const responsedata = (response: AxiosResponse) => response.data;




axios.interceptors.response.use(async responce => {
    await await sleep();
    return responce
}, (error: AxiosError) => {
    const { data, status } = error.response!;
    switch (status) {
        case 400:
            console.log(data.title);
            break;
        case 401:
            console.log(data.title);
            break;
        case 500:
            console.log(data.title);
            break;
        default:
            break;
    }
    return Promise.reject(error.response);
});




const requests = {
    get: (url: string) => axios.get(url).then(responsedata),
    post: (url: string, body: {}) => axios.post(url, body).then(responsedata)
}

const Auth = {
    login: (values: any) => requests.post('Auth/login', values),
    register: (values: any) => requests.post('Auth/register', values),
    currentUser: () => requests.get('Auth/currentUser'),
}

const APIendpoints = {
    Auth
}

export default APIendpoints;