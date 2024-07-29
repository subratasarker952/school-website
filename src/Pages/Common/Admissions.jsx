const Admissions = () => {
  return (
    <>
      <h1 className="text-4xl underline my-5">Admissions :-</h1>
      <div className="max-w-5xl mx-auto text-2xl flex flex-col gap-3">
        <div className="">
          <p className="">
            <span className="font-bold">Process:- </span> Admission forms are
            available for download. Submit the completed form along with
            required documents at the school office.
          </p>
          <p className="">
            <span className="font-bold">Criteria:-</span> :Admission is based on
            merit and availability of seats. Entrance tests may be conducted for
            certain grades.
          </p>
          <div className="">
            <span className="font-bold">Important Dates:- </span>
            <div>
              <p className="ml-10">
                <span className="text-sm font-bold">o</span> Admission Form
                Availability: March 1st
              </p>
              <p className="ml-10">
                <span className="text-sm font-bold">o</span> Last Date for
                Submission: March 31st
              </p>
              <p className="ml-10">
                <span className="text-sm font-bold">o</span> Entrance Test:
                April 15th
              </p>
              <p className="ml-10">
                <span className="text-sm font-bold">o</span> Announcement of
                Results: April 30th
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Admissions;
