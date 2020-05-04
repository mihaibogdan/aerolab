import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';

import { Heading2, Paragraph } from '../../assets/styles/typography';
import { Section, Container, CenteredTitle } from './style';
import Firefox from '../../assets/img/clients/firefox.png';
import Bullfit from '../../assets/img/clients/bullfit.png';
import Adroll from '../../assets/img/clients/adroll.png';
import Eventbrite from '../../assets/img/clients/eventbrite.png';
import Aqua from '../../assets/img/clients/aqua.png';
import Pencil from '../../assets/img/clients/pencil.png';
import Sixbase from '../../assets/img/clients/sixbase.png';

function Clients() {
  const params = {
    speed: 800,
    loop: true,
    autoplay: true,
    slidesPerView: 5,
    spaceBetween: 30,
    breakpoints: {
      1199: {
        slidesPerView: 5,
      },

      991: {
        slidesPerView: 5,
      },

      767: {
        slidesPerView: 4,
      },

      320: {
        slidesPerView: 3,
      },
    },
  };
  return (
    <>
      <Section id="clients">
        <Container>
          <CenteredTitle>
            <Heading2>A reliable top-rated company</Heading2>
          </CenteredTitle>
          <Paragraph color="#7e7e7e" textAlign="center" margin="15px 0px 45px 0px">
            We deliver the best services for app design and coding
          </Paragraph>

          <Swiper {...params}>
            <img src={Firefox} alt="" />
            <img src={Bullfit} alt="" />
            <img src={Adroll} alt="" />
            <img src={Eventbrite} alt="" />
            <img src={Aqua} alt="" />
            <img src={Pencil} alt="" />
            <img src={Sixbase} alt="" />
          </Swiper>
        </Container>
      </Section>
    </>
  );
}

export default Clients;
