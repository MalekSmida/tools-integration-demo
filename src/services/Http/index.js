// node modules
import axios from 'axios';

//local files
import { HttpConfig } from './config';

let Http = axios.create({ baseURL: HttpConfig.baseURL });

// handle api errors globally
Http.interceptors.response.use(null, (error) => {
  const clientError = error.response?.status >= 400 && error.response?.status < 500;
  const serverError = error.response?.status >= 500 && error.response?.status < 600;

  if (clientError || serverError) {
    console.log(error.response?.data?.message);
  }
  return Promise.reject(error);
});

export default Http;
