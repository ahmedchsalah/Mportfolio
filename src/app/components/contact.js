import { motion } from "framer-motion";
import { FaInstagram, FaFacebook, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function ContactSection() {
    const socialLinks = [
        { title: "GitHub", href: "https://github.com/ahmedchsalah", icon: <FaGithub className="text-white group-hover:text-gray-900 transition-all duration-300 transform group-hover:scale-125" /> },
        { title: "LinkedIn", href: "https://www.linkedin.com/in/ahmed-chikh-salah-6226b3268", icon: <FaLinkedin className="text-white group-hover:text-blue-500 transition-all duration-300 transform group-hover:scale-125" /> },
        { title: "Instagram", href: "https://www.instagram.com/ahmedchs22?igsh=MWVwdjc0Mm1sc3czag==", icon: <FaInstagram className="text-white group-hover:text-pink-500 transition-all duration-300 transform group-hover:scale-125" /> },
        { title: "Facebook", href: "https://www.facebook.com/share/1A4AiNPufm/", icon: <FaFacebook className="text-white group-hover:text-blue-600 transition-all duration-300 transform group-hover:scale-125" /> },
        { title: "Email", href: "https://mail.google.com/mail/?view=cm&fs=1&to=ahmed.ckikhsalah@univ-constantine2.dz", icon: <FaEnvelope className="text-white group-hover:text-red-500 transition-all duration-300 transform group-hover:scale-125" /> },
    ];

    return (
        <section className="relative py-16 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-black to-gray-900 text-white" id="contact">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent"
            >
                Get in Touch
            </motion.h2>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
                {socialLinks.map((link, index) => (
                    <a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group p-4 rounded-full bg-gray-800 hover:bg-white transition-all duration-300 flex items-center justify-center shadow-lg"
                    >
                        <div className="w-10 h-10 flex items-center justify-center">
                            {link.icon}
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}