import { BadgeCheckIcon, ChipIcon, ChevronDownIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import { skills } from "../data";

export default function Skills() {
  const [showAll, setShowAll] = useState(false);

  // Only show first 18 unless toggled
  const visibleSkills = showAll ? skills : skills.slice(0, 18);

  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
        </div>

        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {visibleSkills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/3 w-full">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Arrow toggle */}
        {skills.length > 18 && (
          <div className="text-center mt-6">
            <button
              onClick={() => setShowAll(!showAll)}
              className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition duration-200"
            >
              <ChevronDownIcon
                className={`w-6 h-6 text-white transform transition-transform duration-300 ${
                  showAll ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
