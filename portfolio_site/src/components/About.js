import React from "react";
import { ReactDOM } from "react";

export default function About() {
    return (
        <>
            <div className="h-[300px] text-white fade-bg flex flex-col p-4 justify-center items-center md:h-[500px]">
                <div className="font-bold text-center text-[20px] md:text-[30px]">
                    Hi, I’m Shubh. Nice to meet you.
                </div>

                <div className="font-medium max-w-[510px] md:max-w-[630px] text-[12px] md:text-[16px]  text-center m-6 h-[100px] text-space">
                    Since beginning my journey as a freelance designer over 11 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.
                </div>
            </div>
        </>
    )
}
