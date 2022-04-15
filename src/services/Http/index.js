// node modules
import axios from 'axios';

//local files
import { HttpConfig } from './config';
// import store from '../../redux/app/store';

let Http = axios.create({ baseURL: HttpConfig.baseURL });

// const getUserState = () => {
//   const state = store.getState();
//   return state.user;
// };
// Http.interceptors.request.use(
//   (req) => {
//     // you can add token to header if user is authenticated
//     const user = getUserState();
//     if (user.isAuthenticated && user.jwt) req.headers['Authorization'] = user.jwt;
//     return req;
//   },
//   (err) => {
//     return Promise.reject(err);
//   }
// );

// handle api errors globally
// Http.interceptors.response.use(null, (error) => {
//   const clientError = error.response?.status >= 400 && error.response?.status < 500;
//   const serverError = error.response?.status >= 500 && error.response?.status < 600;

//   if (clientError || serverError) {
//     alert(error.response?.data?.message);
//   } else {
//     alert(error);
//   }

//   return Promise.reject(error);
// });

export default Http;
