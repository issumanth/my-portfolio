function Resume() {
  return (
    <section className="zoom-in py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 bg-blue-50/50 dark:bg-gray-900">

      <div className="w-full max-w-2xl bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200 p-8 sm:p-10 text-center transition duration-300 hover:shadow-2xl">

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-4">
          My Resume
        </h2>

        {/* Subtitle */}
        <p className="text-sm sm:text-base text-gray-500 mb-2">
          Full Stack Developer
        </p>

        {/* Description */}
        <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-8">
          I build modern, responsive web applications with clean UI and efficient backend systems.
          Explore my resume to learn more about my skills, projects, and experience.
        </p>

        {/* Divider */}
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-8 rounded-full"></div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">

          {/* Download */}
          <a
            href="/resume.pdf"
            download
            className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md 
                       hover:bg-blue-700 hover:scale-105 transition duration-300"
          >
            Download Resume
          </a>

          
        </div>

      </div>

    </section>
  );
}

export default Resume;