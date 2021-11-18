import SmallHero from "../SmallHero";
import Footer from "../Footer";
import MeditationSummaries from "../meditation/MeditationSummaries";
import MeditationPhotoFiller from "./MeditationPhotoFiller";
import MeditationCTA from "./MeditationCTA";

const Treatments = () => {
  return (
    <main>
      <SmallHero title={"Meditation"} marginBottom="6rem" />
      <MeditationPhotoFiller />
      <MeditationCTA />
      <MeditationSummaries />
      <Footer marginTop="10rem" />
    </main>
  );
};

export default Treatments;
