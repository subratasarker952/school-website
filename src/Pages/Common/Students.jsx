const Students = () => {
  const studentsData = {
    extracurriculars: [
      { name: "Music", description: "Various music clubs and bands" },
      { name: "Dance", description: "Dance clubs and teams" },
      { name: "Drama", description: "Drama and theater groups" },
      { name: "Art", description: "Art clubs and exhibitions" },
      { name: "Sports", description: "Teams and sports activities" },
      { name: "Robotics", description: "Robotics club and competitions" },
      { name: "Debate Club", description: "Debate teams and events" },
      { name: "Science Club", description: "Science experiments and fairs" },
    ],
    achievements: [
      {
        name: "John Smith",
        achievement: "National Level Math Olympiad Winner",
      },
      {
        name: "Sarah Lee",
        achievement: "Gold Medalist in State Swimming Championship",
      },
      {
        name: "Tech Innovators Club",
        achievement: "Winners of Inter-School Robotics Competition",
      },
    ],
    studentCouncil: [
      { position: "President", name: "Amy Parker", grade: 12 },
      { position: "Vice President", name: "Rajiv Mehta", grade: 11 },
      { position: "Secretary", name: "Lisa Wong", grade: 10 },
    ],
  };
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto">
        <h2 className="text-3xl text-center font-bold mb-8">Students</h2>

        <section className="mb-12">
          <h3 className="text-2xl  text-center font-semibold mb-4">
            Extracurricular Activities
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {studentsData.extracurriculars.map((activity, index) => (
              <div key={index} className=" text-center  bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold mb-2">{activity.name}</h4>
                <p>{activity.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl text-center font-semibold mb-4">
            Achievements
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {studentsData.achievements.map((achievement, index) => (
              <div key={index} className=" text-center  bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold mb-2">
                  {achievement.name}
                </h4>
                <p>{achievement.achievement}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl  text-center font-semibold mb-4">
            Student Council
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {studentsData.studentCouncil.map((member, index) => (
              <div key={index} className=" text-center  bg-white p-6 rounded-lg shadow-lg">
                <h4 className="text-xl font-semibold mb-2">
                  {member.position}
                </h4>
                <p>
                  {member.name}, Grade {member.grade}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Students;
