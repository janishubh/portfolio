import React from "react";
import { ReactDOM } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faLink } from "@fortawesome/free-solid-svg-icons";
// import { faFacebook } from '@fortawesome/free-brands-svg-icons'


export default function NavBar() {
    return (
        <>
            <div className="con h-[500px] text-white fade-bg flex flex-col p-4 justify-center items-center">
                <div className="text-xl">logo</div>
                <div className="text-xl text-center m-6">Living, learning, & leveling up <br /> one day at a time.</div>
                <div className="flex justify-between">
                    <button className="border-2 rounded-full p-6 px-6 mx-2 md:mx-4 hover:bg-white hover:text-indigo-600">
                        <FontAwesomeIcon icon={faLinkedin} size='xl' />
                    </button>
                    <button className="border-2 rounded-full p-4 px-6 mx-2 md:mx-4 hover:bg-white hover:text-indigo-600">
                        <FontAwesomeIcon icon={faGithub} size='xl' />
                    </button>
                    <button className="border-2 rounded-full p-4 px-6 mx-2 md:mx-4 hover:bg-white hover:text-indigo-600">
                        <FontAwesomeIcon icon={faInstagram} size='xl' />
                    </button>
                    <button className="border-2 rounded-full p-4 px-6 mx-2 md:mx-4 hover:bg-white hover:text-indigo-600">
                        <FontAwesomeIcon icon={faFacebook} size='xl' />
                    </button>
                    <button className="border-2 rounded-full p-4 px-6 mx-2 md:mx-4 hover:bg-white hover:text-indigo-600">
                        <FontAwesomeIcon icon={faTwitter} size='xl' />
                    </button>
                </div>
                <div className="text-lg mt-8">Handcrafted by me</div>
                <div className="text-lg m-2">Made by Shubh Jani</div>
            </div>
        </>
    )
}

// background: rgb(49,48,74);
// background: linear-gradient(0deg, rgba(49,48,74,1) 0%, rgba(102,45,140,1) 0%, rgba(124,26,176,1) 42%, rgba(40,25,161,1) 100%);