import React from "react";
import { ReactDOM } from "react";
import { useState } from "react";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faDumbbell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { projectdata } from "../utils/data";


// const Project = (props) => {
//     const progress = 'completed';
//     return (
//         <>
//             <div className="bg-white border-2 rounded-[22px] flex flex-col justify-between items-center text-center h-[300px] md:h-[280px] md:h-[280px] m-4 p-8">
//                 <div className="text-xl font-bold max-w-[86%] flex items-center">
//                     <FontAwesomeIcon className="mr-3 text-green-600 text-[34px]" size="" icon={faDumbbell} />
//                     {projectdata[0].name}
//                 </div>
//                 <div className="max-w-[76%]">
//                     {projectdata[0].details}
//                 </div>
//                 <div>
//                     <button className="h-8 w-[140px] bg-blue-100 rounded-md text-blue-600">
//                         <FontAwesomeIcon className="mr-2" icon={faArrowUpRightFromSquare} />
//                         <a href={projectdata[0].href}>{projectdata[0].href}</a>
//                     </button>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Project;


const Project = (props) => {
    const progress = 'completed';
    return (
        <>
            {projectdata.map((project) => {
                return (
                    <div className="bg-white border-2 rounded-[22px] flex flex-col justify-between items-center text-center h-[300px] md:h-[280px] md:h-[280px] m-4 p-8">
                        <div className="text-xl font-bold max-w-[86%] flex items-center">
                            <FontAwesomeIcon className={`mr-3 text-${project.iconcolor}-600 text-[34px]`} size="" icon={project.icon} />
                            {project.name}
                        </div>
                        <div className="max-w-[76%]">
                            {project.details}
                        </div>
                        <div>
                            <button className="h-8 w-[140px] bg-blue-100 rounded-md text-blue-600">
                                <FontAwesomeIcon className="mr-2" icon={faArrowUpRightFromSquare} />
                                <a href={project.href}>{project.href}</a>
                            </button>
                        </div>
                    </div>
                )
            })}
        </>
    );
}

export default Project;

