import Banner from "../../Components/Shared/AllOther/Banner";
import AboutUs from "./AboutUs";
import Academics from "./Academics";
import Admissions from "./Admissions";
import ContactUs from "./ContactUs";
import Faculty from "./Faculty";
import Gallery from "./Gallery";
import Students from "./Students";

const Home = () => {
  return (
    <div>
      <Banner />
      <AboutUs/>
      <Academics/>
      <Admissions/>
      <Faculty/>
      <Students/>
      <Gallery/>
      <ContactUs/>
    </div>
  );
};

export default Home;
