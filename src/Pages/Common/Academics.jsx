const Academics = () => {
  const academicsData = {
    curriculum: {
      primary: [
        "English",
        "Mathematics",
        "Science",
        "Social Studies",
        "Art",
        "Physical Education",
      ],
      secondary: [
        "English",
        "Mathematics",
        "Science (Physics, Chemistry, Biology)",
        "Social Studies",
        "Computer Science",
        "Physical Education",
        "Art",
      ],
      seniorSecondary: {
        science: [
          "Physics",
          "Chemistry",
          "Biology",
          "Mathematics",
          "Computer Science",
          "English",
        ],
        commerce: [
          "Accountancy",
          "Business Studies",
          "Economics",
          "Mathematics",
          "English",
        ],
      },
    },
    teachingMethodologies:
      "We use a blend of traditional and modern teaching techniques to cater to different learning styles.",
    educationalResources:
      "Digital classrooms, interactive learning modules, and access to online educational platforms.",
  };
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Academics</h2>

        <section className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Curriculum</h3>
          <div className="space-y-6">
            <div>
              <h4 className="text-xl font-semibold mb-2">
                Primary (Grades 1-5)
              </h4>
              <ul className="list-disc list-inside">
                {academicsData.curriculum.primary.map((subject, index) => (
                  <li key={index}>{subject}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">
                Secondary (Grades 6-10)
              </h4>
              <ul className="list-disc list-inside">
                {academicsData.curriculum.secondary.map((subject, index) => (
                  <li key={index}>{subject}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xl font-semibold mb-2">
                Senior Secondary (Grades 11-12)
              </h4>
              <div className="space-y-4">
                <div>
                  <h5 className="text-lg font-semibold mb-2">Science Stream</h5>
                  <ul className="list-disc list-inside">
                    {academicsData.curriculum.seniorSecondary.science.map(
                      (subject, index) => (
                        <li key={index}>{subject}</li>
                      )
                    )}
                  </ul>
                </div>
                <div>
                  <h5 className="text-lg font-semibold mb-2">
                    Commerce Stream
                  </h5>
                  <ul className="list-disc list-inside">
                    {academicsData.curriculum.seniorSecondary.commerce.map(
                      (subject, index) => (
                        <li key={index}>{subject}</li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">
            Teaching Methodologies
          </h3>
          <p className="text-lg leading-relaxed">
            {academicsData.teachingMethodologies}
          </p>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Educational Resources</h3>
          <p className="text-lg leading-relaxed">
            {academicsData.educationalResources}
          </p>
        </section>
      </div>
    </div>
  );
};

export default Academics;
