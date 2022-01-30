import axios from "axios";
import authHeader from "./auth-header";

const API_URL = process.env.REACT_APP_API_URL;

const getCustomers = () => {
  return axios.get(`${API_URL}user/auth/all`, {
    headers: authHeader(),
  });
};

const getCustomer = (customerId) => {
  return axios.get(`${API_URL}user/${customerId}/auth`, {
    headers: authHeader(),
  });
};
const updateCustomer = (customerId, customer) => {
  return axios.put(`${API_URL}user/${customerId}/auth`, customer, {
    headers: authHeader(),
  });
};

const deleteCustomer = (customerId) => {
  return axios.delete(`${API_URL}user/${customerId}/auth`, {
    headers: authHeader(),
  });
};

const searchCustomers = (customerSsn) => {
  return axios.get(
    `${API_URL}user/auth/search?ssn=${customerSsn}`,

    {
      headers: authHeader(),
    }
  );
};

export {
  getCustomers,
  getCustomer,
  searchCustomers,
  updateCustomer,
  deleteCustomer,
};
