function Experience() {
  return (
    <section className="min-h-screen py-24 px-4 md:px-10 slide-right bg-blue-75">

      <div className="w-full">

        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-20 text-black text-center">
          Experience
        </h2>

        {/* CARD */}
        <div className=" p-[2px] rounded-xl">

          <div className="bg-white rounded-xl p-10 shadow-lg 
                          transition duration-300 
                          hover:scale-[1.02] hover:-translate-y-2 
                          hover:ring-2 hover:ring-blue-400 
                          hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]">

            <h3 className="text-2xl font-bold text-black mb-2">
              💼 Full Stack Developer Intern
            </h3>

            <p className="text-blue-600 text-lg font-semibold mb-1">
              CONQUERORS TECHNOLOGY
            </p>

            <p className="text-gray-500 mb-4">
              Duration: 1 Month
            </p>

            <p className="text-gray-700  leading-relaxed">
              Worked as a Full Stack Developer Intern, gaining hands-on experience 
              in building real-world web applications. Contributed to both frontend 
              and backend development while improving problem-solving skills and 
              understanding of development workflows.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Experience;