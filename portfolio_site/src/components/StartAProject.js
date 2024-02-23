import React from "react";
import { ReactDOM } from "react";

export default function StartAProject() {
    return (
        <div className="flex justify-center">
            <div className="h-[360px] w-[80%] md:w-[90%] text-white bg-gray-800 w-full rounded-[40px] md:rounded-[20px] my-[39px] flex flex-col items-center justify-center md:flex-row md:h-[200px] md:-mb-[50px]">
                <div className="my-5 md:my-1 md:mx-12 text-2xl md:text-3xl font-bold">Start a project</div>
                <div className="my-5 md:my-1 md:mx-12 text-center text-lg max-w-[66%] md:max-w-[33%]">Interested in working together? We should queue up a time to chat. I’ll buy the coffee.
                </div>

                <div className="my-5 md:my-1 md:mx-12">
                    <button className="text-sm rounded-full border-2 border-green-300 p-2 px-4 text-white hover:bg-indigo-500 hover:text-gray-800 hover:bg-green-300 md:text-lg md:px-4">
                        Let's do this
                    </button>
                </div>
            </div>
        </div>
    )
}