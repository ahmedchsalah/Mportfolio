"use client";
import React from "react";
import { PinContainer } from "./3d-pin";
import {motion} from "framer-motion";

const projects = [
    {
        title: "Food delivery website",
        description: "Modern frontend website for food delivery using vite react",
        href: "https://food-website-jgzgzlv4r-ahmed-chikh-salahs-projects.vercel.app/",
        image: "/food.png"
    },
    {
        title: "Alfenart project",
        description: "An artisan website using Laravel and React for admin panel",
        href: "https://www.alfenart.com",
        image: "/alfenart.png"
    },
    {
        title: "Travel Website",
        description: "Modern frontend website for traveling using Next.js, Tailwind CSS",
        href: "https://travel-website-bgi9xclls-ahmed-chikh-salahs-projects.vercel.app/",
        image: "/travel.png"
    },
    {
        title: "Booking website",
        description: "simple booking website using Nest.js and Vue.js",
        href: "https://github.com/ahmedchsalah/booking",
        image: "/booking.png"
    }
];

export function Projects() {
    return (
        <div className="w-full py-10 flex items-center justify-center flex-col" id='projects'>
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent relative z-10"
            >
                Top Projects
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 max-w-6xl">
                {projects.map((project, index) => (
                    <PinContainer key={index} title={project.title} href={project.href}>
                        <div className="flex flex-col p-4 tracking-tight text-slate-100/50 w-[18rem] bg-gray-900 rounded-xl shadow-lg">
                            <h3 className="font-bold text-lg text-slate-100 text-center">{project.title}</h3>
                            <p className="text-sm text-slate-400 mt-2 text-center">{project.description}</p>
                            <img
                                src={project.image}
                                alt={`${project.title} image`}
                                className="w-full h-48 object-cover rounded-lg mt-4"
                            />
                        </div>
                    </PinContainer>
                ))}
            </div>
        </div>
    );
}
