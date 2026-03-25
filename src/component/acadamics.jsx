import React from "react";

function Academics() {
  const data = [
    {
      semester: "3rd Sem",
      course: "B.Tech CSE-AIML",
      board: "AUTONOMOUS",
      institute: "Sandip University",
      percentage: "8.47 GPA",
    },
    {
      semester: "2nd Sem",
      course: "B.Tech CSE-AIML",
      board: "AUTONOMOUS",
      institute: "Sandip University",
      percentage: "8.36 GPA",
    },
    {
      semester: "1st Sem",
      course: "B.Tech CSE-AIML",
      board: "AUTONOMOUS",
      institute: "Sandip University",
      percentage: "8.04 GPA",
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
    <section className="slide-left py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-10 bg-blue-50">

      <div className="max-w-5xl mx-auto">

        {/* TITLE */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-12 text-center text-gray-800">
          Academics
        </h2>

        {/* TABLE */}
        <div className="overflow-x-auto">

          <table className="w-full bg-white rounded-xl shadow-md overflow-hidden">

            {/* HEAD */}
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="p-3 text-left">Semester</th>
                <th className="p-3 text-left">Course</th>
                <th className="p-3 text-left">Board</th>
                <th className="p-3 text-left">Institute</th>
                <th className="p-3 text-left">Result</th>
              </tr>
            </thead>

            {/* BODY */}
            <tbody>
              {data.map((item, index) => (
                <tr
                  key={index}
                  className="border-t hover:bg-blue-50 transition"
                >
                  <td className="p-3 text-gray-700">{item.semester}</td>
                  <td className="p-3 text-gray-700">{item.course}</td>
                  <td className="p-3 text-gray-700">{item.board}</td>
                  <td className="p-3 text-gray-700">{item.institute}</td>
                  <td className="p-3 font-semibold text-blue-600">
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