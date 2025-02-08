"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-transparent  shadow-lg">
            <div className="container mx-auto flex justify-between items-center p-5">
                {/* Logo */}
                <motion.a
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl font-extrabold text-white tracking-wide hover:text-purple-500 transition-all duration-300"
                    href="#"
                >
                    Ahmed
                </motion.a>

                {/* Desktop Menu */}
                <div className="hidden md:flex gap-8">
                    {navItems.map((item, index) => (
                        <motion.a
                            key={index}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            href={`#${item.toLowerCase()}`}
                            className="text-white text-lg font-semibold hover:text-purple-500 transition-all duration-300"
                        >
                            {item}
                        </motion.a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="md:hidden absolute top-16 left-0 w-full bg-black bg-opacity-90 backdrop-blur-md py-5 shadow-xl"
                >
                    <div className="flex flex-col items-center gap-5">
                        {navItems.map((item, index) => (
                            <motion.a
                                key={index}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                href={`#${item.toLowerCase()}`}
                                className="text-white text-lg font-semibold hover:text-purple-500 transition-all duration-300"
                                onClick={() => setIsOpen(false)}
                            >
                                {item}
                            </motion.a>
                        ))}
                    </div>
                </motion.div>
            )}
        </nav>
    );
}
