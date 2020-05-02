import { hot } from 'react-hot-loader/root';
import React from 'react';

import GlobalStyle from './assets/styles/globalStyles';
import Navbar from './components/navbar';
import Home from './sections/home';
import About from './sections/about';
import Platform from './sections/platform';
import Team from './sections/team';
import Contact from './sections/contact';

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Home />
      <About />
      <Platform />
      <Team />
      <Contact />
    </>
  );
}

export default hot(App);
