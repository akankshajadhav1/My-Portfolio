import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full min-h-screen mb-16 pt-10 md:pt-17 bg-gradient-to-br from-[#f3eee2] via-[#f1e9df] to-[#dcd9d7] container mx-auto px-6 relative flex flex-col items-center justify-start"
    >
      <h2 className="text-xl mb-3 md:text-2xl text-center font-serif italic text-neutral-800">
        Contact Me!
      </h2>

      <form className="w-full md:w-1/2 border-2 border-gray-800 rounded-xl p-6 md:p-8 shadow-lg shadow-gray-300/50 bg-white/90 backdrop-blur-sm space-y-6">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 block">Full Name</label>
          <input
            type="text"
            placeholder="Enter your full name"
            className="w-full border border-gray-300 outline-none p-3 text-lg text-neutral-700 bg-gray-50 rounded-md focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 block">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 outline-none p-3 text-lg text-neutral-700 bg-gray-50 rounded-md focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all"
          />
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 block">Message</label>
          <textarea
            placeholder="Enter your message"
            rows={6}
            className="w-full border border-gray-300 outline-none p-3 text-lg text-neutral-700 bg-gray-50 rounded-md focus:ring-2 focus:ring-gray-400 focus:border-transparent transition-all resize-none"
          />
        </div>

        <div className="w-full flex items-center justify-end">
          <button
            type="submit"
            className="bg-gray-200 rounded-md px-6 py-3 hover:bg-orange-500 hover:text-white transition-all duration-150 ease-in-out font-medium"
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;