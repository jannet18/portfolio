// import React from "react";

// const About = () => {
//   return (
//     <div className="bg-black text-white py-20" id="about">
//       <div className="container mx-auto px-8 md:px-16 lg:px-24">
//         <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
//         <div className="flex flex-col md:flex-row items-center md:space-x-12">
//           {/* <img
//             src={AboutImage}
//             alt=""
//             className="w-72 h-80 rounded object-cover mb-8 md:mb-0"
//           /> */}
//           <div className="flex-1">
//             <p className="text-lg mb-8">
//               Hi there! I am a highly motivated and passionate front-end web
//               developer with a strong foundation in HTML, CSS, JavaScript, and
//               React. Seeking to leverage my skills and kickstart a successful
//               career in web development. Dedicated to continuous learning and
//               professional growth, I aim to contribute to the creation of
//               user-friendly and visually appealing web applications.
//             </p>
//             <div className="space-y-4">
//               <div className="flex items-center">
//                 <label htmlFor="htmlandcss" className="w-2/12">
//                   HTML & CSS
//                 </label>
//                 <div className="grow bg-gray-800 rounded-full h-2.5">
//                   <div
//                     className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
//                     transform transition-transform duration-300 hover:scale-105 w-10/12"
//                   ></div>
//                 </div>
//               </div>
//               <div className="flex items-center">
//                 <label htmlFor="htmlandcss" className="w-2/12">
//                   React JS
//                 </label>
//                 <div className="grow bg-gray-800 rounded-full h-2.5">
//                   <div
//                     className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
//                     transform transition-transform duration-300 hover:scale-105 w-11/12"
//                   ></div>
//                 </div>
//               </div>
//               <div className="flex items-center">
//                 <label htmlFor="htmlandcss" className="w-2/12">
//                   Node JS
//                 </label>
//                 <div className="grow bg-gray-800 rounded-full h-2.5">
//                   <div
//                     className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
//                     transform transition-transform duration-300 hover:scale-105 w-9/12"
//                   ></div>
//                 </div>
//               </div>
//               <div className="flex items-center">
//                 <label htmlFor="htmlandcss" className="w-2/12">
//                   Ruby on Rails
//                 </label>
//                 <div className="grow bg-gray-800 rounded-full h-2.5">
//                   <div
//                     className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full
//                     transform transition-transform duration-300 hover:scale-105 w-10/12"
//                   ></div>
//                 </div>
//               </div>
//             </div>
//             <div className="mt-12 flex justify-between text-center">
//               <div>
//                 <h3
//                   className="text-2xl font-bold text-transparent bg-clip-text
//                 bg-gradient-to-r from-green-400 to-blue-500"
//                 >
//                   2+
//                 </h3>
//                 <p>Years Experience</p>
//               </div>
//               <div>
//                 <h3
//                   className="text-2xl font-bold text-transparent bg-clip-text
//                 bg-gradient-to-r from-green-400 to-blue-500"
//                 >
//                   50+
//                 </h3>
//                 <p>Projects Completed</p>
//               </div>
//               <div>
//                 <h3
//                   className="text-2xl font-bold text-transparent bg-clip-text
//                 bg-gradient-to-r from-green-400 to-blue-500"
//                 >
//                   10+
//                 </h3>
//                 <p>Happy Clients</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;
import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const About = () => {
  const skills = [
    { name: "HTML & CSS", level: "w-10/12" },
    { name: "React JS", level: "w-11/12" },
    { name: "Node JS", level: "w-9/12" },
    { name: "Ruby on Rails", level: "w-10/12" },
  ];

  const stats = [
    { label: "Years Experience", value: "2+" },
    // { label: "Projects Completed", value: "50+" },
    // { label: "Happy Clients", value: "10+" },
  ];

  return (
    <div
      className="bg-gradient-to-r from-gray-900 to-black text-white py-20"
      id="about"
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src="https://media.licdn.com/dms/image/v2/C4D03AQH_LrmcqEJqag/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1610626274439?e=1729728000&v=beta&t=DxsWT8sBfM3BYVmANckB47tKIoDKFW3Re2YimRsQGGg"
            alt="Profile"
            className="w-72 h-80 rounded-full object-cover mb-8 md:mb-0 shadow-lg"
          />
          <div className="flex-1">
            <p className="text-lg mb-8">
              Hi there! I am a highly motivated and passionate front-end web
              developer with a strong foundation in HTML, CSS, JavaScript, and
              React. I'm dedicated to continuous learning and professional
              growth, aiming to contribute to the creation of user-friendly and
              visually appealing web applications. Recently, I developed an
              e-commerce site that increased sales by 20% through improved UX.
            </p>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div className="flex items-center" key={skill.name}>
                  <label className="w-2/12">{skill.name}</label>
                  <div className="grow bg-gray-800 rounded-full h-2.5">
                    <div
                      className={`bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 ${skill.level}`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 flex justify-between text-center">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                    {stat.value}
                  </h3>
                  <p>{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 flex justify-center space-x-6">
              <a
                href="https://www.linkedin.com/in/janet-mutindi-ngei/"
                className="text-green-400 hover:text-green-500"
              >
                <FaLinkedin size="2rem" />
              </a>
              <a
                href="https://github.com/jannet18"
                className="text-green-400 hover:text-green-500"
              >
                <FaGithub size="2rem" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <a
            href="mailto:janetngei18@gmail.com"
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-8 py-2 rounded-full transform transition-transform duration-300 hover:scale-105"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
