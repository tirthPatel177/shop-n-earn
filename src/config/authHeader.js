import { store } from "../redux/store";

const authHeader = async () => {
  // const user = JSON.parse(localStorage.getItem("user"));
  const token = await store.getState().authenticated.token;
  const isAuthenticated = await store.getState().authenticated.isAuthenticated;
  let res = isAuthenticated && token;
  if (res) {
    return { Authorization: "Bearer " + token };
  } else {
    window.location.href = "/";
    console.log("go to login");
    return false;
  }
};

export default authHeader;
