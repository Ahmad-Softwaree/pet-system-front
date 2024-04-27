import { CONFIGs } from "../enum";

const WEB = CONFIGs.BACKEND_HOST;
const API = `${CONFIGs.BACKEND_HOST}/api`;

export const URLs = {
  //AUTH
  GET_AUTH: `${API}/auth/auth`,
  LOGIN: `${API}/auth/login`,
  REGISTER: `${API}/auth/register`,

  UPDATE_PROFILE: `${API}/auth/profile`,

  //MANAGER

  GET_MANAGERS: `${API}/manager`,
  GET_MANAGER: `${API}/manager`,
  UPDATE_MANAGER: `${API}/manager`,
  DELETE_MANAGER: `${API}/manager`,
  MAKE_EMPLOYEE: `${API}/manager/employee`,
  MAKE_HIGH_MANAGER: `${API}/manager/high_manager`,

  //EMPLOYEE

  GET_EMPLOYEES: `${API}/employee`,
  GET_EMPLOYEE: `${API}/employee`,
  UPDATE_EMPLOYEE: `${API}/employee`,
  DELETE_EMPLOYEE: `${API}/employee`,
  MAKE_MANAGER: `${API}/employee/manager`,

  //VETERINARY

  GET_VETERINARIES: `${API}/veterinary`,
  GET_VETERINARY: `${API}/veterinary`,
  UPDATE_VETERINARY: `${API}/veterinary`,
  DELETE_VETERINARY: `${API}/veterinary`,

  //CLINIC

  CHECK_PET: `${API}/clinic/check`,
  //PET

  GET_PETS: `${API}/pet`,
  GET_PET: `${API}/pet`,
  ADD_PET: `${API}/pet`,
  UPDATE_PET: `${API}/pet`,
  DELETE_PET: `${API}/pet`,

  //PRODUCT

  GET_PRODUCTS: `${API}/product`,
  GET_PRODUCT: `${API}/product`,
  ADD_PRODUCT: `${API}/product`,
  UPDATE_PRODUCT: `${API}/product`,
  DELETE_PRODUCT: `${API}/product`,
};
