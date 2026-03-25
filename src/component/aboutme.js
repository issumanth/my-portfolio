function About() {
  return (
    <section className="min-h-screen py-24 w-fullpx-4 md:px-10 fade-up bg-blue-200">

      <div className="w-full">

        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-10 text-black text-center">
          About Me
        </h2>

        {/* CONTENT */}
        <p className="text-lg md:text-2xl text-gray-700 leading-relaxed text-left">

          Hello, I’m{" "}
          <span className="text-blue-600 font-semibold">
            Godugu Sumanth
          </span>
          , a passionate and dedicated student who believes in growth, consistency,
          and the power of hard work.

          <br /><br />

          I am currently on a journey to become a{" "}
          <span className="text-blue-600 font-semibold">
            Full-Stack Developer
          </span>
          , building my skills step by step by working on real-world projects.

          <br /><br />

          My interest in software development comes from curiosity and the desire
          to transform ideas into real applications.

          <br /><br />

          I have knowledge in{" "}
          <span className="text-blue-500 font-medium">Python</span>,{" "}
          <span className="text-blue-500 font-medium">SQL</span> and I am learning{" "}
          <span className="text-blue-500 font-medium">
            React, Tailwind CSS, and Django
          </span>
          .

          <br /><br />

          Apart from coding, I am deeply interested in{" "}
          <span className="text-blue-600 italic">
            cinematography, video editing, and filmography
          </span>
          , which enhance my creativity and visual thinking.

          <br /><br />

          <span className="block text-center text-blue-600 font-bold text-2xl mt-6">
            “Never give up, no matter what. There are infinite chances until you die.”
          </span>

          <br />

          I believe in continuous improvement, learning from failures, and pushing
          forward no matter the situation.

        </p>

      </div>

    </section>
  );
}

export default About;