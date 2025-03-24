import React from "react";

const Hero = () => {
  return (
    <div className="bg-black text-white text-center py-16">
      <img
        src="https://res.cloudinary.com/dqvb49fnb/image/upload/v1733910210/profile-_onqrii.jpg"
        alt=""
        className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105"
      />
      <h1 className="text-4xl font-bold">
        <span className="ml-3 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">
          Janet Ngei
        </span>
      </h1>
      <h1 className="text-4xl font-bold">Software Developer</h1>
      <p className="mt-4 text-lg text-gray-300">
        I specialize in building modern and responsive web applications.
      </p>
      <div className="mt-8 space-x-4">
        <button
          className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          <a href="#contact">Contact Me</a>
        </button>
        <button
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          <a href="https://docs.google.com/document/d/1wPZdsJ9NjGk_ba6BCd0pbBsjWz0xINDJjT7MHg0_nFI/edit?usp=sharing">
            Resume
          </a>
        </button>
      </div>
    </div>
  );
};

export default Hero;
