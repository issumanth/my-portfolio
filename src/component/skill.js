import { useEffect, useRef, useState } from "react";

function Skills() {
  const skills = [
    { name: "Python", level: 70 },
    { name: "SQL", level: 60 },
    { name: "Editing", level: 85 },
    { name: "Cinematography", level: 75 },
    { name: "art",level: 90},
    { name: "filmography", level: 80 },
    { name: "Robotics", level: 65 },
    { name: "Internet Of Things", level: 50 },
    { name: "Web Development", level: 40 },
  ];

  const [animate, setAnimate] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setAnimate(true);
        else setAnimate(false);
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="w-full min-h-screen px-6 py-20 bg-blue-50/50"
    >

      {/* TITLE */}
      <h2 className="text-4xl font-bold text-center mb-16 text-black">
        My Skills
      </h2>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white border border-blue-200 rounded-xl p-5 shadow-md
                       transition duration-300 
                       hover:scale-105 hover:-translate-y-2 
"
          >

            {/* SKILL NAME */}
            <h3 className="text-black font-semibold mb-3 text-center">
              {skill.name}
            </h3>

            {/* BAR */}
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mb-2">

              <div
                className="h-2 bg-blue-500 transition-all duration-1000"
                style={{
                  width: animate ? `${skill.level}%` : "0%",
                  transitionDelay: `${index * 0.2}s`,
                }}
              ></div>

            </div>

            {/* PERCENT */}
            <p className="text-center text-blue-600 font-semibold text-sm">
              {skill.level}%
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;