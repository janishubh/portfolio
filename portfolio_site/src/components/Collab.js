import React from "react";
import { ReactDOM } from "react";
import chatIcon from '../utils/chat-icon.png'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons"

export default function Collab() {
    return (
        <>
            <div className="my-5 h-[300px] flex flex-col justify-center items-center text-center text-xl">
                <div className="max-w-[75%] text-2xl font-bold m-3">Interested in collaborating with me?</div>
                <div className="max-w-[75%] m-3">I’m always open to discussing product design work or partnership opportunities.</div>
                <div className="max-w-[75%] mt-6">
                    {/* <img src={chatIcon} className='h-[5%]' alt="" /> */}
                    <button className="text-lg flex justify-center items-center rounded-full border-2 border-purple-700 p-2 px-2 text-purple-700 hover:bg-purple-700 hover:text-white md:text-lg md:px-4">
                        <div className="mr-3">
                            <FontAwesomeIcon icon={faComment} />
                        </div>
                        <div>Start a conversation</div>
                    </button>
                </div>

            </div>
        </>
    )
}