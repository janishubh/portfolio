import React from "react";
import { ReactDOM } from "react";
import { useState } from "react";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { experienceData } from "../utils/data";




const Experience = (props) => {
    const progress = 'completed';
    return (
        <>
            {experienceData.map((experience) => {
                return (
                    <div className="border-2 bg-white rounded-[22px] flex flex-col md:flex-row justify-between items-center text-center h-[340px] md:h-[320px] md:h-[280px] m-4 p-8">
                        <div className="text-xl font-bold min-w-[30%] h-[98%] flex flex-col items-center justify-around">
                            <div>
                                {experience.post}
                                <div className={`text-${experience.iconcolor}-600`}>
                                    @{experience.companyName}
                                </div>
                                <div className="text-base min-w-[180px] italic font-bold mt-6">{experience.date}</div>
                            </div>

                        </div>
                        <div className=" h-[90%] max-w-[60%] flex flex-col items-center justify-around">
                            <div>{experience.details}</div>
                            <button className="h-8 w-[140px] bg-blue-100 rounded-md text-blue-600">
                                <FontAwesomeIcon className="mr-2" icon={faArrowUpRightFromSquare} />
                                <a href={experience.href}>{experience.href}</a>
                            </button>
                        </div>
                    </div>
                )
            })}
        </>
    );
}

export default Experience;

