import { useState } from "react";

function Experience() {
  const [activeIndex, setActiveIndex] = useState(null);

  const experiences = [
    {
      role: "Full Stack Developer Intern",
      company: "CONQUERORS TECHNOLOGY",
      duration: "1 Month",
      description:
        "Worked on building web applications, contributing to both frontend and backend development while improving problem-solving skills.",
    },
  ];

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 sm:px-6 md:px-10 bg-blue-50/50 dark:bg-gray-900">

      <div className="max-w-2xl mx-auto">

        {/* TITLE */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8 text-gray-800 dark:text-white">
          Experience
        </h2>

        {/* LIST */}
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="mb-4 border border-blue-200 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800"
          >

            {/* HEADER */}
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center p-4 text-left hover:bg-blue-100 dark:hover:bg-gray-700 transition"
            >
              <div>
                <p className="font-medium text-gray-800 dark:text-white">
                  {exp.company}
                </p>
                <p className="text-sm text-blue-600 dark:text-blue-400">
                  {exp.role}
                </p>
              </div>

              <span className="text-blue-500 dark:text-blue-400 text-lg">
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>

            {/* CONTENT */}
            {activeIndex === index && (
              <div className="px-4 pb-4 text-sm text-gray-600 dark:text-gray-300">
                <p className="mb-1">
                  <span className="text-blue-600 dark:text-blue-400 font-medium">
                    Duration:
                  </span>{" "}
                  {exp.duration}
                </p>
                <p>{exp.description}</p>
              </div>
            )}

          </div>
        ))}

      </div>

    </section>
  );
}

export default Experience;