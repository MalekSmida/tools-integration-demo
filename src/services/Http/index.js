// node modules
import axios from "axios";

//local files
import { HttpConfig } from "./config";

let Http = axios.create({ baseURL: HttpConfig.baseURL });

export default Http;
