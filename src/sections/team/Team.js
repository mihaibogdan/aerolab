import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';

import { Heading2, Paragraph } from '../../assets/styles/typography';
import { Section, Container, CenteredTitle } from './style';
import TeamCard from '../../components/teamCard';

function Team() {
  const params = {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  };
  return (
    <>
      <Section id="team">
        <Container>
          <CenteredTitle>
            <Heading2 color="#fff">Our experience experts</Heading2>
          </CenteredTitle>
          <Paragraph textAlign="center" margin="15px 0px 60px 0px">
            We’ll help you achieve your marketing & business goals
          </Paragraph>

          <Swiper {...params}>
            <TeamCard
              cardAvatar="src/assets/img/avatar1.png"
              cardTitle="Chad Brewer"
              cardSubtitle="Director"
              facebook="#"
              twitter="#"
              instagram="#"
            />
            <TeamCard
              cardAvatar="src/assets/img/avatar2.png"
              cardTitle="Eric Smith"
              cardSubtitle="CEO Founder"
              facebook="#"
              twitter="#"
              instagram="#"
            />
            <TeamCard
              cardAvatar="src/assets/img/avatar3.png"
              cardTitle="Erik Murray"
              cardSubtitle="Founder"
              facebook="#"
              twitter="#"
              instagram="#"
            />
            <TeamCard
              cardAvatar="src/assets/img/avatar4.png"
              cardTitle="Cynthia Casey"
              cardSubtitle="Designer"
              facebook="#"
              twitter="#"
              instagram="#"
            />
            <TeamCard
              cardAvatar="src/assets/img/avatar1.png"
              cardTitle="Chad Brewer"
              cardSubtitle="Director"
              facebook="#"
              twitter="#"
              instagram="#"
            />
            <TeamCard
              cardAvatar="src/assets/img/avatar1.png"
              cardTitle="Chad Brewer"
              cardSubtitle="Director"
              facebook="#"
              twitter="#"
              instagram="#"
            />
            <TeamCard
              cardAvatar="src/assets/img/avatar2.png"
              cardTitle="Eric Smith"
              cardSubtitle="CEO Founder"
              facebook="#"
              twitter="#"
              instagram="#"
            />
            <TeamCard
              cardAvatar="src/assets/img/avatar3.png"
              cardTitle="Erik Murray"
              cardSubtitle="Founder"
              facebook="#"
              twitter="#"
              instagram="#"
            />
          </Swiper>
        </Container>
      </Section>
    </>
  );
}

export default Team;
