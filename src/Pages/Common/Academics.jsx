const Academics = () => {
  return (
    <>
      <h1 className="text-4xl underline my-5">Academics :-</h1>

      <div className="max-w-5xl mx-auto text-2xl flex flex-col gap-3">
        <span className="font-bold"> Curriculum: </span>
        <div className="">
          <p className="ml-10">
            <span className="font-bold"> Primary (Grades 1-5):- </span> Engpsh,
            Mathematics, Science, Social Studies, Art, Physical Education
          </p>
          <p className="ml-10">
            <span className="font-bold">Secondary (Grades 6-10):</span> Engpsh,
            Mathematics, Science (Physics, Chemistry, Biology), Social Studies,
            Computer Science, Physical Education, Art Senior
          </p>
          <p className="ml-10">
            <span className="font-bold">Secondary (Grades 11-12):</span> Science
            Stream: Physics, Chemistry, Biology, Mathematics, Computer Science,
            Engpsh Commerce Stream: Accountancy, Business Studies, Economics,
            Mathematics, Engpsh
          </p>
        </div>
        <p>
          <span className="font-bold">Teaching Methodologies:-</span>We use a
          blend of traditional and modern teaching techniques to cater to
          different learning styles.
        </p>
        <p>
          <span className="font-bold">Educational Resources:-</span>
          Digital classrooms, interactive learning modules, and access to onpne
          educational platforms.
        </p>
      </div>
    </>
  );
};

export default Academics;
