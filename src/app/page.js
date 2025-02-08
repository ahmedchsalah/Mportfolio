"use client";

import { BackgroundBeamsWithCollision } from "@/app/components/background-beams-with-collision";
import NavBar from "@/app/components/NavBar";
import AboutSection from "@/app/components/about";
import SkillsSection from "@/app/components/skills";
import {Projects} from "@/app/components/projects";
import {Contact} from "lucide-react";
import ContactSection from "@/app/components/contact";

export default function Home() {
    return (
        <div className="dark:bg-black bg-white min-h-screen">
            <NavBar/>
            <div className="relative flex flex-col justify-evenly min-h-screen ">
                {/* Hero Section */}
                <div className="relative min-h-screen">
                    <BackgroundBeamsWithCollision
                        className="dark:bg-black bg-black w-full min-h-screen flex items-center justify-center">
                        <div
                            className="flex flex-col-reverse md:flex-row items-center justify-center w-full max-w-screen-xl mx-auto p-5 md:p-10"
                            id="home">
                            {/* Right Side (Text) */}
                            <div
                                className="text-center md:text-left flex flex-col items-center md:items-start text-white">
                                <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold font-sans tracking-tight">
                                    Hi, I&apos;m Ahmed
                                    <div className="relative mx-auto md:mx-0 inline-block w-max filter drop-shadow-md">
                                        <div
                                            className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 dark:from-blue-500 dark:via-indigo-500 dark:to-purple-500">
                                            <span>Fullstack Developer</span>
                                        </div>
                                        <div
                                            className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 dark:from-blue-500 dark:via-indigo-500 dark:to-purple-500 py-4">
                                            <span>Fullstack Developer</span>
                                        </div>
                                    </div>
                                </h2>
                            </div>

                            {/* Left Side (Image) */}
                            <div
                                className="flex-shrink-0 w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 relative mt-6 md:mt-0">
                                <img
                                    src="/ahmed.png"
                                    alt="Ahmed"
                                    className="w-full h-full object-contain rounded-lg border-4 border-gradient-to-r from-purple-500 via-violet-500 to-pink-500 shadow-lg"
                                />
                            </div>
                        </div>
                    </BackgroundBeamsWithCollision>
                </div>

                {/* About Section */}
                <div className="relative min-h-screen w-full ">
                    <AboutSection/>
                </div>

                {/* Skills Section */}
                <div className="relative  w-full  ">
                    <BackgroundBeamsWithCollision className=" bg-black h-auto sm:min-h-[150vh]">
                        <SkillsSection/>
                    </BackgroundBeamsWithCollision>
                </div>
                <div className="relative  w-full  bg-black z-10">
                    <Projects/>
                </div>
                <div className="relative  w-full  ">
                    <ContactSection/>
                </div>
            </div>

        </div>
    );
}
