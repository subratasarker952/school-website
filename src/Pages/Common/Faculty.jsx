const Faculty = () => {
  const facultyData = [
    {
      name: "John Doe",
      position: "Principal",
      qualifications: "M.Ed",
      experience: "20 years of experience in educational administration",
    },
    {
      name: "Jane Smith",
      position: "Vice Principal",
      qualifications: "M.Sc. in Physics",
      experience: "15 years of teaching experience",
    },
    {
      name: "Emily Johnson",
      position: "English Teacher",
      qualifications: "M.A. in English",
      experience: "10 years of teaching experience",
    },
    {
      name: "Michael Brown",
      position: "Mathematics Teacher",
      qualifications: "M.Sc. in Mathematics",
      experience: "8 years of teaching experience",
    },
    {
      name: "Sophia Davis",
      position: "Science Teacher",
      qualifications: "M.Sc. in Chemistry",
      experience: "12 years of teaching experience",
    },
    {
      name: "David Wilson",
      position: "Computer Science Teacher",
      qualifications: "B.Tech in Computer Science",
      experience: "5 years of teaching experience",
    },
  ];
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Faculty</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {facultyData.map((faculty, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-2">{faculty.name}</h3>
              <p className="text-gray-700 mb-1">
                <span className="font-semibold">Position:</span>{" "}
                {faculty.position}
              </p>
              <p className="text-gray-700 mb-1">
                <span className="font-semibold">Qualifications:</span>{" "}
                {faculty.qualifications}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Experience:</span>{" "}
                {faculty.experience}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faculty;
