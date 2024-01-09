import React from "react";

export default function About() {
    return (
        <section id="about">
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hey there! I'm Aryan Trivedi.
                    </h1>
                    <p className="mb-8 leading-relaxed">
                        A passionate Software Developer based in Pune, India. With a strong foundation in Computer Science and Engineering, I've been diving deep into the world of technology and software development.

                    </p>
                    <div className="flex justify-center">
                        <a
                            href="https://drive.google.com/file/d/1o6UnjuV7q3pACuDZsMbFEFcPD2Kaw0Wz/view?usp=sharing"
                            className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                            My Resume
                        </a>
                    </div>
                </div>
                <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img
                        className="object-cover object-center rounded"
                        alt="hero"
                        src="./Display.jpg"
                    />
                </div>
            </div>
        </section>
    );
}