import React from "react";
import { ReactDOM } from "react";

export default function NavBar() {
    return (
        <>
            <div className="navbar border-b-2">
                <div className="con flex justify-between items-center p-6 px-14 h-[130px]">
                    <button className="logo"><h1 className="text-indigo-700 text-xl">Shubh,</h1></button>
                    <div className="contact-btn">
                        <button className="text-lg mx-4 hover:text-indigo-700">Résumé</button>
                        <button className="text-sm rounded-full border-2 border-indigo-500 p-2 px-2 text-indigo-500 hover:bg-indigo-500 hover:text-white md:text-lg md:px-4">
                            Say Hello
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}