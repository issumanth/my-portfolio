function Academics() {
  const data = [
    {
      semester: "1st Sem",
      course: "B.Tech CSE-AIML",
      board: "AUTONOMOUS",
      institute: "Sandip University",
      percentage: "82%",
    },
    {
      semester: "2nd Sem",
      course: "B.Tech CSE-AIML",
      board: "AUTONOMOUS",
      institute: "Sandip University",
      percentage: "8.36 GPA",
    },
    {
      semester: "3rd Sem",
      course: "B.Tech CSE-AIML",
      board: "AUTONOMOUS",
      institute: "Sandip University",
      percentage: "8.47 GPA",
    },
    {
      semester: "10+2",
      course: "MPC",
      board: "CBSE",
      institute: "SREE VIDHYANIKETHAN INTERNATIONAL SCHOOL",
      percentage: "82%",
    },
    {
      semester: "10th",
      course: "CBSE",
      board: "CENTRAL Board",
      institute: "THE ATHENA School",
      percentage: "93%",
    },
  ];

  return (
    <section className="w-full py-16 px-4 md:px-10 zoom-in">

      {/* CONTAINER WITH GLASS EFFECT */}
      <div className="w-full bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-lg">

        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-extrabold mb-20 text-black text-center">
          Academics
        </h2>

        {/* TABLE */}
        <div className="overflow-x-auto">

          <table className="w-full text-left border-collapse">

            {/* HEAD */}
            <thead>
              <tr className="text-black border-b-2 border-blue-400 text-lg md:text-xl">
                <th className="p-4">Semester</th>
                <th className="p-4">Course</th>
                <th className="p-4">Board</th>
                <th className="p-4">College / School</th>
                <th className="p-4">Percentage</th>
              </tr>
            </thead>

            {/* BODY */}
            <tbody>
              {data.map((item, index) => (
                <tr
                  key={index}
                  className="transition duration-300 
                             hover:bg-blue-50 
                             hover:scale-[1.01] 
                             hover:shadow-md"
                >
                  <td className="p-4 text-gray-700">{item.semester}</td>
                  <td className="p-4 text-gray-700">{item.course}</td>
                  <td className="p-4 text-gray-700">{item.board}</td>
                  <td className="p-4 text-gray-700">{item.institute}</td>

                  <td className="p-4 font-bold text-blue-600">
                    {item.percentage}
                  </td>
                </tr>
              ))}
            </tbody>

          </table>

        </div>

      </div>

    </section>
  );
}

export default Academics;