import { CONFIGs } from "../enum";

const WEB = CONFIGs.BACKEND_HOST;
const API = `${CONFIGs.BACKEND_HOST}/api`;

export const URLs = {
  //AUTH
  GET_AUTH: `${API}/auth/auth`,
  LOGIN: `${API}/auth/login`,
  UPDATE_PROFILE: `${API}/auth/profile`,

  //MANAGER

  GET_MANAGERS: `${API}/manager`,
  GET_MANAGER: `${API}/manager`,
  UPDATE_MANAGER: `${API}/manager`,
  DELETE_MANAGER: `${API}/manager`,

  //EMPLOYEE

  GET_EMPLOYEES: `${API}/employee`,
  GET_EMPLOYEE: `${API}/employee`,
  UPDATE_EMPLOYEE: `${API}/employee`,
  DELETE_EMPLOYEE: `${API}/employee`,
};
