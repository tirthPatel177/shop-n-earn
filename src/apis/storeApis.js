import axios from "axios";
import config from "./../config";

export const getAllStore = async () => {
  const result = await axios
    .get(config.apiEndPoint + "api/store/get")
    .then((res) => {
      console.log("success api called", res);
      return res.data;
    })
    .catch((error) => {
      return false;
    });
  return result;
};
