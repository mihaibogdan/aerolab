import React from 'react';

import { Heading2, Paragraph } from '../../assets/styles/typography';
import { Section, Container, CenteredTitle, Stores } from './style';

import PlayStore from '../../assets/img/contact/play-store.png';
import AppStore from '../../assets/img/contact/app-store.png';

function Seo() {
  return (
    <>
      <Section id="seo">
        <Container>
          <CenteredTitle data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
            <Heading2 color="#fff">SEO marketing app on your mobile!</Heading2>
          </CenteredTitle>
          <Paragraph
            textAlign="center"
            fontSize="18px"
            margin="10px 0px 0px"
            data-aos="fade-up"
            data-aos-duration="600"
            data-aos-delay="150"
          >
            The power is in your hands now.
          </Paragraph>
          <Stores data-aos="fade-up" data-aos-duration="600" data-aos-delay="200">
            <a href="https://play.google.com/store">
              <img src={PlayStore} alt="play-store" />
            </a>
            <a href="https://www.apple.com/ro/ios/app-store/">
              <img src={AppStore} alt="app-store" />
            </a>
          </Stores>
        </Container>
      </Section>
    </>
  );
}

export default Seo;
