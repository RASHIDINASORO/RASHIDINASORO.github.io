import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Security Monitoring Dashboard",
    description:
      "A full-stack application that provides real-time monitoring of security concerns. Seamlessly detect misinformation from social media platforms like facebook and instagram, detect forged document like cards, detect phishing sms in real-time!",
    image: "/images/security dashboard.png",
    githubLink: "https://github.com/RASHIDINASORO/cyber-solution",
    liveLink: "#",
    techStack: ["Python", "Flask", "Pandas"],
  },
  {
    id: 2,
    title: "Kilimolink ",
    description:
      "A responsive website for agriculture business. Features a clean and modern design, easy navigation, and a responsive layout.",
    image: "/images/prices management.png",
    githubLink: "https://github.com/RASHIDINASORO/kilimo-link",
    liveLink: "#",
    techStack: ["Node.js", "SQLite", "Express.js"],
  },
  {
    id: 3,
    title: "Agregator Platform",
    description:
      "A platform built that provides quick payments for a particular service. The platform offers various payment options to help customers to pay for a services.",
    image: "/images/agregate.png",
    githubLink: "https://github.com/RASHIDINASORO/agregator",
    liveLink: "#",
    techStack: ["Node.js", "Express", "Pesapal", "MySQL" ],
  },
  // {
  //   id: 4,
  //   title: "Neutralfy",
  //   description:
  //     "Neutralfy is a comprehensive carbon credit marketplace platform that democratizes carbon markets for Africa, It provides AI-driven verification, blockchain technology, and a multi-stakeholder ecosystem.",
  //   image: "/images/neutralfy.png",
  //   githubLink: "https://github.com/askmgm/neutralfy",
  //   liveLink: "#",
  //   techStack: ["React", "Express", "MySQL", "Node.js"],
  // },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-4 text-blue-600">My Projects</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here's a selection of my recent work, showcasing my skills in
            creating user-centric and visually appealing interfaces.
          </p>
        </motion.div>

        <div className="space-y-28">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={`flex flex-col lg:flex-row gap-8 items-center`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Project Image */}
              <div className="w-full lg:w-1/2">
                <div className="overflow-hidden rounded-xl shadow-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Project Details */}
              <div className="w-full lg:w-1/2">
                <h3 className="text-2xl font-bold mb-3 text-gray-800">{project.title}</h3>
                <p className="text-gray-600 mb-6">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 github-button bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors duration-300"
                    >
                      <FaGithub /> GitHub
                    </a>
                  )}
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 live-demo-button bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* See All Projects Link */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <a
            href="https://github.com/RASHIDINASORO"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white text-base font-medium rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            <FaGithub className="text-xl" />
            See All My Projects
            <FaExternalLinkAlt className="text-sm" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;



