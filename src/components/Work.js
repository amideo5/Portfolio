import React from "react";
import { TerminalIcon } from "@heroicons/react/solid";
import { work } from "../data";

export default function Work() {
  return (
    <section id="work" className="text-gray-400 bg-gray-900 body-font">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    <TerminalIcon className="mx-auto inline-block w-10 mb-4" />
                    <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                        WORK EXPERIENCE
                    </h1>
                </div>
                <div className="flex flex-wrap -m-4">
                    {work.map((work) => (
                        <a
                            href={work.link}
                            key={work.name}
                            className="sm:w-1/2 w-100 p-4">
                            <div className="flex sticky">
                                <div className="px-8 py-10 sticky z-10 w-full border-4 border-gray-800 bg-gray-900">
                                    <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                                        {work.company}
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-white mb-3">
                                        {work.name}
                                    </h1>
                                    <p className="leading-relaxed">{work.quote}</p><br />
                                    <p class="text-zinc-50">{work.text}</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
  );
}