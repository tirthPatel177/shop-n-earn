import React, { useState } from "react";
import { CrossIcon, NavIcon } from "../assets/icons";
import { Button, useMediaQuery } from "@mui/material";
import "./style.css";
import logo1 from "./../assets/shop-n-earn-1.png";
import logo3 from "./../assets/shop-n-earn-3.png";

const Header = () => {
    const greaterThan768 = useMediaQuery("(min-width:768px)");
  const [open, setOpen] = useState(false);
  return (
    <div className="flex items-center justify-center px-4 navbg">
      <div className="w-full" style={{ maxWidth: "1400px" }}>
        <div className="flex justify-between items-center py-2 ">
          <a href="/">
            {/* <p className='text-text1 font-bold'>
                            logo
                        </p> */}
            {greaterThan768 ? 
                <img src={logo1} alt="logo" className="h-20 w-20" />
            :
                <img src={logo3} alt="logo" className="h-20 w-20" />
            }
          </a>
          <div className="flex gap-3 desktop items-center ">
            <Button variant="contained">Logout</Button>
          </div>
          <div
            className="mobile cursor-pointer "
            onClick={() => setOpen(!open)}
          >
            {open ? <CrossIcon /> : <NavIcon />}
          </div>
        </div>
        <div>
          {open ? (
            <div className="absolute top-0 left-0 w-full h-full bg-primary">
              <div
                className="mobile absolute top-1 right-1 cursor-pointer"
                onClick={() => setOpen(!open)}
              >
                {open ? <CrossIcon /> : <NavIcon />}
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
