import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaDocker, FaGit, FaJs, FaPython, FaHtml5, FaCss3Alt, FaJava, FaPhp, FaNodeJs } from "react-icons/fa";
import {
  SiExpress,
  SiFlutter,
  SiMongodb,
  SiPostgresql,
  SiTypescript,
  SiFigma,
  SiNextdotjs,
  SiC,
  SiDart,
  SiDjango,
  SiFlask,
  SiMysql,
  SiSqlite,
} from "react-icons/si";
import { Link } from "react-scroll";

const languages = [
  {
    name: "JavaScript",
    icon: <FaJs className="w-12 h-12 text-yellow-500" />,
    link: "https://www.javascript.com",
  },
  {
    name: "Python",
    icon: <FaPython className="w-12 h-12 text-blue-800" />,
    link: "https://www.python.org",
  },
  
  {
    name: "Java",
    icon: <FaJava className="w-12 h-12 text-red-500" />,
    link: "https://www.java.com",
  },
  {
    name: "HTML",
    icon: <FaHtml5 className="w-12 h-12 text-orange-500" />,
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt className="w-12 h-12 text-blue-500" />,
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: "JSX",
    icon: <FaJs className="w-12 h-12 text-blue-400" />,
    link: "https://reactjs.org/docs/introducing-jsx.html",
  },
  {
    name: "TS",
    icon: <SiTypescript className="w-12 h-12 text-blue-600" />,
    link: "https://www.typescriptlang.org/",
  },
  {
    name: "Dart",
    icon: <SiDart className="w-12 h-12 text-blue-400" />,
    link: "https://dart.dev/",
  },
  {
    name: "PHP",
    icon: <FaPhp className="w-12 h-12 text-indigo-500" />,
    link: "https://www.php.net/",
  },
  {
    name: "C",
    icon: <SiC className="w-12 h-12 text-blue-600" />,
    link: "https://en.wikipedia.org/wiki/C_(programming_language)",
  },
];

const techStack = [
  {
    name: "React",
    icon: <FaReact className="w-12 h-12 text-purple-700" />,
    link: "https://react.dev",
  },
  {
    name: "Express.js",
    icon: <SiExpress className="w-12 h-12 text-gray-800" />,
    link: "https://expressjs.com",
  },
  {
    name: "Flutter",
    icon: <SiFlutter className="w-12 h-12 text-blue-400" />,
    link: "https://flutter.dev",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="w-12 h-12 text-green-600" />,
    link: "https://nodejs.org",
  },
  {
    name: "Django",
    icon: <SiDjango className="w-12 h-12 text-green-800" />,
    link: "https://www.djangoproject.com",
  },
  {
    name: "Flask",
    icon: <SiFlask className="w-12 h-12 text-gray-900" />,
    link: "https://flask.palletsprojects.com",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="w-12 h-12 text-green-500" />,
    link: "https://www.mongodb.com",
  },
  {
    name: "MySQL",
    icon: <SiMysql className="w-12 h-12 text-blue-600" />,
    link: "https://www.mysql.com",
  },
  {
    name: "SQLite",
    icon: <SiSqlite className="w-12 h-12 text-blue-800" />,
    link: "https://www.sqlite.org",
  },
  {
    name: "Git",
    icon: <FaGit className="w-12 h-12 text-red-500" />,
    link: "https://git-scm.com",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Programming Languages Section */}
        <motion.div
          className="relative mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-12 text-center text-gray-800">
            My Programming <span className="text-blue-600">Languages</span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {languages.map((lang, index) => (
              <a
                key={lang.name}
                href={lang.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <motion.div
                  className="group bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {lang.icon}
                  </div>
                  <p className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors">
                    {lang.name}
                  </p>
                </motion.div>
              </a>
            ))}
          </div>
        </motion.div>

        {/* Tech Stack Section */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-12 text-center text-gray-800">
            My <span className="text-blue-600">Tech</span> Stack
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {techStack.map((tech, index) => (
              <a
                key={tech.name}
                href={tech.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <motion.div
                  className="group bg-white p-6 rounded-xl shadow-md text-center hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <p className="font-medium text-gray-800 group-hover:text-blue-600 transition-colors">
                    {tech.name}
                  </p>
                </motion.div>
              </a>
            ))}
          </div>

          {/* Background Decorations */}
          <div className="absolute -z-10 top-1/2 left-0 w-72 h-72 bg-blue-50 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute -z-10 bottom-0 right-0 w-96 h-96 bg-purple-50 rounded-full blur-3xl opacity-30"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;