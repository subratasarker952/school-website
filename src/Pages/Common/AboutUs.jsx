import AboutSection from "../../Components/Shared/AboutSections/AboutSection";

const AboutUs = () => {
    return (
        <div>
            <AboutSection title={"History"} subtitle={"Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students."}/>
            <AboutSection title={"Vision"} subtitle={"To create a learning environment that fosters academic excellence, critical thinking, and ethical values."}/>
            <AboutSection title={"Mission"} subtitle={"To empower students with the knowledge, skills, and values needed to thrive in a dynamic world."}/>
            <AboutSection title={"Principal's Message"} subtitle={"At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future."}/>
            <AboutSection title={"Infrastructure and Facilities"} subtitle={"State-of-the-art science and computer labs.  Spacious and well-equipped classrooms. Library with a vast collection of books and digital resources. Sports facilities including a playground, gymnasium, and swimming pool"}/>
        </div>
    );
};

export default AboutUs;