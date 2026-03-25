function Resume() {
  return (
    // Removed 'min-h-screen' and added 'py-16' for top/bottom spacing
    <section className="flex items-center justify-center bg-blue-400 px-6 py-16">

      <div className="bg-white max-w-2xl w-full rounded-2xl shadow-lg border border-gray-200 p-10 text-center">

        {/* Title */}
        <h2 className="text-4xl font-bold text-blue-600 mb-4">
          My Resume
        </h2>
        {/* Description */}
        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          I'm a passionate developer focused on building modern web applications 
          with clean UI and efficient backend systems. Download my resume to 
          know more about my skills, projects, and experience.
        </p>

        {/* Divider */}
        <div className="w-16 h-1 bg-blue-700 mx-auto mb-8 rounded-full"></div>

        {/* Buttons */}
        <div className="flex justify-center gap-4">

          {/* Download */}
          <a
            href="/resume.pdf"
            download
            className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow-md hover:bg-blue-700 transition-colors"
          >
            Download Resume
          </a>

        </div>

      </div>

    </section>
  );
}

export default Resume;