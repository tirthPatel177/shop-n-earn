import axios from "axios";
import authHeader from "../config/authHeader";
import config from "./../config";

export const loginUser = async (data) => {
  const result = await axios
    .post(config.apiEndPoint + "api/auth/login", data)
    .then((res) => {
      console.log("success api called", res);
      return res.data;
    })
    .catch((error) => {
      return false;
    });
  return result;
};

export const registerUser = async (data) => {
  console.log(config);

  const result = await axios
    .post(config.apiEndPoint + "api/auth/register", data)
    .then((res) => {
      console.log("success api called", res);
      return res.data;
    })
    .catch((error) => {
      return false;
    });
  return result;
};

export const loginStore = async (data) => {
  const result = await axios
    .post(config.apiEndPoint + "api/store/login", data)
    .then((res) => {
      console.log("success api called", res);
      return res.data;
    })
    .catch((error) => {
      return false;
    });
  return result;
};

export const registerStore = async (data) => {
  const result = await axios
    .post(config.apiEndPoint + "api/store/register", data)
    .then((res) => {
      console.log("success api called", res);
      return res.data;
    })
    .catch((error) => {
      return false;
    });
  return result;
};


export const createTier = async (data) => {
  let header = await authHeader();
  const result = await axios
    .post(config.apiEndPoint + "api/tier/create", data, {
      headers: header,
    })
    .then((res) => {
      console.log("success api called", res);
      return res.data;
    })
    .catch((error) => {
      return false;
    });
  return result;
};