import React from 'react';

import { Heading2, Heading6, Paragraph } from 'assets/styles/typography';
import {
  Section,
  Container,
  CenteredTitle,
  AccordionItems,
  AccordionItem,
  AccordionTitle,
  AccordionContentWrapper,
  AccordionContent,
} from './style';

function Seo() {
  const showItem = (e) => {
    console.log(e);
  };

  return (
    <>
      <Section id="seo">
        <Container>
          <CenteredTitle data-aos="fade-up" data-aos-duration="600" data-aos-delay="100">
            <Heading2>SEO</Heading2>
          </CenteredTitle>
          <AccordionItems>
            <AccordionItem>
              <AccordionTitle onClick={showItem}>
                <Heading6>Completely responsive</Heading6>
              </AccordionTitle>
              <AccordionContentWrapper>
                <AccordionContent>
                  <Paragraph color="inherit">
                    AeroLand appears professional in design and responsive in performance. It proves
                    to be highly customizable and efficient for landing site building. Engage
                    yourself in the most effortless and well-appointed process with AeroLand.
                  </Paragraph>
                </AccordionContent>
              </AccordionContentWrapper>
            </AccordionItem>
          </AccordionItems>
        </Container>
      </Section>
    </>
  );
}

export default Seo;
