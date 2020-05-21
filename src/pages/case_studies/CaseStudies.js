import React, { useState } from 'react';
import { Heading2, Heading6, Paragraph } from 'assets/styles/typography';

import ContactImage from 'assets/img/contact/contact-image.png';
import NavbarInner from '../../components/navbar_inner';
import Footer from '../../components/footer';

import { Section, Container, CenteredTitle, CardSection, Card, Image } from './style';

function CaseStudies() {
  return (
    <>
      <NavbarInner />
      <Section margin="80px 0px 0px 0px">
        <Container>
          <CenteredTitle data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
            <Heading2>Web Apps</Heading2>
          </CenteredTitle>
          <CardSection>
            <Card>
              <Image src={ContactImage} />
              <Heading6 margin="10px 0px">Manage Time</Heading6>
              <Paragraph color="inherit" textAlign="center">
                Controlling your daily tasks, assign and discuss on projects, checking deadlines and
                set time to relax.
              </Paragraph>
            </Card>
          </CardSection>
        </Container>
      </Section>
      <Footer />
    </>
  );
}

export default CaseStudies;
