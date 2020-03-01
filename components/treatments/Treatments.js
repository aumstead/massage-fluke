import SmallHero from '../SmallHero'
import PhotoFiller from './PhotoFiller'
import Services from '../Services'
import TreatmentSummaries from './TreatmentSummaries'
import Footer from '../Footer'

const Treatments = () => {
  return (
    <main>
      <SmallHero title={'Massage Therapies'} marginBottom="6rem"/>
      <PhotoFiller />
      <Services showSideHeading={true} marginBottom={"10rem"} />
      <TreatmentSummaries />
      <Footer marginTop="10rem" />
    </main>
  );
};

export default Treatments;
