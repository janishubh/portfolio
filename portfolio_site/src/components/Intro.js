import React from "react";
import { ReactDOM } from "react";
import avatar from '../utils/avatar.png'
import devices from '../utils/hero-devices.png'

export default function NavBar() {
    return (
        <>
            <div className="h-[1000px] flex flex-col items-center md:h-[1020px]">
                <div className="text-3xl font-bold text-center mt-12 md:mt-[80px] md:text-5xl text-gray-800">
                    Designer, Frontend Developer & Mentor
                </div>

                <div className="text-2xl text-center mt-6 max-w-[320px] md:mt-10 md:max-w-[820px]">
                    I design and code beautifully simple things, and I love what I do.
                </div>

                <div className="mt-12">
                    <img src={avatar} alt="" />
                </div>

                <div className="mt-[60px] md:mt-[120px]">
                    <img className="h-[420px] min-w-[100%]" src={devices} alt="" />
                </div>
            </div>
        </>
    )
}