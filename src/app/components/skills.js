import { motion } from "framer-motion";
import { FaReact, FaVuejs, FaLaravel } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiBootstrap, SiNestjs, SiDjango, SiSpringboot } from "react-icons/si";

const skills = [
    { name: "React.js", icon: <FaReact className="group-hover:text-[#61DAFB]" />, percentage: 75 },
    { name: "Vue.js", icon: <FaVuejs className="group-hover:text-[#42b883]" />, percentage: 70 },
    { name: "Next.js", icon: <SiNextdotjs className="group-hover:text-white" />, percentage: 65 },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="group-hover:text-[#38bdf8]" />, percentage: 80 },
    { name: "Bootstrap", icon: <SiBootstrap className="group-hover:text-[#7952B3]" />, percentage: 50 },
    { name: "Laravel", icon: <FaLaravel className="group-hover:text-[#FF2D20]" />, percentage: 70 },
    { name: "NestJS", icon: <SiNestjs className="group-hover:text-[#E0234E]" />, percentage: 70 },
    { name: "Django", icon: <SiDjango className="group-hover:text-[#092E20]" />, percentage: 65 },
    { name: "Spring Boot", icon: <SiSpringboot className="group-hover:text-[#6DB33F]" />, percentage: 65 },
];

export default function SkillsSection() {
    return (
        <div className="w-full text-white pt-28 pb-16 " id='skills'>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="max-w-7xl mx-auto px-4 sm:px-6 w-full"
            >
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent relative z-10"
                >
                    Technical Expertise
                </motion.h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative"
                        >
                            <div className="relative overflow-hidden rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 p-6 hover:bg-gray-800/70 transition-all duration-300">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="relative z-10">
                                    <div className="flex items-center justify-center mb-4">
                                        <div className="text-7xl grayscale group-hover:grayscale-0 transition-all duration-300">
                                            {skill.icon}
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-semibold text-center mb-2">{skill.name}</h3>
                                    <div className="relative mt-4">
                                        <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                                            <div className="relative bg-gray-900 text-white px-3 py-1 rounded-md shadow-xl text-sm">
                                                <span className="font-medium">{skill.percentage}%</span>
                                                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 transform rotate-45"></div>
                                            </div>
                                        </div>
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.percentage}%` }}
                                            transition={{ duration: 1, delay: 0.5 }}
                                            className="h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                                        />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
