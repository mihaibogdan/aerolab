import { hot } from 'react-hot-loader/root';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';

import theme from './config/theme.config';
import GlobalStyle from './assets/styles/globalStyles';
import Navbar from './components/navbar';
import Home from './sections/home';
import About from './sections/about';
import Platform from './sections/platform';
import ContactDirector from './sections/contact-director';
import Pricing from './sections/pricing';
import Team from './sections/team';
import Testimonials from './sections/testimonials';
import Seo from './sections/seo';
import Clients from './sections/clients';
import Contact from './sections/contact';
import Footer from './sections/footer';

AOS.init({
  once: true,
  offset: 0,
});

document.addEventListener('aos:in', ({ detail }) => {
  const duration = detail.getAttribute('data-aos-duration') || 0;

  setTimeout(() => {
    detail.classList.add('aos-finished');
  }, duration);
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
      <Home />
      <Clients />
      <About />
      <Platform />
      <ContactDirector />
      <Pricing />
      <Team />
      <Testimonials />
      <Seo />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}

export default hot(App);
