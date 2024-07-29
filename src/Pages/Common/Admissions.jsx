const Admissions = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Admissions</h2>

        <section className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Admission Process</h3>
          <p className="text-lg leading-relaxed">
            Admission forms are available for download. Submit the completed
            form along with required documents at the school office.
          </p>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Admission Criteria</h3>
          <p className="text-lg leading-relaxed">
            Admission is based on merit and availability of seats. Entrance
            tests may be conducted for certain grades.
          </p>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">
            Downloadable Admission Forms
          </h3>
          <a
            href="/path/to/admission-form.pdf"
            download
            className="text-blue-500 hover:text-blue-700"
          >
            Click here to download the admission form
          </a>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Important Dates</h3>
          <ul className="list-disc list-inside">
            <li className="text-lg leading-relaxed">
              Admission Form Availability: March 1st
            </li>
            <li className="text-lg leading-relaxed">
              Last Date for Submission: March 31st
            </li>
            <li className="text-lg leading-relaxed">
              Entrance Test: April 15th
            </li>
            <li className="text-lg leading-relaxed">
              Announcement of Results: April 30th
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Admissions;
