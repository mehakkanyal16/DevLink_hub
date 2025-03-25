import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="relative overflow-hidden rounded-3xl bg-white shadow-xl mb-16">
          <div className="flex flex-col sm:flex-row">
            {/* Left Content - Image (Mobile: Bottom, Desktop: Left) */}
            <div className="relative sm:w-1/2 order-2 sm:order-1 h-[300px] sm:h-auto">
              <div className="absolute inset-0 sm:relative h-full w-full sm:opacity-100">
                <img
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
                  alt="Productivity App"
                  className="h-full w-full object-cover rounded-b-3xl sm:rounded-l-3xl sm:rounded-br-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent sm:bg-none rounded-b-3xl sm:rounded-l-3xl sm:rounded-br-none"></div>
              </div>
            </div>

            {/* Right Content - Text (Mobile: Top, Desktop: Right) */}
            <div className="relative z-10 sm:w-1/2 order-1 sm:order-2 p-8 sm:p-12 flex items-center">
              <div className="space-y-6 sm:space-y-8">
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-gray-900">
                  Master Your 
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                    Workflow
                  </span>
                </h1>
                
                <p className="text-lg text-gray-600 leading-relaxed">
                  Streamline tasks, collaborate seamlessly, and achieve more 
                  with intelligent workspace solutions.
                </p>

                <div>
                  <Link to="/download">
                    <button className="group relative overflow-hidden rounded-full bg-indigo-600 px-8 py-6 transition-all duration-300 ease-out hover:bg-purple-600 hover:shadow-lg hover:shadow-indigo-500/30">
                      <span className="relative flex items-center justify-center gap-2 text-white">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="white"
                          xmlns="http://www.w3.org/2000/svg"
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        >
                          <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
                        </svg>
                        Get Started
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-12">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900">
              Work Smarter. <span className="text-indigo-600">Not Harder.</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our intelligent platform adapts to your workflow and helps you focus on what matters
            </p>
          </div>

          <div className="relative mx-auto max-w-3xl">
            <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 opacity-30 blur-xl"></div>
            <div className="relative overflow-hidden rounded-xl bg-white shadow-xl">
              {/* <img
                className="w-full h-auto transform transition-transform duration-700 hover:scale-105"
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                alt="App Features"
              /> */}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};


