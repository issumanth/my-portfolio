import { useEffect, useRef, useState } from "react";

function Skills() {
  const skills = [
    {
      name: "Python",
      level: 70,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    },
    {
      name: "SQL",
      level: 60,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "Editing",
      level: 85,
      icon: "https://cdn-icons-png.flaticon.com/512/2920/2920277.png",
    },
    {
      name: "Cinematography",
      level: 75,
      icon: "https://cdn-icons-png.flaticon.com/512/1042/1042339.png",
    },
    {
      name: "Art",
      level: 90,
      icon: "https://cdn-icons-png.flaticon.com/512/1821/1821987.png",
    },
    {
      name: "Filmography",
      level: 80,
      icon: "https://cdn-icons-png.flaticon.com/512/3659/3659898.png",
    },
    {
      name: "Robotics",
      level: 65,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg",
    },
    {
      name: "Internet Of Things",
      level: 50,
      icon: "https://cdn-icons-png.flaticon.com/512/4149/4149678.png",
    },
    {
      name: "Web Development",
      level: 40,
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
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
      className="w-full min-h-screen px-6 py-20 bg-blue-50"
    >

      {/* TITLE */}
      <h2 className="text-4xl font-bold text-center mb-16 text-blue-900">
        My Skills
      </h2>

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white border border-blue-100 rounded-xl p-6 shadow-md
                       transition duration-300 
                       hover:scale-105 hover:-translate-y-2"
          >

            {/* ICON */}
            <div className="flex justify-center mb-4">
              <img
                src={skill.icon}
                alt={skill.name}
                className="w-12 h-12 object-contain transition duration-300 hover:scale-110"
              />
            </div>

            {/* NAME */}
            <h3 className="text-gray-800 font-semibold mb-3 text-center">
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