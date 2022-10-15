import React, { useState } from "react";
import SavingsIcon from "@mui/icons-material/Savings";
import { Button, TextField, useMediaQuery } from "@mui/material";
import colors from "../../theme/colors";

const Login = () => {
  const greaterThan600 = useMediaQuery("(min-width:600px)");
  const [loginActive, setloginActive] = useState(true);
  const [isCustomer, setisCustomer] = useState(true);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: greaterThan600 ? "row" : "column",
          minHeight: "50vh",
        }}
      >
        <div>
          <SavingsIcon />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <nav
            style={{
              display: "flex",
              gap: "1rem",
            }}
          >
            <div
              onClick={() => setisCustomer(true)}
              style={{
                background: isCustomer ? colors.primary : "grey",
                cursor: "pointer",
                color: colors.text1,
              }}
            >
              Customer
            </div>
            <div
              onClick={() => setisCustomer(false)}
              style={{
                background: !isCustomer ? colors.primary : "grey",
                cursor: "pointer",
                color: colors.text1,
              }}
            >
              Business
            </div>
          </nav>
          {loginActive ? (
            <p>
              If you are new user please{" "}
              <span
                onClick={() => setloginActive(false)}
                style={{
                  color: colors.primary,
                  cursor: "pointer",
                  padding: "0.5rem",
                }}
              >
                Register
              </span>
            </p>
          ) : (
            <p>
              If you are old user please{" "}
              <span
                onClick={() => setloginActive(true)}
                style={{
                  color: colors.primary,
                  cursor: "pointer",
                  padding: "0.5rem",
                }}
              >
                Login
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
              label="Outlined"
              variant="outlined"
              name="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Outlined"
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
      </div>
    </>
  );
};

export default Login;
