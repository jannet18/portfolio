import React, { useRef } from "react";
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          form.current.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  const notify = () => toast("Success");
  return (
    <div className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-10 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-3 md:space-x-12">
          <div className="flex-1 tracking-wider text-center">
            <h3
              className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
            from-pink-500 to-yellow-500 mb-4"
            >
              Let's Talk
            </h3>
            <p className="">
              I'm open to discussing web development projects or partnership
              opportunities.
            </p>
            <div className="mb-4 mt-8">
              <FaEnvelope className="inline-block text-green-400 mr-2"></FaEnvelope>
              <a
                href="mailto:janetngei18@gmail.com"
                className="hover:underline"
              >
                janetngei18@gmail.com
              </a>
            </div>
            <div className="mb-4">
              <FaPhone className="inline-block text-green-400 mr-2"></FaPhone>
              <span>+254722769597</span>
            </div>
            <div className="mb-4">
              <FaMapMarkedAlt className="inline-block text-green-400 mr-2"></FaMapMarkedAlt>
              <span>Nairobi, Kenya.</span>
            </div>
          </div>
          <div className="flex-1 w-full p-3">
            <form className="space-y-8 " ref={form} onSubmit={sendEmail}>
              <div>
                <label htmlFor="name" className="block mb-2">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400"
                  placeholder="Enter Your Name"
                  name="user_name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">
                  Email
                </label>
                <input
                  type="text"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400"
                  placeholder="Enter Your Email"
                  name="user_email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <textarea
                  type="text"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none
                    focus:border-green-400"
                  rows="5"
                  placeholder="Enter Your Message"
                  name="message"
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  onClick={notify}
                  // value={send}
                  className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white md:inline
            transform transition-transform duration-300 hover:scale-105 px-8 py-3 rounded-full"
                >
                  Send
                </button>
              </div>

              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
