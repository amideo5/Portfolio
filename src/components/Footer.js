import React from "react";

export default function Navbar() {
    return (
        <footer className="bg-gray-800 md:sticky bottom-0 z-10">
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
                    <a href="https://github.com/amideo5" className="mr-5 hover:text-white">
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/aryan-trivedi-1187871ba/" className="mr-5 hover:text-white">
                        LinkedIn
                    </a>
                    <a href="https://www.hackerrank.com/amideo5" className="mr-5 hover:text-white">
                        HackerRank
                    </a>
                    <a href="https://leetcode.com/amideo5/" className="mr-5 hover:text-white">
                        LeetCode
                    </a>
                    <a href="https://www.instagram.com/aryan.trivedi.7731/" className="mr-5 hover:text-white">
                        Instagram
                    </a>
                    <a href="https://www.facebook.com/aryan.trivedi.7731" className="mr-5 hover:text-white">
                        FaceBook
                    </a>
                </nav>
        </footer>
    );
}