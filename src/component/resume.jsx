function Resume() {
  return (
    <section className="py-20 px-6 md:px-10 bg-blue-50">

      <div className="max-w-3xl lg:max-w-4xl mx-auto">

        {/* CARD */}
        <div className="bg-white border border-blue-100 rounded-2xl shadow-md 
                        p-8 md:p-10 text-center 
                        hover:shadow-lg transition duration-300">

          {/* TITLE */}
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            My Resume
          </h2>

          {/* SUBTITLE */}
          <p className="text-base md:text-lg text-blue-600 font-medium mb-2">
            Full Stack Developer
          </p>

          {/* DESCRIPTION */}
          <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
            I specialize in building scalable, responsive web applications with a focus on clean user interfaces and efficient backend architecture.
            My resume provides detailed insights into my technical skills, project experience, and development journey.
          </p>

          {/* DIVIDER */}
          <div className="w-24 h-1 bg-blue-500 mx-auto mb-8 rounded-full"></div>

          {/* BUTTON (CENTERED) */}
          <div className="text-center mt-8">
  <a
    href="/resume.pdf"
    download
    className="inline-block bg-blue-600 text-white px-10 py-3 rounded-xl font-semibold shadow-md hover:bg-blue-700 transition"
  >
    Download Resume
  </a>
</div>

        </div>

      </div>

    </section>
  );
}

export default Resume;