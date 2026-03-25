import { useState } from "react";

function Experience() {
  const [activeIndex, setActiveIndex] = useState(null);

  const experiences = [
    {
      role: "Full Stack Developer Intern",
      company: "CONQUERORS TECHNOLOGY",
      duration: "1 Month",
      description:
        "Worked on developing responsive web applications while strengthening frontend and core development skills through practical implementation.",
      responsibilities: [
        "Developed a calculator using HTML, CSS, and JavaScript",
        "Designed and built a responsive portfolio website using React and Tailwind CSS",
      ],
      learnings: [
        "Strong understanding of JavaScript and DOM manipulation",
        "Enhanced problem-solving and debugging skills",
      ],
    },
  ];

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6 md:px-10 bg-blue-50">

      {/* CONTAINER */}
      <div className="max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto">

        {/* TITLE */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900">
          Experience
        </h2>

        {/* LIST */}
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="mb-6 md:mb-8 lg:mb-10 
                       border border-blue-100 
                       rounded-2xl bg-white 
                       shadow-md hover:shadow-lg 
                       transition-all duration-300"
          >

            {/* HEADER */}
            <button
              onClick={() => toggle(index)}
              className="w-full flex justify-between items-center 
                         p-5 md:p-6 lg:p-8 text-left 
                         hover:bg-blue-100 transition"
            >
              <div>
                <p className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-800">
                  {exp.company}
                </p>
                <p className="text-base md:text-lg lg:text-xl text-blue-600">
                  {exp.role}
                </p>
              </div>

              <span className="text-xl lg:text-2xl text-blue-500">
                {activeIndex === index ? "−" : "+"}
              </span>
            </button>

            {/* CONTENT */}
            {activeIndex === index && (
              <div className="px-6 md:px-8 lg:px-10 pb-6 md:pb-8 lg:pb-10 
                              text-base md:text-lg lg:text-xl 
                              text-gray-700 
                              space-y-6 leading-relaxed">

                {/* DURATION */}
                <p>
                  <span className="text-blue-700 font-semibold">
                    Duration:
                  </span>{" "}
                  {exp.duration}
                </p>

                {/* DESCRIPTION */}
                <p className="leading-loose">
                  {exp.description}
                </p>

                {/* RESPONSIBILITIES */}
                <div className="bg-blue-50 p-4 md:p-5 rounded-xl border border-blue-100">
                  <p className="font-semibold text-blue-800 mb-2">
                    Responsibilities:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    {exp.responsibilities.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                {/* LEARNINGS */}
                <div className="bg-blue-50 p-4 md:p-5 rounded-xl border border-blue-100">
                  <p className="font-semibold text-blue-800 mb-2">
                    Key Learnings:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    {exp.learnings.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

              </div>
            )}

          </div>
        ))}

      </div>

    </section>
  );
}

export default Experience;