import Hero from './Hero'
import InfoIcons from './InfoIcons'
import BowenFeature from './BowenFeature'
import Services from '../Services'
import Thai from './Thai'
import Pets from './Pets'
import Map from './Map'
import Footer from '../Footer'

function Home() {
  return (
    <main>
      <Hero />
      <InfoIcons />
      <BowenFeature />
      <Thai />
      <Services showHeading={true} />
      <Pets />
      <Map />
      <Footer />
    </main>
  )
}

export default Home;