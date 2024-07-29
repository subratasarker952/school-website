const Faculty = () => {
  return (
    <>
      <h1 className="text-4xl underline my-5">Faculty :-</h1>
      <div className="max-w-5xl mx-auto text-2xl flex flex-col gap-3">
        <div className="">
          <span className="font-bold">Profiles:- </span>
          <div className="flex flex-col gap-3">
            <p className="ml-10">
              <span className="text-sm font-bold">o</span> <span className='font-bold'>John Doe:</span> Principal, M.Ed, 20 years of
              experience in educational administration.
            </p>
            <p className="ml-10">
              <span className="text-sm font-bold">o</span> <span className='font-bold'>Jane Smith:</span> Vice Principal, M.Sc. in
              Physics, 15 years of teaching experience.
            </p>
            <p className="ml-10">
              <span className="text-sm font-bold">o</span> <span className='font-bold'> Emily Johnson:</span> English Teacher, M.A.
              in English, 10 years of teaching experience.
            </p>
            <p className="ml-10">
              <span className="text-sm font-bold">o</span> <span className='font-bold'>Michael Brown:</span> Mathematics Teacher,
              M.Sc. in Mathematics, 8 years of teaching experience.
            </p>
            <p className="ml-10">
              <span className="text-sm font-bold">o</span> <span className='font-bold'>Sophia Davis:</span> Science Teacher, M.Sc.
              in Chemistry, 12 years of teaching experience. David
            </p>
            <p className="ml-10">
              <span className="text-sm font-bold">o</span> <span className='font-bold'>Wilson:</span> Computer Science Teacher,
              B.Tech in Computer Science, 5 years of teaching experience.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Faculty;
