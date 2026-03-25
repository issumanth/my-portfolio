import React from "react";

const projects = [
  {
    title: "Calculator App",
    description: "A simple calculator built using HTML, CSS, and JavaScript.",
    live: "https://issumanth.github.io/calc/",
    code: "https://github.com/issumanth/calc",
  },
  {
    title: "Portfolio Website",
    description: "My personal portfolio built using React and Tailwind CSS.",
    live: "https://issumanth.github.io/my-portfolio",
    code: "https://github.com/issumanth/my-portfolio",
  },
  {
    title: "Time Table Website",
    description: "A clean and structured timetable built using HTML and CSS with color-coded subjects.",
    live: "https://issumanth.github.io/timetable/",
    code: "https://github.com/issumanth/timetable",
  },
];

function Projects() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-600">
        My Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold mb-2">
              {project.title}
            </h3>

            <p className="text-gray-600 mb-4">
              {project.description}
            </p>

            <div className="flex gap-4">
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Live
              </a>

              <a
                href={project.code}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50"
              >
                Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;