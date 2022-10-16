import axios from "axios";
import authHeader from "../config/authHeader";
import config from "./../config";

export const getAllStore = async () => {
  let header = await authHeader();

  const result = await axios
    .get(config.apiEndPoint + "api/store/getStoreUser", {
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

export const getRecentTransactions = async (data) => {
  let header = await authHeader();
  const result = await axios
    .get(config.apiEndPoint + "api/transaction/getStore", {
      params: { store: data._id },
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
