const AboutSection = ({ title, subtitle }) => {
  return (
    <div className="py-6">
      <div>
        <h2 className="text-4xl text-center text-orange-600 ">{title}</h2>
        <hr className="border border-orange-600  max-w-5xl my-2 mx-auto py-1"/>
      </div>
      <p className="text-center text-2xl max-w-5xl mx-auto">{subtitle}</p>
    </div>
  );
};

export default AboutSection;
