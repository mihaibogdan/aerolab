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
import TabSection from './sections/tab-section';
import Team from './sections/team';
import Product from './sections/product';
import Clients from './sections/clients';
import Contact from './sections/contact';
import Seo from './sections/seo';
import Footer from './sections/footer';

AOS.init({
  once: true,
  offset: 0,
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
      <Home />
      <About />
      <Platform />
      <TabSection />
      <Team />
      <Product />
      <Clients />
      <Contact />
      <Seo />
      <Footer />
    </ThemeProvider>
  );
}

export default hot(App);
