import React, { useEffect } from 'react';

import Navbar from 'components/navbar';
import Hero from './sections/hero';
import About from './sections/about';
import Platform from './sections/platform';
import ContactDirector from './sections/contact-director';
import Pricing from './sections/pricing';
import Testimonials from './sections/testimonials';
import Faq from './sections/faq';
import Clients from './sections/clients';
import Contact from './sections/contact';
import Footer from '../../components/footer';

function Home() {
  useEffect(() => {
    const { hash } = window.location;
    !hash && window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Clients />
      <About />
      <Platform />
      <ContactDirector />
      <Pricing />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
