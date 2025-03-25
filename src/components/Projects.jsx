import React from "react";

const projects = [
  {
    id: 1,
    name: "Entrust Productions",
    technologies: "MERN stack",
    description:
      "Entrust Productions is a dynamic web application for an event planning service, allowing users to explore a range of catered events, browse venues and rent event materials. Integrated with airtable for seamless booking management via custom form, enhancing user experience and streamlining data collection.",
    image:
      "https://res.cloudinary.com/dqvb49fnb/image/upload/v1732369883/Screenshot_2024-11-12_at_11.37.49_mvcv2z.png",
    github: "https://github.com/jannet18/entrust-events-client",
    // live: "https://entrustproductions.co.ke/",
    live: "https://entrust-programs.onrender.com/",
  },
  {
    id: 2,
    name: "Summarise",
    technologies: "React/API",
    description:
      "Summarise is a web application that allows users to smartly summarize online articles by providing a URL.The app is integrated with an external API for real-time text summarisation, offering users quick and accurate insights from lengthy content.",
    image:
      "https://res.cloudinary.com/dqvb49fnb/image/upload/v1727724944/Screenshot_2024-09-29_at_19.18.29_lh3xrl.png",
    github: "https://github.com/jannet18/notes-summarizer",
    live: "https://notes-summarizer-ptpf.onrender.com",
  },
  {
    id: 3,
    name: "Urembo Village",
    technologies: "MERN stack",
    description:
      "A full-featured E-commerce web application built using the MERN stack (MongoDB, Express, React, Node.js). This app allows users to search for products, view product details, add to cart,add to favourites and proceed to checkout with payments seamlessly and manage cart with secure authentication and a smooth user interface.",
    image:
      "https://res.cloudinary.com/dqvb49fnb/image/upload/v1727725515/Screenshot_2024-09-30_at_22.40.36_zcurr5.png",
    github: "https://github.com/urembovillage/urembo-front-end",
    live: "https://urembo-front-end.onrender.com/",
  },

  {
    id: 4,
    name: "Beautiful Destinations",
    technologies: "MERN stack",
    image:
      "https://res.cloudinary.com/dqvb49fnb/image/upload/v1727725786/Screenshot_2024-09-30_at_22.48.25_mymsk6.png",
    description:
      "A full-stack web application for hotel bookings built using the MERN stack (MongoDB, Express, React, Node.js). This app allows users to search for hotels, view details, make bookings with payments seamlessly and manage reservations with secure authentication and a smooth user interface.",
    github: "https://github.com/jannet18/beautiful-destinations-client",
    // live: "https://ngo-client.onrender.com/",
  },
  {
    id: 5,
    name: "Authentication App",
    technologies: "MERN Stack",
    description:
      "Project provides a secure and scalable solution for managing user authentication and authorization. It ensures that users can safely access their accounts and perform actions based on their roles and permissions",
    image:
      "https://res.cloudinary.com/dqvb49fnb/image/upload/v1724437888/Screenshot_2024-08-23_at_21.27.53_gsncaw.png",
    github: "https://github.com/jannet18/auth-mern",
    live: "https://auth-mern-3tl9.onrender.com/",
  },

  {
    id: 6,
    name: "The Entrust Initiative",
    technologies: "React/rails",
    image:
      "https://res.cloudinary.com/dqvb49fnb/image/upload/v1724437901/Screenshot_2024-08-23_at_21.27.02_lpvbnc.png",
    description:
      "A comprehensive web application for a non-profit worship school aimed at providing worship education to underprivileged children. The application features a user friendly interface for students, teachers, and administrators, and includes functionalities for program management, student registration, volunteer applications, and donations.",
    github: "https://github.com/jannet18/ngo-client",
    live: "https://ngo-client.onrender.com/",
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
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
              <p className="text-gray-400 mb-4 tracking-wider">
                {project.description}
              </p>
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
                  className="inline-block bg-gradient-to-r  from-green-400 to-blue-400 text-white px-4 py-2 rounded-full"
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
