import React from "react";
import { ReactDOM } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons";
import { faCompassDrafting } from "@fortawesome/free-solid-svg-icons";
import { faChartPie } from "@fortawesome/free-solid-svg-icons";

export default function Skills() {
    return (
        <div className="flex justify-center text-lg">
            <div
                className="md:bg-white text-white md:text-black h-[1600px] w-[86%] mt-6 flex flex-col justify-between md:border-2 rounded-[15px] md:h-[700px] md:justify-between md:flex-row md:-mt-[80px]"
            >
                <div className="bg-gray-800 md:bg-transparent w-[100%] rounded-[14px] md:rounded-[0px] border-r-2 md:w-[33%] flex flex-col md:flex-col items-center">
                    <div className="mb-10">
                        <div className="flex justify-center items-center m-5 text-green-400">
                            <FontAwesomeIcon icon={faLayerGroup} mask="fa-regular fa-circle" size="3x" />
                        </div>
                        <p className="text-center font-bold text-xl p-3">Designer</p>
                        <p className="text-center p-3">I value simple content structure, clean design patterns, and thoughtful interactions.</p>
                    </div>

                    <div className="grid grid-cols-2 md:flex flex-col">
                        <div className=" mb-10">
                            <p className="text-center text-green-300 md:text-indigo-700">Things I enjoy designing:</p>
                            <p className="text-center ">ux
                            </p>
                            <p className="text-center ">ui</p>
                            <p className="text-center ">web
                            </p>
                            <p className="text-center ">Apps</p>
                            <p className="text-center ">logo</p>
                        </div>

                        <div>
                            <p className="text-center text-green-300 md:text-indigo-700">Design Tools:</p>
                            <p className="text-center ">Affinity Designer
                            </p>
                            <p className="text-center ">Figma</p>
                            <p className="text-center ">Font Awesome
                            </p>
                            <p className="text-center ">Pen & Paper</p>
                            <p className="text-center ">Webflow</p>
                        </div>

                    </div>

                </div>

                <div className="bg-gray-800 md:bg-transparent w-[100%] rounded-[14px] md:rounded-[0px] border-r-2 md:w-[33%] flex flex-col md:flex-col items-center">
                    <div className="mb-10">
                        <div className="flex justify-center items-center m-5 text-red-400">
                            <FontAwesomeIcon icon={faCompassDrafting} size='3x' />
                        </div>
                        <p className="text-center font-bold text-xl  p-3">Frontend Developer</p>
                        <p className="text-center p-3">I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
                    </div>

                    <div className="grid grid-cols-2 md:flex flex-col">
                        <div className=" mb-10">
                            <p className="text-center text-green-300 md:text-indigo-700">Languages I speak:</p>
                            <p className="text-center ">HTML
                            </p>
                            <p className="text-center ">CSS</p>
                            <p className="text-center ">React
                            </p>
                            <p className="text-center ">Sass</p>
                            <p className="text-center ">Git</p>
                        </div>

                        <div>
                            <p className="text-center text-green-300 md:text-indigo-700">Dev Tools:</p>
                            <p className="text-center ">Atom
                            </p>
                            <p className="text-center ">BitBucket</p>
                            <p className="text-center "> BootStrap
                            </p>
                            <p className="text-center ">Bulma</p>
                            <p className="text-center ">codekit</p>
                            <p className="text-center ">Github</p>
                            <p className="text-center ">Terminal</p>
                        </div>

                    </div>

                    {/* <div className=" mb-10">
                        <p className="text-center text-indigo-700">Things I enjoy designing:</p>
                        <p className="text-center">UX, UI, Web, Apps, Logos</p>
                    </div>

                    <div>
                        <p className="text-center text-indigo-700">Design Tools:</p>
                        <p className="text-center ">Affinity Designer
                        </p>
                        <p className="text-center ">Figma</p>
                        <p className="text-center ">Font Awesome
                        </p>
                        <p className="text-center ">Pen & Paper</p>
                        <p className="text-center ">Webflow</p>
                    </div> */}

                </div>

                <div className="bg-gray-800 md:bg-transparent w-[100%] rounded-[14px] md:rounded-[0px] md:w-[33%] flex flex-col md:flex-col items-center">
                    <div className="mb-10">
                        <div className="flex justify-center items-center m-5 text-blue-400">
                            <FontAwesomeIcon icon={faChartPie} size='3x' />
                        </div>
                        <p className="text-center font-bold text-xl  p-3">Analyst</p>
                        <p className="text-center p-3">I put all my imaginations and thaughts into pictorial representation and love it!</p>
                    </div>

                    <div className="grid grid-cols-2 md:flex flex-col">
                        <div className=" mb-10">
                            <p className="text-center text-green-300 md:text-indigo-700">Things I enjoy Analysing:</p>
                            <p className="text-center ">Bussiness
                            </p>
                            <p className="text-center ">Strategy</p>
                            <p className="text-center ">market
                            </p>
                            <p className="text-center ">data</p>
                        </div>

                        <div>
                            <p className="text-center text-green-300 md:text-indigo-700">BI Tools:</p>
                            <p className="text-center ">Tabeleu
                            </p>
                            <p className="text-center ">Power BI</p>
                            <p className="text-center ">Matplot.lib
                            </p>
                            <p className="text-center ">Seaborn</p>
                            <p className="text-center ">Excel</p>
                        </div>

                    </div>

                    {/* <div className=" mb-10">
                        <p className="text-center text-indigo-700">Things I enjoy designing:</p>
                        <p className="text-center">UX, UI, Web, Apps, Logos</p>
                    </div>

                    <div>
                        <p className="text-center text-indigo-700">Design Tools:</p>
                        <p className="text-center ">Affinity Designer
                        </p>
                        <p className="text-center ">Figma</p>
                        <p className="text-center ">Font Awesome
                        </p>
                        <p className="text-center ">Pen & Paper</p>
                        <p className="text-center ">Webflow</p>
                    </div> */}

                </div>

            </div>
        </div>
    )
}