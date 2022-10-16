import React, { useState } from 'react'
import { CrossIcon, NavIcon } from '../assets/icons';
import { Button } from "@mui/material";
import "./style.css"
import logo1 from "./../assets/shop-n-earn-1.png";

const LandingHeader = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='flex items-center justify-center px-4'>
            <div className="w-full" style={{ maxWidth: "1400px" }}>
                <div className="flex justify-between items-center py-2 ">
                    <a href="/">
                    <img src={logo1} alt="logo" className="h-20 w-20" />
                    </a>
                    <div>
                        <a href="/login">
                            <Button variant="contained">Get started</Button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingHeader;