import React from "react";

const ContributePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center  text-white p-8">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold text-indigo-400">Open to Contributions</h1>
        <p className="mt-4 text-lg text-black">
          We welcome contributions from developers of all skill levels! Whether
          it's fixing a bug, adding a new feature, or improving documentation,
          your help is appreciated.
        </p>

        <div className="mt-8 bg- p-6 rounded-xl shadow-lg">
          <h2 className="text-2xl font-semibold text-indigo-300">How to Contribute</h2>
          <ul className="mt-4 text-left text-black space-y-2">
            <li>✅ Fork the repository on GitHub.</li>
            <li>✅ Clone the repo to your local machine.</li>
            <li>✅ Create a new branch for your feature or fix.</li>
            <li>✅ Commit your changes with clear messages.</li>
            <li>✅ Push the branch and submit a pull request.</li>
          </ul>
        </div>

        <a
          href="https://github.com/mehakkanyal16" 
          target="_blank" 
          rel="noopener noreferrer"
          className="mt-6 inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-3 px-6 rounded-lg transition-all"
        >
          Visit GitHub Repository
        </a>
      </div>
    </div>
  );
};

export default ContributePage;