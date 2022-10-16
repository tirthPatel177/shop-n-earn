import React, { useState } from "react";
import SavingsIcon from "@mui/icons-material/Savings";
import { Button, TextField, useMediaQuery } from "@mui/material";
import colors from "../../theme/colors";

const Login = () => {
  const greaterThan768 = useMediaQuery("(min-width:768px)");
  const [loginActive, setloginActive] = useState(true);
  const [isCustomer, setisCustomer] = useState(true);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  return (
    <>
      <div className="flex items-center justify-center flex-col md:flex-row">
        <div className="w-1/2">
          {greaterThan768 ?
            <img className="h-screen w-full" src="https://images.unsplash.com/photo-1633879860828-30532d861528?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8d2FsbHBhcGVyJTIwZm9yJTIwbW9iaWxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" />
            :
            <div className="flex items-center justify-center mb-6 mt-8">
              <SavingsIcon />
            </div>
          }
        </div>
        {
          greaterThan768 ?
            <div className="px-6 pb-6 rounded-xl w-1/2">
              <nav className="flex gap-4 -mt-3">
                <div
                  className="cursor-pointer px-2 rounded py-1"
                  onClick={() => setisCustomer(true)}
                  style={{ background: isCustomer ? colors.primary : colors.bg2 }}
                >
                  Customer
                </div>
                <div
                  className="cursor-pointer px-2 rounded py-1"
                  onClick={() => setisCustomer(false)}
                  style={{ background: !isCustomer ? colors.primary : colors.bg2 }}
                >
                  Business
                </div>
              </nav>
              {loginActive ? (
                <p className="text-xs mt-1 mb-1">
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
            :
            <div className="px-6 pb-6 rounded-xl w-1/2" style={{ boxShadow: "1px 1px 10px gray" }}>
              <nav className="flex items-center justify-center gap-4 -mt-3">
                <div
                  className="cursor-pointer px-2 rounded py-1"
                  onClick={() => setisCustomer(true)}
                  style={{ background: isCustomer ? colors.primary : colors.bg2 }}
                >
                  Customer
                </div>
                <div
                  className="cursor-pointer px-2 rounded py-1"
                  onClick={() => setisCustomer(false)}
                  style={{ background: !isCustomer ? colors.primary : colors.bg2 }}
                >
                  Business
                </div>
              </nav>
              {loginActive ? (
                <p className="text-xs mt-1 mb-1">
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
