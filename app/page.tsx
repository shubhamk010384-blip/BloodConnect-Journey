import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Timeline from '../components/Timeline';
import AwarenessSessions from '../components/AwarenessSessions';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Timeline />
      <AwarenessSessions />
      <Footer />
    </>
  );
}
