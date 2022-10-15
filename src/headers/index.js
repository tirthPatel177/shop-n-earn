import React, { useState } from 'react'
import { CrossIcon, NavIcon } from '../assets/icons';
import "./style.css"

const LandingHeader = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='flex items-center justify-center px-4'>
            <div className="w-full" style={{ maxWidth: "1400px" }}>
                <div className="flex justify-between items-center py-2 ">
                        <a href="/">
                            <p className='text-text1 font-bold'>
                                logo
                            </p>
                        </a>
                    <div>
                        <a href="https://app.finplan.io/auth/login/">
                            <p className='text-text1 font-medium text-xl rounded-md bg-primary px-3 py-2'>
                                Get started
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingHeader