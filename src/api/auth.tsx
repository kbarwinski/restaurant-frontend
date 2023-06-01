import axios from "axios";
import { urlPrefix } from "../constants/apiurl";

const baseUrl = urlPrefix + "/api/v1/user";

export interface LoginArgs {
  email: String;
  password: String;
}

export interface RegisterArgs {
  email: String;
  password: String;
  phone: String;
  name: String;
  surname: String;
  street: String;
  streetNumber: String;
  houseNumber: String;
}

export const AuthApi = {
  login: async function (args: LoginArgs) {
    const result = await axios.post(baseUrl + "/login", args);
    return result;
  },
  register: async function (args: RegisterArgs){
    const result = await axios.post(baseUrl + "/register", args);
    return result;
  }
};
