import React from "react";

const services = [
  {
    id: 1,
    title: "UI/UX Designing",
    description: "Creating visually appealing and user-friendly web designs.",
  },
  {
    id: 2,
    title: "Web Development",
    description: "Building responsive and interactive user interfaces.",
  },
  {
    id: 3,
    title: "API Integration",
    description: "Developing robust server-side logic and databases.",
  },
  // {
  //   id: 4,
  //   title: "Full-Stack Development",
  //   description: "Combining both frontend and backend development skills.",
  // },
  // {
  //   id: 5,
  //   title: "Content Writing",
  //   description: "Writing content for your business and companies.",
  // },
  // {
  //   id: 6,
  //   title: "Digital Marketing",
  //   description: "Promote your business with our digital marketing team.",
  // },
];

const stacks = [
  {
    title: "Web",
    properties: ["HTML5", "CSS3", "JavaScript", "React.js", "TailwindCSS"],
  },
  {
    title: "Database",
    properties: ["mongoDB", "PostgreSQL", "Firebase", "Sqlite"],
  },
  { title: "Backend", properties: ["Ruby on Rails", "Node.js"] },
];
const Service = () => {
  return (
    <div className="bg-black text-white py-20" id="service">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform 
              transition-transform duration-300 hover:scale-105"
            >
              <div
                className="text-right text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-green-600 to-blue-400"
              >
                {service.id}
              </div>
              <h3
                className="mt-2 text-2xl font-bold text-transparent bg-clip-text 
              bg-gradient-to-r from-pink-500 to-yellow-500"
              >
                {service.title}
              </h3>
              <p className="mt-2 text-gray-300">{service.description}</p>
              <a
                href="#"
                className="mt-4 inline-block text-green-400 hover:text-blue-500"
              >
                {/* Read More */}
              </a>
            </div>
          ))}
        </div>

        <h2 className="text-4xl font-bold text-center my-12">My Stacks</h2>
        <div className="flex flex-col items-center justify-between">
          {stacks.map((stack, id) => (
            <div key={id} className="mb-4">
              <h1
                key={id}
                className="text-green-400 hover:text-green-500 -gradient-to-r from-pink-500 to-yellow-500 text-xl font-bold my-3"
              >
                {stack.title}
              </h1>

              <div className="flex items-center justify-between flex-wrap gap-4">
                {/* <div className="grid grid-cols-3 gap-4"> */}
                {stack.properties.map((property, index) => (
                  <p
                    key={index}
                    className="flex items-center justify-center bg-gradient-to-r  from-blue-400 to-pink-400  text-white px-3 py-3 rounded-full transform transition-transform duration-300 hover:scale-105"
                  >
                    {property}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
