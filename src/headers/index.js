import React, { useState } from 'react'
import { CrossIcon, NavIcon } from '../assets/icons';
import { Button } from "@mui/material";
import "./style.css"

const Header = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='flex items-center justify-center px-4 navbg'>
            <div className="w-full" style={{ maxWidth: "1400px" }}>
                <div className="flex justify-between items-center py-2 ">
                    <a href="/">
                        <p className='text-text1 font-bold'>
                            logo
                        </p>
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
                        <div className='absolute top-0 left-0 w-full h-full bg-primary'>
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
    )
}

export default Header