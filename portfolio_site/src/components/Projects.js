import React from "react";
import { ReactDOM } from "react";
import Project from "../components/Project"

export default function Projects() {
    return (
        <>
            <div className="h-[300px] mt-5 md:mt-0 text-white fade-bg flex flex-col p-4 justify-center items-center md:h-[500px]">
                <div className="font-bold text-center text-[20px] md:text-[30px]">
                    My Projects
                </div>

                <div className="font-medium max-w-[510px] md:max-w-[630px] text-[12px] md:text-[16px]  text-center m-6 h-[100px] text-space">
                    I'm a bit of a digital product junky. Over the years, I've used hundreds of web and mobile apps in different industries and verticals. Eventually, I decided that it would be a fun challenge to try designing and building my own.
                </div>
            </div>

            <div className="h-auto flex justify-center">
                <div className="h-auto w-[88%] md:-mt-[140px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <Project />

                </div>
            </div>
        </>
    )
}
