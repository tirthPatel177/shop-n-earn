import React, { useState } from "react";
import SavingsIcon from "@mui/icons-material/Savings";
import { Button, TextField, useMediaQuery } from "@mui/material";
import colors from "../../theme/colors";
import image from "./../../assets/Shopping-cuate.png"

const Login = () => {
  const greaterThan768 = useMediaQuery("(min-width:768px)");
  const greaterThan550 = useMediaQuery("(min-width:550px)");
  const [loginActive, setloginActive] = useState(true);
  const [isCustomer, setisCustomer] = useState(true);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  return (
    <>
      <div className="flex items-center justify-center flex-col md:flex-row">
        {greaterThan768 ?
          <div className="w-1/2 h-screen flex items-center justify-center flex-col">
            <img className="w-8/12 mx-auto" src={image} alt="image" />
          </div>
          :
          <div className="w-1/2">
            <div className="flex items-center justify-center mb-6 mt-8">
              <h2 className="font-bold text-primary text-2xl mb-8">Login/Register</h2>
            </div>
          </div>
        }
        {
          greaterThan768 ?
            <div className="px-6 pb-6 rounded-xl w-1/2" style={{ maxWidth: "700px" }}>
              <h2 className="font-bold text-2xl mb-8 text-primary">Login/Register</h2>
              <nav className="flex items-center justify-between -mt-3 mb-3">
                <div>
                  <div className="w-3/4">
                    <h3 className="font-bold text-base">For Customers</h3>
                    <p className="text-xs text-text2 my-2">join our platform for best deals and exciting rewards</p>
                  </div>
                  <div
                    className="cursor-pointer px-2 rounded py-1 w-fit"
                    onClick={() => setisCustomer(true)}
                    style={{ background: isCustomer ? colors.primary : colors.bg2, boxShadow: "1px 1px 10px #cecbcb" }}
                  >
                    Customer
                  </div>
                </div>
                <div>
                <div className="w-3/4">
                    <h3 className="font-bold text-base">For Businesses</h3>
                    <p className="text-xs text-text2 my-2">join our platform for better customer retention</p>
                  </div>  
                  <div
                    className="cursor-pointer px-2 rounded py-1 w-fit"
                    onClick={() => setisCustomer(false)}
                    style={{ background: !isCustomer ? colors.primary : colors.bg2, boxShadow: "1px 1px 10px #cecbcb" }}
                  >
                    Business
                  </div>
                </div>
              </nav>
              {loginActive ? (
                <p className="text-xs mt-1 mb-1">
                  If you are new user please{" "}
                  <span className="text-secondary hover:text-primary cursor-pointer p-2" onClick={() => setloginActive(false)}>
                    Register
                  </span>
                </p>
              ) : (
                <p className="text-xs mt-1 mb-1">
                  If you are old user please{" "}
                  <span className="text-secondary hover:text-primary cursor-pointer p-2" onClick={() => setloginActive(true)}>
                    login
                  </span>
                </p>
              )}
              <form
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  name="email"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                />
                <TextField
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  name="password"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                />
                {loginActive ? (
                  <Button variant="contained">Login</Button>
                ) : (
                  <Button variant="contained">Register</Button>
                )}
              </form>
            </div>
            :
            <div className="px-6 pb-6 rounded-xl" style={{ boxShadow: "1px 1px 10px #cecbcb", width: (greaterThan550 ? "50%" : "85%") }}>
              <nav className="flex items-center justify-center gap-4 -mt-3 mb-3">
                <div
                  className="cursor-pointer px-2 rounded py-1"
                  onClick={() => setisCustomer(true)}
                  style={{ background: isCustomer ? colors.primary : colors.bg2, boxShadow: "1px 1px 10px #cecbcb" }}
                >
                  Customer
                </div>
                <div
                  className="cursor-pointer px-2 rounded py-1"
                  onClick={() => setisCustomer(false)}
                  style={{ background: !isCustomer ? colors.primary : colors.bg2, boxShadow: "1px 1px 10px #cecbcb" }}
                >
                  Business
                </div>
              </nav>
              {loginActive ? (
                <p className="text-xs mt-1 mb-3">
                  If you are new user please{" "}
                  <span className="text-primary cursor-pointer p-2" onClick={() => setloginActive(false)}>
                    Register
                  </span>
                </p>
              ) : (
                <p className="text-xs mt-1 mb-1">
                  If you are old user please{" "}
                  <span className="text-primary cursor-pointer p-2" onClick={() => setloginActive(true)}>
                    login
                  </span>
                </p>
              )}
              <form
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  name="email"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                />
                <TextField
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  name="password"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                />
                {loginActive ? (
                  <Button variant="contained">Login</Button>
                ) : (
                  <Button variant="contained">Register</Button>
                )}
              </form>
            </div>
        }

      </div>
    </>
  );
};

export default Login;
