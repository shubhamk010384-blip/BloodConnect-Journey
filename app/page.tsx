import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Timeline from '../components/Timeline';

import Week1Section from '../components/Week1Section';
import Week2Section from '../components/Week2Section';
import Week3Section from '../components/Week3Section';
import Week4Section from '../components/Week4Section';
import Week5Section from '../components/Week5Section';

import AwarenessSessions from '../components/AwarenessSessions';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <Timeline />

      <Week1Section />

      <Week2Section />

      <Week3Section />

      <Week4Section />

      <Week5Section />

      <AwarenessSessions />

      <Footer />
    </>
  );
}
