import React from "react";

function Projects() {
  return (
    <section className="bg-blue-50 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-4xl font-bold text-blue-600 mb-10">
          My Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Calculator Project */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold text-blue-600 mb-3">
              Calculator App
            </h3>

            <p className="text-gray-600 mb-6">
              A simple calculator built using HTML, CSS and JavaScript.
            </p>

            <div className="flex justify-center gap-4">
              <a
                href="/calc/calc.html"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
              >
                🚀 Go Live
              </a>

              <a
                href="https://github.com/issumanth/calculator-project"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-black transition"
              >
                💻 Code
              </a>
            </div>
          </div>

          {/* Portfolio Project */}
          <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold text-blue-600 mb-3">
              Portfolio Website
            </h3>

            <p className="text-gray-600 mb-6">
              My personal portfolio built using React and Tailwind CSS.
            </p>

            <div className="flex justify-center gap-4">
              
              {/* 🔥 This opens your current portfolio */}
              <a
                href="/"
                className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
              >
                🚀 Go Live
              </a>

              <a
                href="https://github.com/issumanth"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-black transition"
              >
                💻 Code
              </a>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Projects;