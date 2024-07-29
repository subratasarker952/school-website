import AboutSection from "../../Components/Shared/AboutSections/AboutSection";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">About Us</h2>

        <section className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Our History</h3>
          <p className="text-lg leading-relaxed">
            Founded in 1985, Springdale Public School has been dedicated to
            providing quality education and holistic development to students.
            Over the years, we have grown into a well-respected institution
            known for our commitment to academic excellence and extracurricular
            achievements.
          </p>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Vision</h3>
          <p className="text-lg leading-relaxed">
            To create a learning environment that fosters academic excellence,
            critical thinking, and ethical values.
          </p>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Mission</h3>
          <p className="text-lg leading-relaxed">
            To empower students with the knowledge, skills, and values needed to
            thrive in a dynamic world. We are committed to nurturing the
            potential of every student and guiding them towards a successful
            future.
          </p>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">
            Message from the Principal
          </h3>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-lg leading-relaxed italic mb-4">
              At Springdale, we believe in nurturing the potential of every
              student and guiding them towards a successful future. Our
              dedicated faculty and staff work tirelessly to create a supportive
              and challenging environment that encourages students to excel in
              all areas of their development.
            </p>
            <p className="text-right font-semibold">- John Doe, Principal</p>
          </div>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">
            Infrastructure and Facilities
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-2">
                Science and Computer Labs
              </h4>
              <p>
                State-of-the-art science and computer labs equipped with the
                latest technology.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-2">Classrooms</h4>
              <p>
                Spacious and well-equipped classrooms designed to facilitate
                effective learning.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-2">Library</h4>
              <p>
                A vast collection of books and digital resources to support
                students academic and personal growth.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-2">Sports Facilities</h4>
              <p>
                Comprehensive sports facilities including a playground,
                gymnasium, and swimming pool.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
