import SmallHero from "../SmallHero";
import Heading from "./Heading";
import CourseSummaries from './CourseSummaries'
import Footer from '../Footer'

const Courses = () => {
  return (
    <main>
      <SmallHero title={"Become a Massage Therapist"} />
      <Heading />
      <CourseSummaries />
      <Footer marginTop="6rem" />
    </main>
  );
};

export default Courses;