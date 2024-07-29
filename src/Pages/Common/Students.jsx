const Students = () => {
  return (
    <>
      <h1 className="text-4xl text-center underline my-10">Students</h1>
      <div className="max-w-5xl mx-auto text-2xl flex flex-col gap-3">
        <div className="">
          <span className="font-bold">Life at Springdale:- </span>
          <div className="flex flex-col gap-3">
            <p className="ml-10">
              <span className="text-sm font-bold">o</span>
              <span className="font-bold">Extracurricular Activities:</span>
              Music, Dance, Drama, Art, Sports, Robotics, Debate Club, Science
              Club.
            </p>
            <p className="ml-10">
              <span className="text-sm font-bold">o</span>
              <span className="font-bold">Clubs and Societies:</span> Literary
              Society, Environmental Club, Astronomy Club, Coding Club.
            </p>
          </div>
        </div>
        <div className="">
          <span className="font-bold">Achievements:- </span>
          <div className="flex flex-col gap-3">
            <p className="ml-10">
              <span className="text-sm font-bold">o</span>
              <span className="font-bold">John Smith -</span> National Level
              Math Olympiad Winner.
            </p>
            <p className="ml-10">
              <span className="text-sm font-bold">o</span>
              <span className="font-bold">Sarah Lee -</span> Gold Medalist in
              State Swimming Championship
            </p>
            <p className="ml-10">
              <span className="text-sm font-bold">o</span>
              <span className="font-bold">Tech Innovators Club -</span> Winners
              of Inter-School Robotics Competition
            </p>
          </div>
        </div>
        <div className="">
          <span className="font-bold">Student Council:- </span>
          <div className="flex flex-col gap-3">
            <p className="ml-10">
              <span className="text-sm font-bold">o</span>
              <span className="font-bold">President:</span> Amy Parker, Grade
              12.
            </p>
            <p className="ml-10">
              <span className="text-sm font-bold">o</span>
              <span className="font-bold">Vice President: </span> Rajiv Mehta,
              Grade 11
            </p>
            <p className="ml-10">
              <span className="text-sm font-bold">o</span>
              <span className="font-bold"> Secretary: </span> Lisa Wong, Grade
              10..
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Students;
