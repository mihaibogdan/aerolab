import React from 'react';

import { Heading2, Paragraph } from '../../assets/styles/typography';
import { GradientButton } from '../../assets/styles/buttons';

import { Section, Container, LeftSection, RightSection, Image, Input, TextArea } from './style';

function Contact() {
  return (
    <>
      <Section id="contact">
        <Container>
          <LeftSection>
            <Heading2>Let’s cooperate!</Heading2>
            <Paragraph color="#7e7e7e" margin="0px 0px 60px 0px">
              Let’s become partners to build a better future for today.
            </Paragraph>
            <form>
              <Input type="text" placeholder="Name *" name="name" width="calc(50% - 20px)" />
              <Input
                type="email"
                placeholder="Email *"
                name="email"
                marginLeft="20px"
                width="50%"
              />
              <Input type="text" placeholder="Subject *" name="subject" />

              <TextArea placeholder="Message *" />

              <GradientButton>Send Message</GradientButton>
            </form>
          </LeftSection>

          <RightSection>
            <Image src="src/assets/img/contact-image.png" />
          </RightSection>
        </Container>
      </Section>
    </>
  );
}

export default Contact;
