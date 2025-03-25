import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        {/* About Section */}
        <section className="relative overflow-hidden rounded-3xl bg-white shadow-xl mb-16">
          <div className="flex flex-col md:flex-row">
            {/* Left Content - Image */}
            <div className="relative md:w-5/12 order-2 md:order-1 h-[300px] md:h-auto">
              <div className="absolute inset-0 md:relative h-full w-full md:opacity-100">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                  alt="Collaborative Team"
                  className="h-full w-full object-cover rounded-b-3xl md:rounded-l-3xl md:rounded-br-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent md:bg-none rounded-b-3xl md:rounded-l-3xl md:rounded-br-none"></div>
              </div>
            </div>

            {/* Right Content - Text */}
            <div className="relative z-10 md:w-7/12 order-1 md:order-2 p-8 md:p-12 flex items-center">
              <div className="space-y-6 md:space-y-8">
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
                  Crafted with
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                    Passion & Expertise
                  </span>
                </h2>

                <p className="text-lg text-gray-600 leading-relaxed">
                  Our team of dedicated developers brings years of experience
                  and a genuine love for creating intuitive, powerful solutions
                  that transform how you work.
                </p>

                <p className="text-lg text-gray-600 leading-relaxed">
                  We believe in building technology that adapts to your needs,
                  not the other way around. Every feature is thoughtfully
                  designed to enhance your workflow.
                </p>

                <div>
                  <Link to="/contact">
                    <button className="group relative overflow-hidden rounded-full bg-indigo-600 px-8 py-4 transition-all duration-300 ease-out hover:bg-purple-600 hover:shadow-lg hover:shadow-indigo-500/30">
                      <span className="relative flex items-center justify-center gap-2 text-white">
                        Meet Our Team
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        >
                          <path d="M5 12h14"></path>
                          <path d="m12 5 7 7-7 7"></path>
                        </svg>
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        
       
      </div>
    </div>
  );
}
