function About() {
  return (
    <section className="min-h-screen py-20 px-6 md:px-10 bg-blue-50">

      <div className="max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto">

        {/* TITLE */}
        <h2 className="text-3xl md:text-5xl font-extrabold mb-12 text-center text-blue-900">
          About Me
        </h2>

        {/* CARD */}
        <div className="bg-white border border-blue-100 rounded-2xl shadow-md p-6 md:p-8 lg:p-10 space-y-6">

          {/* INTRO */}
          <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
            Hello, I’m{" "}
            <span className="text-blue-600 font-semibold">
              Godugu Sumanth
            </span>, a highly motivated and detail-oriented aspiring software developer with a strong commitment to continuous learning and technical growth.
          </p>

          {/* GOAL */}
          <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
            I am currently focusing on becoming a{" "}
            <span className="text-blue-600 font-semibold">
              Full-Stack Developer
            </span>, with hands-on experience in developing scalable and responsive web applications using modern technologies.
          </p>

          {/* TECH INTEREST */}
          <p className="text-base md:text-lg lg:text-xl text-gray-700 leading-relaxed">
            My interest in software development is driven by a strong foundation in problem-solving and a passion for designing efficient, user-centric digital solutions.
          </p>

          {/* SKILLS */}
          <div className="bg-blue-50 p-5 rounded-xl border border-blue-100">
            <p className="font-semibold text-blue-800 mb-2">
              Technical Skills:
            </p>
            <p className="text-base md:text-lg lg:text-xl text-gray-700">
              Proficient in{" "}
              <span className="text-blue-600 font-medium">Python</span> and{" "}
              <span className="text-blue-600 font-medium">SQL</span>, with working knowledge of{" "}
              <span className="text-blue-600 font-medium">
                JavaScript, React.js, Tailwind CSS, and Django
              </span>.
            </p>
          </div>

          {/* EXPERIENCE */}
          <div className="bg-blue-50 p-5 rounded-xl border border-blue-100">
            <p className="font-semibold text-blue-800 mb-2">
              Development Experience:
            </p>
            <p className="text-base md:text-lg lg:text-xl text-gray-700">
              Developed multiple projects including a calculator, an object-oriented JavaScript application, and a responsive portfolio website, demonstrating practical implementation of frontend and backend concepts.
            </p>
          </div>

          {/* INTERESTS */}
          <div className="bg-blue-50 p-5 rounded-xl border border-blue-100">
            <p className="font-semibold text-blue-800 mb-2">
              Additional Interests:
            </p>
            <p className="text-base md:text-lg lg:text-xl text-gray-700">
              Strong interest in{" "}
              <span className="text-blue-600 italic">
                cinematography, video editing, and visual storytelling
              </span>, enhancing creativity and design thinking.
            </p>
          </div>

          {/* QUOTE */}
          <div className="text-center pt-4">
            <p className="text-blue-700 font-bold text-lg md:text-xl lg:text-2xl">
              “Never give up, no matter what. There are infinite chances until you die.”
            </p>
          </div>

          {/* END NOTE */}
          <p className="text-base md:text-lg lg:text-xl text-gray-700 text-center leading-relaxed">
            I continuously strive to enhance my technical expertise, adapt to emerging technologies, and contribute effectively to real-world software development environments.
          </p>

        </div>

      </div>

    </section>
  );
}

export default About;