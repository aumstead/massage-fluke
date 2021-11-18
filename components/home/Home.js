import Hero from "./Hero";
import InfoIcons from "./InfoIcons";
import BowenFeature from "./BowenFeature";
import Services from "../Services";
import Thai from "./Thai";
import Pets from "./Pets";
import Map from "./Map";
import Consultation from "./Consultation";
import Footer from "../Footer";
import OccupationalTherapy from "./OccupationalTherapy";

function Home() {
  return (
    <main>
      <Hero />
      <InfoIcons />
      <OccupationalTherapy />
      <BowenFeature />
      <Thai />
      <Services showHeading={true} />
      <Pets />
      <Map />
      <Consultation />
      <Footer />
    </main>
  );
}

export default Home;
