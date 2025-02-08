"use client";

import Image from 'next/image';

export default function AboutSection() {
    return (
        <section id="about" className="min-h-screen flex flex-col justify-center items-center bg-black text-white py-16 px-6 md:px-16 ">
            <div className="container mx-auto flex flex-col md:flex-row items-center gap-16">
                {/* Left Section (About Text) */}
                <div className="flex-1 max-w-xl">
                    <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 animate-gradient-background z-10">
                        About Me
                    </h2>
                    <p className="text-lg md:text-xl leading-relaxed mb-8 text-gray-300 z-10 transform transition-all duration-500 hover:text-pink-500">
                        Hi, I’m Ahmed, a Junior Fullstack Developer with a strong passion for backend development. I
                        love designing scalable APIs, managing databases efficiently, and optimizing application
                        performance.
                    </p>
                    <p className="text-lg md:text-xl leading-relaxed mb-8 text-gray-300 z-10 transform transition-all duration-500 hover:text-pink-500">
                        That said, I also work on the frontend, exploring modern UI libraries and frameworks to create
                        smooth user experiences.
                    </p>
                    <p className="text-lg md:text-xl leading-relaxed text-gray-300 mb-8 z-10 transform transition-all duration-500 hover:text-purple-500">
                        I have also some skills as software engineer and I have some experience in the field.
                    </p>
                    <p className="text-lg md:text-xl leading-relaxed text-gray-300 z-10 transform transition-all duration-500 hover:text-purple-500">
                        I'm always eager to learn, experiment with new technologies, and refine my development workflow,
                        making sure my work remains efficient, clean, and maintainable.
                    </p>
                </div>

                {/* Right Section (Image) */}
                <div className="flex-1 relative w-full max-w-md">
                    <div
                        className="relative w-full h-full rounded-xl border-4 border-gradient-to-r from-purple-500 via-violet-500 to-pink-500 overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500">
                        <Image
                            src="/code.jpg" // Replace with your actual image path
                            alt="Coding Illustration"
                            className="rounded-xl object-cover transform transition-all duration-500 hover:scale-105 hover:rotate-3"
                            layout="responsive"
                            width={700}
                            height={500}
                        />
                    </div>
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-violet-500 to-pink-500 opacity-50 rounded-xl transition-all duration-500"></div>
                </div>
            </div>
        </section>
    );
}
