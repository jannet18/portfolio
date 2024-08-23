import React from "react";

const Hero = () => {
  return (
    <div className="bg-black text-white text-center py-16">
      <img
        src="https://media.licdn.com/dms/image/v2/C4D03AQH_LrmcqEJqag/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1610626274439?e=1729728000&v=beta&t=DxsWT8sBfM3BYVmANckB47tKIoDKFW3Re2YimRsQGGg"
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
          <a href="https://1drv.ms/w/c/9ceda4906b57209b/ESKUiI3a7dJDvD1IaThPw8gBvzwb40md-SWZQeTajdY8Ng?e=6DaxxJ">
            Resume
          </a>
        </button>
      </div>
    </div>
  );
};

export default Hero;
