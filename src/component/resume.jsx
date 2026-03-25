function Resume() {

  // 🔥 Dynamic Data (you can change anytime)
  const resumeData = {
    title: "My Resume",
    role: "Full Stack Developer",
    description:
      "I specialize in building scalable, responsive web applications with a focus on clean user interfaces and efficient backend architecture. My resume provides detailed insights into my technical skills, project experience, and development journey.",
    file: "resume.pdf"
  };

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 bg-blue-50">

      <div className="max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto">

        {/* CARD */}
        <div className="bg-white border border-blue-100 rounded-2xl shadow-lg 
                        p-6 sm:p-8 md:p-10 text-center 
                        hover:shadow-xl transition duration-300">

          {/* TITLE */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-3">
            {resumeData.title}
          </h2>

          {/* ROLE */}
          <p className="text-sm sm:text-base md:text-lg text-blue-600 font-medium mb-2">
            {resumeData.role}
          </p>

          {/* DESCRIPTION */}
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8">
            {resumeData.description}
          </p>

          {/* DIVIDER */}
          <div className="w-16 sm:w-20 md:w-24 h-1 bg-blue-500 mx-auto mb-6 sm:mb-8 rounded-full"></div>

          <div className="mt-8 flex justify-center">

  <a
  href={`${process.env.PUBLIC_URL}/resume.pdf`}
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center justify-center
             bg-blue-600 text-white
             min-w-[200px] sm:min-w-[240px]
             px-6 sm:px-8 py-3 sm:py-4
             text-base md:text-lg
             rounded-full font-semibold
             shadow-md hover:shadow-lg
             hover:bg-blue-700
             transition duration-300"
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