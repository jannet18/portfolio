import React from "react";

const projects = [
  {
    id: 1,
    name: "The Entrust Initiative",
    technologies: "React/rails",
    image:
      "https://res.cloudinary.com/dqvb49fnb/image/upload/v1724437901/Screenshot_2024-08-23_at_21.27.02_lpvbnc.png",
    description:
      "A comprehensive web application for a non-profit worship school aimed at providing worship education to underprivileged children. The application features a user friendly interface for students, teachers, and administrators, and includes functionalities for program management, student registration, volunteer applications, and donations.",
    github: "https://github.com/jannet18/ngo-client",
    live: "https://ngo-client.onrender.com/",
  },
  {
    id: 2,
    name: "Urembo Village",
    technologies: "React/rails",
    description:
      "A full-featured e-commerce website that provides a seamless shopping experience for users and an efficient management system for administrators.",
    image:
      "https://res.cloudinary.com/dqvb49fnb/image/upload/v1724437900/Screenshot_2024-08-23_at_21.29.28_gqk3sw.png",
    github: "https://github.com/urembovillage/urembo-front-end",
    live: "https://urembo-front-end.onrender.com/",
  },
  {
    id: 3,
    name: "Authentication App",
    technologies: "MERN Stack",
    description:
      "Project provides a secure and scalable solution for managing user authentication and authorization. It ensures that users can safely access their accounts and perform actions based on their roles and permissions",
    image:
      "https://res.cloudinary.com/dqvb49fnb/image/upload/v1724437888/Screenshot_2024-08-23_at_21.27.53_gsncaw.png",
    github: "https://github.com/jannet18/auth-mern",
    live: "https://auth-mern-3tl9.onrender.com/",
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-4 
              w-full h-48 object-cover"
              />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <p className="text-gray-400 mb-4">{project.description}</p>
              <div className="space-x-4">
                <a
                  href={project.github}
                  className="inline-block bg-gradient-to-r 
              from-pink-500 to-yellow-500 text-white px-4 py-2 rounded-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href={project.live}
                  className="inline-block bg-gradient-to-r 
              from-green-400 to-blue-400 text-white px-4 py-2 rounded-full"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
