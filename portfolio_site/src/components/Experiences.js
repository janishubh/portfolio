import React from "react";
import { ReactDOM } from "react";
import Experience from "./Experience";
import { experienceData } from "../utils/data";

export default function Experiences() {
    return (
        <>
            <div className="h-[300px] mt-8 text-gray-800 fade-bg text-gray-100 flex flex-col p-4 justify-center items-center md:h-[500px]">
                <div className="font-bold text-center text-[25px] md:text-[38px]">
                    My Recent Work
                </div>

                <div className="font-medium max-w-[510px] md:max-w-[630px] text-[16px] md:text-[22px]  text-center m-6 h-[100px] text-space">
                    Here are a few trainings/internships/jobs I've worked on recently. Want to see more? <a href="" className="text-green-400">Email me.</a>
                </div>
            </div>

            <div className="h-auto flex justify-center">
                <div className="h-auto w-[88%] md:-mt-[140px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                    <Experience />
                </div>
            </div>
        </>
    )
}
